import { Box, Input, InputGroup, Text, Textarea } from "@chakra-ui/react"
import { useRef } from "react"
import { Fragment } from "react"

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
        <Box w= '100%'>
            <form onSubmit={onSubmitEntry}>
                <InputGroup>
                    <Input placeholder="Full Name" ref={fullNameRef} />
                </InputGroup>
                <InputGroup>
                    <Input placeholder="Email" ref={emailRef}/>
                </InputGroup>
                <InputGroup>
                    <Input placeholder="Nickname" ref={nicknameRef} />
                </InputGroup>
                <InputGroup>
                    <Input placeholder="image URL" ref={imageURLRef} />
                </InputGroup>
                <InputGroup>
                    <Input placeholder="Profile Image" ref={profileURLRef} />
                </InputGroup>
                <InputGroup>
                    <Input placeholder="Tags (separate by commas)" ref={tagsRef} />
                </InputGroup>
                <InputGroup>
                    <Textarea placeholder="Enter your entry here" rows={4} ref={contentRef} />
                </InputGroup>
                <InputGroup>
                    <Input type="submit" value='Submit entry' />
                </InputGroup>
            </form>
        </Box>
    </Fragment>)
}

export default Create