import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { Image, Menu, Container, Sticky, Button } from 'semantic-ui-react'
import logo_white from '../photos/logo_white.png'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import '../css/App.scss'

class NavBar extends Component {

    
    constructor() {
        super()
        this.state = {option: ''}
    }

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
                            <li><a onClick={() => this.state.option='login'}>Log In</a></li>
                            <li><a onClick={() => this.state.option="signup"}>Sign Up</a></li>
                        </ul>
                    </nav>
                </div>
            )
        }
    } 
}  

const mapSTP = state => {
    return {
        currentUser: state.currentUser,
        allUsers: state.users
    }
}

export default connect(mapSTP)(NavBar)
// export default NavBar

