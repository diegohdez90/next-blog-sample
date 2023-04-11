import { Fragment } from "react";
import SignInUI from '../../components/Auth/SignIn';

const SignIn = () => {
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
