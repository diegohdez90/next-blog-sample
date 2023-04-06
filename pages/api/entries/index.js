import { close, connect, create, getEntries } from "../../../condig/db";


export default async function handler(req, res) {
    if(req.method === 'POST') {
        const client = await connect();
        const { body } = req;
        const id = await create(client, 'blog', 'entries', {
            fullName: body.fullName,
            email: body.email,
            nickname: body.nickname,
            title: body.title,
            tags: body.tags,
            content: body.content.trim(),
            imageURL: body.imageURL,
            profileURL: body.profileURL,
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
        console.log('featured', featured);
        if (featured) {
            dbQuery = {
                ...dbQuery,
                featured: Boolean(featured)
            };
        }
        const entries = await getEntries(client, 'blog', 'entries', dbQuery);
        console.log(entries);
        res.status(200).json({
            message: 'Entries retrieved',
            entries: entries
        })
    }
}