import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Segment, Form, Button, Message, Modal, Header } from 'semantic-ui-react'
import { apiBaseUrl } from '../../utils/constants'

const LoginForm = () => {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(false)
    
    const fetchLogin = () => {
        fetch(`${apiBaseUrl}/api/v1/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user: { 
                username: username, 
                password: password 
            }})
        })
        .then(response => response.json())
        .then(data => {
            if (data.user){
                localStorage.setItem('jwt', data.jwt)
                window.location.href = '/'
            } else {
                setError(true)
            }
        })
    }

    return (
        <Segment padded='very' className='login-form'>
            <Form onSubmit={fetchLogin}>
                <Form.Group>
                    <Form.Input 
                        id='username'
                        label='Username'
                        type='text' 
                        placeholder='Username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Input 
                        id='password'
                        label='Password'
                        type='password' 
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    /><br></br>  
                </Form.Group><br/>
                    {error && 
                        <Form.Group>
                            <Form error>
                                <Message error content='incorrect username or password'/>
                            </Form>
                        </Form.Group> 
                    }
                <Form.Group >
                    <Button fluid type='submit'>Sign In</Button>
                </Form.Group>
            </Form>
        </Segment>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default withRouter(connect(mapStateToProps)(LoginForm))

