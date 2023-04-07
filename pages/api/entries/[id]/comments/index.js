import { close, connect, postComment } from "../../../../../condig/db";
import { ObjectId } from 'mongodb';


export default async function handler(req, res) {
    if(req.method === 'POST') {
        const client = await connect();
        const { query, body } = req;
        const {id} = query;
        console.log(body);
        console.log(id);
        const {
            fullName,
            email,
            comments
        } = body;

        const commentId = await postComment(client, 'blog', 'comments', {
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