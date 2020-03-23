import React from "react";
// import { Link } from 'react-router-dom'
import logo from '../photos/logo_teal_cropped.png'
// import { connect } from 'react-redux'
import { useAuth0 } from "../react-auth0-spa";

const LoggedOutNavBar = () => {

  const { loginWithRedirect } = useAuth0()

  const handleLogin = () => {
    //   debugger
      loginWithRedirect()
  }

  return (
    <div style={{ backgroundColor: 'white', position: 'relative'}}>
        {/* <button onClick={() => loginWithRedirect({})}>Log in</button> */}
        {/* <Link onClick={() => loginWithRedirect({})}>Log In</Link> */}
        <div style={{display: 'inline-block', backgroundColor: 'white', float:'left', paddingLeft: '10px'}}>
            <a href="/" onClick={() => window.location.href = '/'}>
            <img src={logo} alt="logo" className='logo'></img>
            </a><br></br>
            </div>
                    
            <div style={{display: 'inline-block', backgroundColor: 'white'}}>
                <nav>
                    <ul><li style={{color: 'white'}}>nothing to see here</li></ul>
                    <ul><li style={{color: 'white'}}>nothing to see here either</li></ul>
                    <ul><li style={{color: 'white'}}>still nothing to see</li></ul>
                    <ul> 
                        <li><a href="/about">About</a></li>
                        {/* <li><a onClick={() => loginWithRedirect()}>Log in</a></li>
                        <li><a onClick={() => loginWithRedirect()}>Sign up</a></li> */}
                        {/* <li><a onClick={() => loginWithRedirect()}>Log in</a></li> */}
                        <li><a onClick={() => handleLogin()}>Log in</a></li>
                        <li><a onClick={() => loginWithRedirect()}>Sign up</a></li>
                        <li style={{color: 'white'}}>nothing to see here</li>
                        <li style={{color: 'white'}}>nothing to see here</li>    
                    </ul>
                </nav>
            </div>
    </div>
  );
}

export default LoggedOutNavBar