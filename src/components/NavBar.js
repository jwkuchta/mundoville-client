import React from 'react'
// import '../css/App.scss'
import '../css/NavBar.scss'
import LoggedOutNavBar from './LoggedOutNavBar'
import LoggedInNavBar from './LoggedInNavBar'




const NavBar = () => {

    

    return(
        <div style={{ backgroundColor: '#608586'}}>
        {!localStorage.jwt && <LoggedOutNavBar />}
        {localStorage.jwt && <LoggedInNavBar />}
        </div>
    )
}  

export default NavBar
// export default NavBar



