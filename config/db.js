import { MongoClient, ServerApiVersion } from 'mongodb';
import { hash, compare } from '../utils/hash';


export async function connect() {

    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const MONGODB_CLUSTER = process.env.MONGODB_CLUSTER;

    const mongoClient = new MongoClient(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${MONGODB_CLUSTER}/?retryWrites=true&w=majority`, {
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

export async function signIn(client, dbName, collection, data) {
    const db = client.db(dbName);
    const hashedPassword = hash(data.password);

    const result = await db.collection(collection).insertOne({
        username: data.username,
        email: data.email,
        fullName: data.fullName,
        hash: hashedPassword
    });
    return result.insertedId;
}

export async function login(client, dbName, collection, data) {
    const db = client.db(dbName);
    const user = await db.collection(collection).findOne({
        username: data.username
    });

    const response = {};

    if(!user) {
        return {
            message: 'User not found'
        }
    }

    return compare(data.password, user.hash);
}

export async function getIfAccountIsAvailable(client, dbName, query) {
    const db = client.db(dbName);
    return await db.collection('users').count({
        '$or': [{
            email: query.email
        }, {
            username: query.username
        }]
    });
}

export async function updatePassword(client, dbName, oldPassword, query, newPassword) {
    const db = client.db(dbName);
    console.log('query', query);
    const user = await db.collection('users').findOne(query);

    console.log('user', user);
    if(!user) {
        return {
            message: 'No user found!',
            code: 404
        };
    }

    const matched = compare(oldPassword, user.hash);

    console.log('matched', matched);
    if (!matched) {
        return {
            message: 'Password does not match',
            code: 401
        }
    }

    const hashedPassword = hash(newPassword);

    const result = await db.collection('users').updateOne({
        fullName: user.fullName,
        username: user.username,
        email: user.email
    }, {
        $set: {
            hash: hashedPassword
        }
    }, {
        upsert: true
    });

    return result;
}

export async function close(client) {
    client.close();
}
