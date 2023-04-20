import { getServerSession } from "next-auth";
import { close, connect, updatePassword } from "../../../config/db";
import { authOptions } from './[...nextauth]';
import { getToken } from "next-auth/jwt";


export default async function handler(req, res) {
    const DB_NAME = process.env.DB_NAME;
    if (req.method === 'PATCH') {
        const client = await connect();
        const session = await getServerSession(req, res, authOptions);

        console.log(session);

        if (!session) {
            res.status(404).json({
                message: 'Unable to change password'
            });
            return;
        }

        const user = session.user.email;
        const oldPassword = req.body.oldPassword;
        const newPassword = req.body.newPassword;

        const result = await updatePassword(client, DB_NAME, oldPassword, {
            email: user.email,
        }, newPassword);

        res.status(result.code || 200).json({
            message: result.message || 'Password updated successful'
        });
        close(client);
        return;
    }
}