import { FormControl, Input, Stack } from '@chakra-ui/react';
import React from 'react'

const SignIn = () => {
  return (
    <div><form>
        <Stack spacing={6}>
            <FormControl>
                <Input type='text' placeholder='Username' />
            </FormControl>
            <FormControl>
                <Input type='email' placeholder='Email' />
            </FormControl>
            <FormControl>
                <Input type='text' placeholder='Full name' />
            </FormControl>
            <FormControl>
                <Input type='password' placeholder='Password' />
            </FormControl>
            <FormControl>
                <Input type='password' placeContent='Confirm your password' />
            </FormControl>
            <FormControl>
                <Input type='submit' value='Sign in' />
            </FormControl>
        </Stack>
        </form></div>
  )
}

export default SignIn;
