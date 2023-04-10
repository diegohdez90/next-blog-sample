import { FormControl, Input, Stack } from '@chakra-ui/react';
import React, { useRef } from 'react'

const Login = (props) => {

  const usernameRef = useRef();
  const passwordRef = useRef();

  const onLogin = e => {
    e.preventDefault();
    const { value: username } = usernameRef.current;
    const { value: password } = passwordRef.current
    props.login(username, password);
  }

  return (
    <div>
        <form onSubmit={onLogin}>
            <Stack spacing={6}>
                <FormControl>
                    <Input type='text' placeholder='Enter password' ref={usernameRef} />
                </FormControl>
                <FormControl>
                    <Input type='password' placeholder='Password' ref={passwordRef} />
                </FormControl>
                <FormControl>
                    <Input type='submit' value='Login' />
                </FormControl>
            </Stack>
        </form>
    </div>
  )
}

export default Login;
