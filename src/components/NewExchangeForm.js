import React, { useState, useEffect } from 'react'
import { Segment, Form, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { placeholder } from '../photos/round_placeholder.png'

const NewExchangeForm = props => {
    
    const [ body, setBody ] = useState()
    const [ recipientId, setRecipientId ] = useState()
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        let filteredUsers = props.allUsers.filter(user => user.id !== props.currentUser.id)
        let sortedUsers = filteredUsers.sort((a, b) => a.username - b.username)
        let users = []
        
        sortedUsers.map(user => {
            // let userInstance = {id: user.id, text: user.username, value: user.id}
            let userInstance = {
                key: user.id, 
                id: user.id, 
                // text: user.username, 
                text: `${user.first_name} ${user.last_name}`,
                value: user.id, 
                image: {avatar: true, src: user.profile_pic_url ? `http://localhost:3000/${user.profile_pic_url}` : placeholder}
            }
            users.push(userInstance)
            return users
        })
        setUsers(users)
    }, [])

    const handleRecipient = e => {
        // debugger
        let firstName = e.target.innerText.split(' ')[0]
        let lastName = e.target.innerText.split(' ')[1]
        let recipient = props.allUsers.find(u => u.first_name === firstName && u.last_name === lastName)
            if(recipient !== undefined) {
                setRecipientId(recipient.id)
            } else {
                return 
            }  
    }

    const handleSubmit = e => {
        e.preventDefault()
        postNewExchange()
        // resetState()  
        window.location.href='/messages'
        props.setPageMessages()
    }

    const postNewExchange = () => {
        fetch('http://localhost:3000/api/v1/exchanges', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                first_user_id: props.currentUser.id,
                second_user_id: Number.parseInt(recipientId),
                body: body
            })
        })
        .then(resp => console.log(resp))
    }

    return (
        <Segment padded='very' style={{backgroundColor: '#528FBB'}}>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Select required
                        search
                        options
                        inline
                        label='To: '
                        floating
                        options={users}
                        placeholder='Select User'
                        onChange={(e) => handleRecipient(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.TextArea width={15}
                        inline
                        id='body'
                        placeholder='Type your message here'
                        onChange={(e) => setBody(e.target.value)}
                    />
                </Form.Group>
                <Button type='submit' content='Send' />
            </Form>
        </Segment>
    )
}

const mapSTP = state => {
    return {
        allUsers: state.users,
        currentUser: state.currentUser
    }
}

export default connect(mapSTP)(NewExchangeForm)

