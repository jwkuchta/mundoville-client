import React from 'react'
import { connect } from 'react-redux'
import { Icon, Popup } from 'semantic-ui-react'
import logo from '../photos/logo_teal_cropped.png'
import '../css/App.scss'

const LoggedInNavBar = () => {
    
    const handleLogOut = () => {
        localStorage.clear()
        window.location.href = "/login"
    }
    
    return (
        <div style={{ backgroundColor: 'white'}}>
            <a href="/" onClick={() => window.location.href = '/'}>
            <Popup content='back to main page' trigger={<img 
                src={logo} 
                alt="logo"
                className='logo-in'
                ></img>}
                />
            </a>

            <nav>
            <ul>
                <li>
                    <a href="/" onClick={() => window.location.href = '/'}>
                        <Popup content='back to main page' trigger={<Icon fitted
                            // inverted
                            name='home' 
                            size='large' 
                            className='user outline' 
                            link
                            onClick={() => window.location.href = "/"}
                            />}
                        />
                    </a>
                </li>

                <li>
                    <a href="/messages" onClick={() => window.location.href = "/messages"}>
                        <Popup content='see your messages' trigger={<Icon fitted
                            // inverted
                            name='messages' 
                            size='large' 
                            className='envelope outline icon' 
                            link
                            onClick={() => window.location.href = "/messages"}
                            />}
                        />
                    </a>
                </li>

                <li>
                    <a href="/users" onClick={() => window.location.href = '/users'}>
                        <Popup content='meet other users' trigger={<Icon fitted
                            // inverted
                            link
                            name='search' 
                            size='large' 
                            className='users' 
                            onClick={() => window.location.href = '/users'}
                            />}
                        />
                    </a>
                </li>

                <li>
                    <a href="/about" onClick={() => window.location.href = '/about'}>
                        <Popup content='find out more' trigger={<Icon fitted
                            // inverted
                            link
                            name='question circle outline' 
                            size='large' 
                            className='iquestion circle outline' 
                            onClick={() => window.location.href = '/about'}
                            />}
                        />
                    </a>
                </li>

                <li><a onClick={() => handleLogOut()}>Log Out</a></li>

            </ul>   
            </nav>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(LoggedInNavBar)