import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import logo from '../photos/logo_teal_cropped.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

class LoggedOutNavBar extends Component {

    render() {
        return (
            <>
                {this.props.option === 'login' && <><Container><LoginForm /></Container></>}

                {this.props.option === 'signup' && <><Container><SignupForm /></Container></>}
                
                <div style={{ backgroundColor: 'white', position: 'relative'}}>
                    <div style={{display: 'inline-block', backgroundColor: 'white', float:'left', paddingLeft: '10px'}}>
                        <Link to='/' onClick={() => this.props.clearOption('')}>
                        <img 
                            src={logo} 
                            alt="logo"
                            className='logo'
                            ></img>
                        </Link>
                        <br></br>
                    </div>
                <div style={{display: 'inline-block', backgroundColor: 'white'}}>
                    <nav>
                        <ul><li style={{color: 'white'}}>nothing to see here</li></ul>
                        <ul><li style={{color: 'white'}}>nothing to see here either</li></ul>
                        <ul><li style={{color: 'white'}}>still nothing to see</li></ul>
                        <ul> 
                            <li><Link to='/about' onClick={() => this.props.clearOption('')}>About</Link></li>
                            <li><a href="#" onClick={() => this.props.setOption('login')}>Log In</a></li>
                            <li><a href="#" onClick={() => this.props.setOption('signup')}>Sign Up</a></li>
                            <li style={{color: 'white'}}>nothing to see here</li>
                            <li style={{color: 'white'}}>nothing to see here</li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </>
        )
    }
}  

const mapSTP = state => {
    return {
        option: state.option
    }
}

const mapDTP = dispatch => {
    return {
        setOption: (option) => dispatch({type: 'SET_OPTION', payload: option}),
        clearOption: (option) => dispatch({type: 'CLEAR_OPTION', payload: option})
    }
}

export default connect(mapSTP, mapDTP)(LoggedOutNavBar)