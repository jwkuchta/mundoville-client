import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

const NewMessageForm = (props) => {

    const [body, setBody] = useState('')

    const handleChange = e => {
        console.log(body)
        setBody({body: e.target.value})
    }

    const handleSubmit = (e, body) => {
        // debugger
        e.preventDefault()

        let otherUserId = props.exchange.second_user_id !== props.currentUser.id
            ? props.exchange.second_user_id : props.exchange.first_user_id

        fetch('http://localhost:4000/api/v1/exchanges',{
            method: 'POST',
            headers: {
                // 'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                first_user_id: props.currentUser.id,
                second_user_id: otherUserId,
                body: body
            })
        })
        .then(r => r.json())
        .then(data => {
            alert('your message was sent')
            window.location.href='/messages'
            //cprops.setPageMessages()
        })
        setBody('')
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e, body)}>
            <Form.TextArea 
                value={body}
                onChange={(e) => handleChange(e)} 
            />
            <Button 
                type='submit' 
                floated='right' 
                content='Reply' 
                labelPosition='right' 
                icon='pencil' 
            />
        </Form>
    )
}

export default NewMessageForm