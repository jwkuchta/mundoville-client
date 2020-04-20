import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

class SignupForm extends Component {

    state = {}

    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
        console.log(this.state)
    }

    validateInput = () => {
        for(let field of Object.values(this.state)) {
            // debugger
            if(field === '') {
                // debugger
                console.log('this is empty')
                return false
            }
        }
        return true
        // debugger
    }

    handleSubmit = e => {
        // debugger
        e.preventDefault()

        const valid = this.validateInput()

        if (valid === true) {
            let user = {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                username: this.state.username, 
                password: this.state.password, 
                email: this.state.email,
            }

            this.addNewUser(user)
        } else {
            window.location.href='/'
        }
    }

    addNewUser = user => {
        debugger
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user: user})
        }, this.setState({
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: ''
        }))
        .then(r => r.json())
        .then(data => {
            debugger
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
                <Segment padded='very' className='signup-form'>
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group>
                            <Form.Input 
                                id='firstName'
                                name='firstName'
                                label='First Name'
                                type='text'
                                placeholder='First Name'
                                value={this.state.firstName}
                                onChange={e => this.handleChange(e)}
                            />
                            <Form.Input 
                                id='lastName'
                                name='lastName'
                                label='Last Name'
                                type='text' 
                                placeholder='Last Name'
                                value={this.state.LastName}
                                onChange={e => this.handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input 
                                id='email'
                                name='email'
                                label='Email'
                                type='text' 
                                placeholder='Email'
                                value={this.state.email}
                                onChange={e => this.handleChange(e)}
                            />
                            <Form.Input 
                                id='username'
                                name='username'
                                label='Username'
                                type='username' 
                                placeholder='Username'
                                value={this.state.username}
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
                                label='Password Confirmation'
                                type='passwordConfirmation' 
                                placeholder='Password Confirmation'
                                value={this.state.passwordConfirmation}
                                onChange={e => this.handleChange(e)}
                            />
                        </Form.Group>
                        <Button type='submit'>Sign Up</Button>
                    </Form>
                </Segment>
            )
        }
    }
}

export default SignupForm

