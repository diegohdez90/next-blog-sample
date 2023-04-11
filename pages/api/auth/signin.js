import { connect, getIfAccountIsAvailable, signIn, close } from "../../../config/db";

export default async function handler(req, res) {

    const DB_NAME = process.env.DB_NAME;
    if(req.method === 'POST') {
        const client = await connect();
        const { body } = req;
        const {
            username,
            email,
            fullName,
            password,
            confirmPassword
        } = body;

        if (password !== confirmPassword) {
            res.status(403).json({
                message: 'Password does not match'
            });
            close(client);
        }

        const count = await getIfAccountIsAvailable(client, DB_NAME, {
            email,
            username,
        });

        if (count > 0) {
            res.status(401).json({
                message: 'Username or email is being used in the system',
                count: count
            });
            close(client);
        }

        const id = await signIn(client, DB_NAME, 'users', {
            username,
            email,
            fullName,
            password
        });
        res.status(201).json({
            message: 'User Created successfully',
            entryId: id
        });
        close(client);
    }
}
