import { close, connect, queryInEntry } from "../../../../condig/db";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if(req.method === 'GET') {
        const client = await connect();
        const { query } = req;
        const id = query;
        const [entry] = await queryInEntry(client, 'blog', 'entries', {
            _id: new ObjectId(id)
        });

        res.status(200).json({
            message: 'Entry',
            entry: entry
        });
        close(client);
    }
}