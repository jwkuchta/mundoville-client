import React from 'react'
import { Container } from 'semantic-ui-react'
import logo from '../photos/logo_teal_cropped.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const LoggedOutNavBar = props => {

    return (
        <>
        {props.option === 'login' && <><Container><LoginForm /></Container></>}
        {props.option === 'signup' && <><Container><SignupForm /></Container></>}
            
        <div style={{ backgroundColor: 'white', position: 'relative'}}>
            <div style={{display: 'inline-block', backgroundColor: 'white', float:'left', paddingLeft: '10px'}}>
                <Link to='/' onClick={() => props.clearOption('')}>
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
                        <li><Link to='/about' onClick={() => props.clearOption('')}>About</Link></li>
                        <li><a href="#" onClick={() => props.setOption('login')}>Log In</a></li>
                        <li><a href="#" onClick={() => props.setOption('signup')}>Sign Up</a></li>
                        <li style={{color: 'white'}}>nothing to see here</li>
                        <li style={{color: 'white'}}>nothing to see here</li>
                        
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}  

const mapStateToProps = state => {
    return {
        option: state.option
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setOption: (option) => dispatch({type: 'SET_OPTION', payload: option}),
        clearOption: (option) => dispatch({type: 'CLEAR_OPTION', payload: option})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedOutNavBar)