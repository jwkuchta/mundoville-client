import React, { Component } from 'react'
import { Segment, Form, Button, Message } from 'semantic-ui-react'

class LoginForm extends Component {

    state = {}

    fetchLogin = () => {
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
                this.setState({loggedIn: true})
            } else {
                this.setState({errorMessage: true})
            }
        })
    }

    render() {

        return (
            <>
                {(this.state.loggedIn) && (window.location.href = '/')}
                <Segment padded='very' className='login-form'>
                    <Form onSubmit={this.fetchLogin}>
                        <Form.Group>
                            <Form.Input 
                                id='username'
                                label='Username'
                                type='text' 
                                placeholder='Username'
                                value={this.state.username}
                                onChange={e => this.setState({[e.target.id]: e.target.value})}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input 
                                id='password'
                                label='Password'
                                type='password' 
                                placeholder='Password'
                                value={this.state.password}
                                onChange={e => this.setState({[e.target.id]: e.target.value})}
                            /><br></br>  
                        </Form.Group><br/>
                            {this.state.errorMessage && 
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
            </>
        )
    }
}

export default LoginForm

