import { MongoClient, ServerApiVersion } from 'mongodb';


export async function connect() {

    const mongoClient = new MongoClient('mongodb+srv://taintery:radP8vnJnWfGrSS7@blogcluster.ywribm7.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1 });
    
    try {
        await mongoClient.connect();
        return mongoClient;
    } catch (error) {
        console.error('Connection failed!');
        process.exit();
    }
}

export async function create(client, dbName, collection, data) {
    const db = client.db(dbName);
    const user = await db.collection('users').findOne({
        nickname: data.nickname 
    });

    let userId = null;

    if (!user) {
        const userCreated = await db.collection('users').insertOne({
            fullName: data.fullN<me,
            email: data.email,
            nickname: data.nickname,
            profileURL: data.profileURL
        });
        userId = userCreated.insertedId; 
    } else {
        userId = user._id
    }

    const entryId = await db.collection(collection).insertOne({
        user: userId,
        tags: data.tags,
        content: data.content,
        imageURL: data.imageURL,
        featured: false,
        date: Date.now()
    });

    return entryId;
}

export async function queryInEntry(client, dbName, collection, query) {
    const db = client.db(dbName);
    return await db.collection(collection).aggregate([{
        "$match": query,
    }, {
        "$lookup": {
            from: "users",
            localField: "user",
            foreignField: "_id",
            as: "publisher"
        } 
    }])
        .toArray();
}

export async function postComment(client, dbName, collection, data) {
    const db = client.db(dbName);
    const result = await db.collection(collection).insertOne(data)
    return result.insertedId;
}


export async function close(client) {
    client.close();
}
