import { connect, signIn } from "../../../config/db";

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
        console.log(body);
        console.log(password, confirmPassword);
        console.log(password !== confirmPassword);

        if (password !== confirmPassword) {
            res.status(403).json({
                message: 'Password does not match'
            });
        }
        console.log('ready to add');
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
