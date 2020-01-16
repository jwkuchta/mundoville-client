import React, { Component } from 'react'
import { Button, Form, Segment} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {logIn, setCurrentUser} from '../redux/actions'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            user: false
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLogin = (e) => {
        e.preventDefault()
        let user = this.state
        this.props.logIn(user)
        this.props.setCurrentUser({username: this.state.username, user: true})
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
                                onChange={(e) => this.changeHandler(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input 
                                id='password'
                                label='Password'
                                type='password' 
                                placeholder='Password'
                                value={this.state.password}
                                onChange={(e) => this.changeHandler(e)}
                            />
                        </Form.Group><br/>
                        <Form.Group >
                            <Button fluid type='submit'>Sign In</Button>
                        </Form.Group>
                    </Form>
                    
                </Segment>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logIn: user => dispatch(logIn(user)),
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
}

// export default connect(null, mapDispatchToProps)(LoginForm)
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

