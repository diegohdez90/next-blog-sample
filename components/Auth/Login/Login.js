import { Alert, FormControl, Input, Stack } from '@chakra-ui/react';
import React, { useRef } from 'react'

const Login = (props) => {

  const { error } = props;

  const accountRef = useRef();
  const passwordRef = useRef();

  const onLogin = e => {
    e.preventDefault();
    const { value: account } = accountRef.current;
    const { value: password } = passwordRef.current;
    props.login(account, password);
  }

  return (
    <div>
        <form onSubmit={onLogin}>
            <Stack spacing={6}>
                <FormControl>
                    <Input type='text' placeholder='Enter username / email' ref={accountRef} />
                </FormControl>
                <FormControl>
                    <Input type='password' placeholder='Password' ref={passwordRef} />
                </FormControl>
                <FormControl>
                    <Input type='submit' value='Login' />
                </FormControl>
                {error && <Alert color='white' status='error'>{
                    error
                }</Alert>}
            </Stack>
        </form>
    </div>
  )
}

export default Login;
