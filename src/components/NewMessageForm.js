import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { apiBaseUrl } from '../utils/constants'

const NewMessageForm = ({ exchange, currentUser }) => {
    
    const [ message, setMessage ] = useState()

    const handleSubmit = (e) => {
        // e.target.childNodes[1].firstChild.value would also work
        e.preventDefault()
        postNewMessage()
    }

    const postNewMessage = () => {
        let otherUserId = exchange.second_user_id !== currentUser.id
        ? exchange.second_user_id 
        : exchange.first_user_id
        const messageBody = {
            first_user_id: currentUser.id,
            second_user_id: otherUserId,
            body: message
        }

        fetch(`${apiBaseUrl}/api/v1/exchanges`,{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(messageBody)
        })
        .then(r => r.json())
        .then(window.location.href='/messages')
        .catch(e => console.log(e))
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.TextArea 
                value={message}
                onChange={(e) => setMessage(e.target.value)} 
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

export default withRouter(NewMessageForm)