import React, { Component } from 'react'
import logo_white from '../photos/logo_white.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

class LoggedOutNavBar extends Component {

    state = {option: ''}

    render() {

        switch(this.state.option) {
            case 'login':
                return <LoginForm />
            case 'signup':
                return <SignupForm />
            default:
                return (
                    <div>
                        <a href="/" ><img src={logo_white} alt="logo white"></img></a>
                        <nav>
                            <ul> 
                                <li><a href="/about">About</a></li>
                                <li><a onClick={() => this.setState({option: 'login'})}>Log In</a></li>
                                <li><a onClick={() => this.setState({option: 'signup'})}>Sign Up</a></li>
                                
                            </ul>
                        </nav>
                    </div>
                )
        }
    }
}  

export default LoggedOutNavBar