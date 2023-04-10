import { Fragment, useRef } from "react";
import LoginUI  from '../../components/Auth/Login';

const Login = () => {

    const onLogin = (username, password) => {

    }

    return (<Fragment>
        <LoginUI login={onLogin} />
    </Fragment>)
}

export default Login;
