import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

class SignupForm extends Component {
    
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            passwordConfirmation: '',
            email: '',
            user: false
        }
    }

    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
        console.log(this.state)
    }

    handleSubmit = e => {
        // debugger
        e.preventDefault()

        if ( this.state.password === this.state.passwordConfirmation ) {
            let user = {
                username: this.state.username, 
                password: this.state.password, 
                email: this.state.email,
                user_type: this.state.userType
            }

            this.addNewUser(user)

        } else {
            alert("passwords don't match")
        }
    }

    addNewUser = user => {
        fetch('https://mundoville-api.herokuapp.com/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user: user})
        }, this.setState({
            username: '',
            password: '',
            passwordConfirmation: '',
            email: ''
        }))
        .then(r => r.json())
        .then(data => {
            localStorage.setItem('jwt', data.jwt)
            this.setState({
                ...this.state,
                user: true
            })
        })
    }

    render() {

        if (this.state.user) {
            return window.location.href = "/"
        } else {
            return (
                <Segment padded='very' className='main-page-forms'>
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group>
                            <Form.Input 
                                id='username'
                                name='username'
                                label='Username'
                                type='text' 
                                placeholder='Username'
                                value={this.state.username}
                                onChange={e => this.handleChange(e)}
                            />
                            <Form.Input 
                                id='email'
                                name='email'
                                label='Email'
                                type='text' 
                                placeholder='Email'
                                value={this.state.email}
                                onChange={e => this.handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input 
                                id='password'
                                name='password'
                                label='Password'
                                type='password' 
                                placeholder='Password'
                                value={this.state.password}
                                onChange={e => this.handleChange(e)}
                            />
                            <Form.Input 
                                id='passwordConfirmation'
                                name='passwordConfirmation'
                                label='Confirm Password'
                                type='passwordConfirmation' 
                                placeholder='Confirm Password'
                                value={this.state.passwordConfirmation}
                                onChange={e => this.handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                        </Form.Group><br/>
                        <Button fluid type='submit'>Sign Up</Button>
                    </Form>
                </Segment>
            )
        }
    }
}

export default SignupForm