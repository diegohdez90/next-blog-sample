import { close, connect, create, queryInEntry } from "../../../config/db";


export default async function handler(req, res) {
    const DB_NAME = process.env.DB_NAME;
    if(req.method === 'POST') {
        const client = await connect();
        const { body } = req;
        const id = await create(client, DB_NAME, 'entries', {
            fullName: body.fullName,
            email: body.email,
            nickname: body.nickname,
            tags: body.tags,
            content: body.content.trim(),
            imageURL: body.imageURL,
            profileURL: body.profileURL,
            date: Date.now(),
        });
        res.status(201).json({
            message: 'Feedback sent successful',
            entryId: id
        });
        close(client);
    }

    if (req.method === 'GET') {
        const client = await connect();
        const { query } = req;
        const { featured } = query;

        let dbQuery = {};
        if (featured) {
            dbQuery = {
                ...dbQuery,
                featured: Boolean(featured)
            };
        }
        const entries = await queryInEntry(client, DB_NAME, 'entries', dbQuery);
        res.status(200).json({
            message: 'Entries retrieved',
            entries: entries
        });
        close(client);
    }
}