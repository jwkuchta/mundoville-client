import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

class SignupForm extends Component {
    
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            passwordConfirm: '',
            user: false
        }
    }

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
        // debugger

        if (valid === true) {
            // debugger
            if (this.state.password === this.state.passwordConfirm ) {
                // debugger
                let user = {
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    username: this.state.username, 
                    password: this.state.password, 
                    email: this.state.email,
                }
    
                this.addNewUser(user)
    
            } else {
                alert("passwords don't match")
            }
        } else {
            alert("one or more fields were missing") 
            window.location.href='/'
        }
    }

    addNewUser = user => {
        // debugger
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
                                type='text' 
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
                                id='passwordConfirm'
                                name='passwordConfirm'
                                label='Password Confirmation'
                                type='password' 
                                placeholder='Re-enter password'
                                value={this.state.passwordConfirm}
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

