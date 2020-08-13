import React from 'react'
import { connect } from 'react-redux'
import { Icon, Popup } from 'semantic-ui-react'
import logo from '../photos/logo_teal_cropped.png'
import '../css/App.scss'
import { withRouter, Link, Redirect } from 'react-router-dom'
import Radium, { StyleRoot } from "radium"

const LoggedInNavBar = props => {

    const handleLogOut = () => {
        localStorage.clear()
        props.clearUser()
        props.clearOption('')
    }

    if (!localStorage.jwt){
        return <Redirect to='/home' />;
    } 

    const style = {
        '@media (min-width: 500px)': {
            display: 'inline-block', width: '100vw', backgroundColor: 'green'
        },
        '@media (max-midth: 499px)': {
            display: 'inline-block', width: '50vw', backgroundColor: 'goldenrod'
        }
    }

    return (
        <StyleRoot>
            <div>
            <div style={{display: 'inline-block', width: '100vw', backgroundColor: 'white'}}>
            <div style={{display: 'inline-block', backgroundColor: 'white', float:'left', paddingLeft: '10px'}}>
            <Link to='/'>
                <Popup content='back to main page' trigger={<img 
                    src={logo} 
                    alt="logo"
                    className='logo'
                    ></img>}
                />
            </Link>
            <br></br>
            </div>

            <div style={{backgroundColor: 'white', display: 'flex'}}>
            <nav>
                <ul><li style={{color: 'white'}}>nothing to see here</li></ul>
                <ul><li style={{color: 'white'}}>nothing to see here either</li></ul>
                <ul><li style={{color: 'white'}}>still nothing to see</li></ul>
            <ul>
                <li>
                    <Link to='/'>
                        <Popup content='back to main page' trigger={<Icon fitted
                            name='home' 
                            className='user outline' 
                            />}
                        />
                    </Link>
                </li>

                <li>
                    <Link to='/messages' >
                        <Popup content='see your messages' trigger={<Icon fitted
                            name='messages' 
                            className='envelope outline icon' 
                            />}
                        />
                    </Link>
                </li>

                <li>
                    <Link to='/users' >
                        <Popup content='meet other users' trigger={<Icon fitted
                            name='search' 
                            className='users' 
                            />}
                        />
                    </Link>
                </li>

                <li>
                    <Link to='/about' >
                        <Popup content='find out more' trigger={<Icon fitted
                            name='question circle outline' 
                            className='iquestion circle outline' 
                            />}
                        />
                    </Link>
                </li>

                <li><Link to='/' onClick={handleLogOut}>Log Out</Link></li>
                <li style={{color: 'white'}}>nothing to see here</li>
                <li style={{color: 'white'}}>nothing to see here</li>
                <li style={{color: 'white'}}>nothing to see here</li>

            </ul>   
            </nav>
            </div>  
        </div>
            </div>
            
        </StyleRoot>
        
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearUser: (user) => dispatch({type: "LOGGED_OUT", payload: user}),
        clearOption: option => dispatch({type: 'CLEAR_OPTION', payload: option})
    }
}

export default Radium(withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedInNavBar)))

