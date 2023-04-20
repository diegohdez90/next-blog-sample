import { Box, FormControl, Input, Spinner, Stack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment, useRef } from "react";

const ChangePassword = () => {

    const oldPasswordRef = useRef();
    const newPasswordRef = useRef();

    const router = useRouter();
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace("/");
        },
    })

    if (status === 'loading') {
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

    const onChangePassword = (e) => {
        e.preventDefault();

        const { value: oldPassword } = oldPasswordRef.current;
        const { value: newPassword } = newPasswordRef.current;
        fetch('/api/auth/change-password', {
            method: 'PATCH',
            body: JSON.stringify({
                oldPassword,
                newPassword
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });
    }

    return (<Fragment>
        <Box>
            <form onSubmit={onChangePassword}>
                <Stack spacing={6}>
                    <FormControl>
                        <Input type="password" placeholder="Old Password" ref={oldPasswordRef} />
                    </FormControl>
                    <FormControl>
                        <Input type="password" placeholder="New Password" ref={newPasswordRef} />
                    </FormControl>
                    <Input type="submit" value="Change Password" />
                </Stack>
            </form>
        </Box>
    </Fragment>);
}

export default ChangePassword;
