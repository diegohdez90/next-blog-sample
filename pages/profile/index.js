import { Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import { Fragment, useEffect } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/router";


const Profile = () => {

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

    return (<Fragment>
        <Heading title='h3'>
            <Text>Profile</Text>
        </Heading>
    </Fragment>);
}

export default Profile;
