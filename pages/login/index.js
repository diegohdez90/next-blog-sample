import { Fragment, useState } from "react";
import { signIn } from 'next-auth/react';
import LoginUI  from '../../components/Auth/Login';
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter();

    const [error, setError] = useState();
    const onLogin = async (account, password) => {
        const { error, ok, url } = await signIn('credentials', {
            redirect: false,
            email: account,
            password: password,
            callbackUrl: '/posts/create'
        });
        console.log(url, ok);
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
