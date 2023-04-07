import { Box, FormControl, Heading, Input, Stack, Text, Textarea } from "@chakra-ui/react"
import Head from "next/head";
import { useRef, Fragment } from "react"

const Create =  () => {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const nicknameRef = useRef();
    const imageURLRef = useRef();
    const profileURLRef = useRef();
    const tagsRef = useRef();
    const contentRef = useRef();

    const onSubmitEntry = (e) => {
        e.preventDefault();
        const { value: fullName } = fullNameRef.current;
        const { value: email} = emailRef.current;
        const { value: nickname} =  nicknameRef.current;
        const { value: imageURL } = imageURLRef.current;
        const { value: profileURL } = profileURLRef.current;
        const { value: tags } = tagsRef.current;
        const { value: content } = contentRef.current;
        fetch('/api/entries', {
            method: 'POST',
            body: JSON.stringify({
                fullName,
                email,
                nickname,
                profileURL,
                imageURL,
                content,
                tags
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (<Fragment>
        <Head>
            <title>Create your post</title>
        </Head>
        <Heading margin='1em' as='h2'><Text align='center'>Create your post</Text></Heading>
        <form onSubmit={onSubmitEntry}>
            <Stack spacing={6}>
                <FormControl>
                        <Input placeholder="Full Name" ref={fullNameRef} />
                </FormControl>
                <FormControl>
                        <Input placeholder="Email" ref={emailRef}/>
                </FormControl>
                <FormControl>
                        <Input placeholder="Nickname" ref={nicknameRef} />
                </FormControl>
                <FormControl>
                        <Input placeholder="image URL" ref={imageURLRef} />
                </FormControl>
                <FormControl>
                        <Input placeholder="Profile Image" ref={profileURLRef} />
                </FormControl>
                <FormControl>
                        <Input placeholder="Tags (separate by commas)" ref={tagsRef} />
                </FormControl>
                <FormControl>
                        <Textarea placeholder="Enter your entry here" rows={4} ref={contentRef} />
                </FormControl>
                <FormControl>
                        <Input backgroundColor='blue.300' color='whiteAlpha.900' type="submit" value='Submit entry' />
                </FormControl>
            </Stack>
        </form>
    </Fragment>)
}

export default Create