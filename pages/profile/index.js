import { Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from "next/router";


const Profile = (props) => {

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

    console.log(props.data);
    return (<Fragment>
        <Heading title='h3'>
            <Text>Profile</Text>
        </Heading>
        <Text>Username: {props.data.user.email.username}</Text>
    </Fragment>);
}

export async function getServerSideProps(context) {
    const session = await getSession({
        req: context.req,
    });

    return {
        props: {
            data: session
        }
    }
}


export default Profile;
