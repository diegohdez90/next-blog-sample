import { close, connect, queryInEntry } from "../../../../config/db";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const DB_NAME = process.env.DB_NAME;
    if(req.method === 'GET') {
        const client = await connect();
        const { query } = req;
        const id = query;
        const [entry] = await queryInEntry(client, DB_NAME, 'entries', {
            _id: new ObjectId(id)
        });

        res.status(200).json({
            message: 'Entry',
            entry: entry
        });
        close(client);
    }
}