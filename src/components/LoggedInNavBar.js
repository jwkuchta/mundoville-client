import React from 'react'
import { connect } from 'react-redux'
import { Icon, Popup, Button } from 'semantic-ui-react'
import logo from '../photos/logo_teal_cropped.png'
import '../css/App.scss'
import '../css/NavBar.scss'
import { useAuth0 } from "../react-auth0-spa";
import { Link , Redirect} from 'react-router-dom'

const LoggedInNavBar = () => {

  const { logout, isAuthenticated } = useAuth0()

  const clearCookies = () => {
      let cookies = document.cookie.split(";")
      debugger
    cookies.forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  }

//   const handleLogout = () => {
//       clearCookies()
//       debugger
//     window.localStorage.clear()
//     debugger
//     window.sessionStorage.clear()
//     debugger
//     // debugger
//     logout()
//   }

  return (
    <div style={{display: 'inline-block', width: '100vw', backgroundColor: 'white'}}>
        <div style={{display: 'inline-block', backgroundColor: 'white', float:'left', paddingLeft: '10px'}}>
        <a href="/" onClick={() => window.location.href = '/'}>
        <Popup content='back to main page' trigger={<img 
            src={logo} 
            alt="logo"
            className='logo'
            ></img>}
            />
        </a><br></br>
        </div>

        <div style={{backgroundColor: 'white', display: 'flex'}}>
        <nav>
            <ul><li style={{color: 'white'}}>nothing to see here</li></ul>
            <ul><li style={{color: 'white'}}>nothing to see here either</li></ul>
            <ul><li style={{color: 'white'}}>still nothing to see</li></ul>
        <ul>
            <li>
                <a href="/" onClick={() => window.location.href = '/'}>
                    <Popup content='back to main page' trigger={<Icon fitted
                        // inverted
                        name='home' 
                        className='user outline' 
                        link
                        onClick={() => window.location.href = "/"}
                        />}
                    />
                </a>
            </li>

            <li>
                <a href="/messages" 
                onClick={() => {
                    // debugger
                    isAuthenticated && (window.location.href = "/messages")}
                } 
                >
                    <Popup content='see your messages' trigger={<Icon fitted
                        // inverted
                        // name='messages' 
                        className='envelope outline icon' 
                        link
                        // onClick={() => window.location.href = "/messages"}
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
                        className='iquestion circle outline' 
                        onClick={() => window.location.href = '/about'}
                        />}
                    />
                </a>
            </li>

            {/* <li><a href='/' onClick={() => logout()}>Log Out</a></li> */}
            {/* <li><a href='/logout' onClick={() => handleLogout()}>Log Out</a></li> */}
            {/* <li><a href='/logout' onClick={handleLogout}>Log Out</a></li> */}
            {/* <li><button onClick={() => logout()}>Log out</button></li> */}
            <Button onClick={() => logout()}>LOG OUT</Button>
            <li style={{color: 'white'}}>nothing to see here</li>
            <li style={{color: 'white'}}>nothing to see here</li>
            <li style={{color: 'white'}}>nothing to see here</li>

        </ul>   
        </nav>
        </div>
    </div>
)
};

const mapStateToProps = state => {
  return {
      currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(LoggedInNavBar)