import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const NewMessageForm = props => {
    
    const [ body, setBody ] = useState()
    const { exchange, currentUser } = props

    const handleSubmit = (e, body) => {
        // debugger
        e.preventDefault()
        postNewMessage(body)
    }

    const postNewMessage = body => {
        let otherUserId = exchange.second_user_id !== currentUser.id
            ? exchange.second_user_id : exchange.first_user_id

        fetch('http://localhost:3000/api/v1/exchanges',{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                first_user_id: currentUser.id,
                second_user_id: otherUserId,
                body: body
            })
        })
        .then(r => r.json())
        .then(window.location.href='/messages')
        .catch(e => console.log(e))
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e, body)}>
            <Form.TextArea 
                value={body}
                onChange={(e) => setBody(e.target.value)} 
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