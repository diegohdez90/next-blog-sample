import { FormControl, Input, Stack } from '@chakra-ui/react';
import React, { useRef } from 'react'

const SignIn = (props) => {
  const usernameRef = useRef()
  const emailRef = useRef()
  const fullNameRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  
  const onSignIn = e => {
    e.preventDefault();
    console.log('on sign in');
    const { value: username } = usernameRef.current;
    const { value: email } = emailRef.current;
    const { value: fullName } = fullNameRef.current;
    const { value: password } = passwordRef.current;
    const { value: confirmPassword } = confirmPasswordRef.current;

    props.signIn(username, email, fullName, password, confirmPassword);
  }

  return (
    <div><form onSubmit={onSignIn}>
        <Stack spacing={6}>
            <FormControl>
                <Input type='text' placeholder='Username' ref={usernameRef} />
            </FormControl>
            <FormControl>
                <Input type='email' placeholder='Email' ref={emailRef} />
            </FormControl>
            <FormControl>
                <Input type='text' placeholder='Full name' ref={fullNameRef} />
            </FormControl>
            <FormControl>
                <Input type='password' placeholder='Password' ref={passwordRef} />
            </FormControl>
            <FormControl>
                <Input type='password' placeContent='Confirm your password' ref={confirmPasswordRef} />
            </FormControl>
            <FormControl>
                <Input backgroundColor='blue.300' color='whiteAlpha.900' type='submit' value='Sign in' />
            </FormControl>
        </Stack>
        </form></div>
  )
}

export default SignIn;
