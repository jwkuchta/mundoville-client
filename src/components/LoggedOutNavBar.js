import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import logo from '../photos/logo_teal_cropped.png'
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
                    <div style={{ backgroundColor: 'white', position: 'relative'}}>
                        {/* <a href="/" ><img src={logo} alt="logo white" className='logo'></img></a> */}
                        <div style={{display: 'inline-block', backgroundColor: 'white', float:'left', paddingLeft: '10px'}}>
                        <a href="/" onClick={() => window.location.href = '/'}>
                        <img 
                            src={logo} 
                            alt="logo"
                            className='logo'
                            ></img>
                        </a><br></br>
                        </div>
                    
                    <div style={{display: 'inline-block', backgroundColor: 'white'}}>
                        <nav>
                            <ul><li style={{color: 'white'}}>nothing to see here</li></ul>
                            <ul><li style={{color: 'white'}}>nothing to see here either</li></ul>
                            <ul><li style={{color: 'white'}}>still nothing to see</li></ul>
                            <ul> 
                                <li><a href="/about">About</a></li>
                                <li><a href="#" onClick={() => this.props.setOption('login')}>Log In</a></li>
                                <li><a href="#" onClick={() => this.props.setOption('signup')}>Sign Up</a></li>
                                <li style={{color: 'white'}}>nothing to see here</li>
                                <li style={{color: 'white'}}>nothing to see here</li>
                                
                            </ul>
                        </nav>
                    </div>
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