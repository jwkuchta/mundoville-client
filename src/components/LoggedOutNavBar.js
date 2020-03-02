import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import logo from '../photos/cropped_teal.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { setOption } from '../redux/actions'

class LoggedOutNavBar extends Component {

    state = {option: ''}

    render() {

        switch(this.state.option) {
            case 'login':
                return <Container>
                    <LoginForm />
                    </Container>
            case 'signup':
                return <Container>
                    <SignupForm />
                    </Container>
            default:
                return (
                    <div style={{ backgroundColor: 'white'}}>
                        <a href="/" ><img src={logo} alt="logo white" className='logo'></img></a>
                        <nav>
                            <ul> 
                                <li><a href="/about">About</a></li>
                                <li><a onClick={() => this.props.setOption('login')}>Log In</a></li>
                                <li><a onClick={() => this.props.setOption('signup')}>Sign Up</a></li>
                                
                            </ul>
                        </nav>
                    </div>
                )
        }
    }
}  

const mapDTP = dispatch => {
    return {
        setOption: (option) => dispatch(setOption(option))
    }
}

export default connect(null, mapDTP)(LoggedOutNavBar)