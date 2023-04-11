import { Fragment, useState, useEffect } from "react";
import { getSession, signIn, useSession } from 'next-auth/react';
import LoginUI  from '../../components/Auth/Login';
import { useRouter } from "next/router";
import { Spinner, Stack } from "@chakra-ui/react";

const Login = () => {
    const router = useRouter();

    const [error, setError] = useState();

    const { status } = useSession();

    useEffect(() => {
        async function fetchSession(router) {
            const session = await getSession();
            if (session) {
                router.push("/");
            }
        }
        fetchSession(router);
    }, [router]);

    if (status === 'loading'|| status === 'authenticated') {
        return <Fragment>
            <Stack align='center'>
                <Spinner
                    thickness="6px"
                    speed="0.75s"
                    emptyColor='gray.200'
                    color="blue.500"
                    size='xl'
                />
            </Stack>
        </Fragment>
    }
    const onLogin = async (account, password) => {
        const { error, ok, url } = await signIn('credentials', {
            redirect: false,
            email: account,
            password: password,
            callbackUrl: '/posts/create'
        });
        if(error) {
            setError(error)
        }
        if(ok) {
            router.replace(url);
        }
    
    }


    return (<Fragment>
        <LoginUI login={onLogin} error={error} />
    </Fragment>)
}

export default Login;
