import { Heading, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/router";

const Profile = () => {

    const { status } = useSession();
    const router = useRouter();

    if (status !== 'authenticated') {
        router.replace("/")
    }

    return (<Fragment>
        <Heading title='h3'>
            <Text>Profile</Text>
        </Heading>
    </Fragment>);
}

export default Profile;
