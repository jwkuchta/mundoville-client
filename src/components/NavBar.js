import React from 'react'
import '../css/NavBar.scss'
import LoggedOutNavBar from './LoggedOutNavBar'
import LoggedInNavBar from './LoggedInNavBar'

const NavBar = () => {

    return(
        <div style={{ backgroundColor: 'white'}}>
        {!localStorage.jwt && <LoggedOutNavBar />}
        {localStorage.jwt && <LoggedInNavBar />}
        </div>
    )
}  

export default NavBar



