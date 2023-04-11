import { Fragment, useEffect } from "react";
import SignInUI from '../../components/Auth/SignIn';
import { useRouter } from "next/router";
import { Spinner, Stack } from "@chakra-ui/react";
import { getSession, useSession } from "next-auth/react";

const SignIn = () => {

    const router = useRouter();
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

    const onSignIn = (username, email, fullName, password, confirmPassword) => {
        fetch('/api/auth/signin', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                fullName,
                password,
                confirmPassword
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return (<Fragment>
        <SignInUI signIn={onSignIn} />
    </Fragment>);
};

export default SignIn;
