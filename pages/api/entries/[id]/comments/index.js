import { close, connect, postComment } from "../../../../../config/db";
import { ObjectId } from 'mongodb';


export default async function handler(req, res) {
    const DB_NAME = process.env.DB_NAME;
    if(req.method === 'POST') {
        const client = await connect();
        const { query, body } = req;
        const {id} = query;
        const {
            fullName,
            email,
            comments
        } = body;

        const commentId = await postComment(client, DB_NAME, 'comments', {
            fullName,
            email,
            comments,
            entryId: new ObjectId(id),
        });

        res.status(200).json({
            message: 'Comment Created',
            comment: commentId
        });
        close(client);
    }
}