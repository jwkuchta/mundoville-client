import React, { Component } from 'react'
import { Segment, Form, Button, Message } from 'semantic-ui-react'

class LoginForm extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            user: false,
            errorMessage: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLogin = (e) => {
        e.preventDefault()
        this.fetchLogin()
    }

    fetchLogin = () => {
        // debugger
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user: { 
                username: this.state.username, 
                password: this.state.password 
            }})
        })
        .then(response => response.json())
        .then(data => {
            // debugger
            if (data.user){
                localStorage.setItem('jwt', data.jwt)
                this.setState({
                    ...this.state,
                    user: true
                })
            } else {
                alert('Invalid Username or Password')
                this.setState({errorMessage: true})
            }
        })
    }

    render() {
        if (this.state.user) {
            return window.location.href = "/"
        } else {
            return (
                <Segment padded='very' className='main-page-forms'>
                    <Form onSubmit={(e) => this.handleLogin(e)}>
                        <Form.Group>
                            <Form.Input 
                                id='username'
                                label='Username'
                                type='text' 
                                placeholder='Username'
                                value={this.state.username}
                                onChange={(e) => this.handleChange(e)}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input 
                                id='password'
                                label='Password'
                                type='password' 
                                placeholder='Password'
                                value={this.state.password}
                                onChange={(e) => this.handleChange(e)}
                            /><br></br>  
                        </Form.Group><br/>
                            {this.state.errorMessage ? 
                                <Form.Group>
                                    <Form error>
                                        <Message error content='incorrect username or password'/>
                                    </Form>
                                </Form.Group> 
                            :
                            null}
                        <Form.Group >
                            <Button fluid type='submit'>Sign In</Button>
                        </Form.Group>
                    </Form>
                </Segment>
            )
        }
    }
}

export default LoginForm