import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials'
import { close, connect } from '../../../config/db';
import { compare } from '../../../utils/hash';

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const DB_NAME = process.env.DB_NAME;
                const client = await connect();
                const users = client.db(DB_NAME).collection('users');
                const account = await users.findOne({
                    '$or': [{
                        email: credentials.email
                    }, {
                        username: credentials.email
                    }]
                });

                if(!account) {
                    close(client);
                    throw new Error('User not found!')
                }

                const matched = compare(credentials.password, account.hash);

                if (!matched) {
                    close(client);
                    throw new Error('Password does not match!')
                }
                close(client);
                return {
                    email: account
                }
            }
        })
    ],
    callbacks: {
        jwt: async({
            token,
            user
        }) => {
            if(user) token.id = user.id
            return token;
        },
        session: async({
            session,
            token
        }) => {
            if (token) session.id = token.id
            return session;
        }
    }
});