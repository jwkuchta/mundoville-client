// import React from 'react'
// import { connect } from 'react-redux'
// import { Icon, Popup } from 'semantic-ui-react'
// import logo from '../photos/logo_teal_cropped.png'
// import '../css/App.scss'
// import { withRouter } from 'react-router-dom'

// const LoggedInNavBar = () => {
    
//     const handleLogOut = () => {
//         localStorage.clear()
//         // window.location.href = "/login"
//     }

//     return (
//         <div style={{display: 'inline-block', width: '100vw', backgroundColor: 'white'}}>
//             <div style={{display: 'inline-block', backgroundColor: 'white', float:'left', paddingLeft: '10px'}}>
//             <a href="/" onClick={() => window.location.href = '/'}>
//             <Popup content='back to main page' trigger={<img 
//                 src={logo} 
//                 alt="logo"
//                 className='logo'
//                 ></img>}
//                 />
//             </a><br></br>
//             </div>

//             <div style={{backgroundColor: 'white', display: 'flex'}}>
//             <nav>
//                 <ul><li style={{color: 'white'}}>nothing to see here</li></ul>
//                 <ul><li style={{color: 'white'}}>nothing to see here either</li></ul>
//                 <ul><li style={{color: 'white'}}>still nothing to see</li></ul>
//             <ul>
//                 <li>
//                     <a href="/" onClick={() => window.location.href = '/'}>
//                         <Popup content='back to main page' trigger={<Icon fitted
//                             // inverted
//                             name='home' 
//                             className='user outline' 
//                             link
//                             onClick={() => window.location.href = "/"}
//                             />}
//                         />
//                     </a>
//                 </li>

//                 <li>
//                     <a href="/messages" onClick={() => window.location.href = "/messages"}>
//                         <Popup content='see your messages' trigger={<Icon fitted
//                             // inverted
//                             name='messages' 
//                             className='envelope outline icon' 
//                             link
//                             onClick={() => window.location.href = "/messages"}
//                             />}
//                         />
//                     </a>
//                 </li>

//                 <li>
//                     <a href="/users" onClick={() => window.location.href = '/users'}>
//                         <Popup content='meet other users' trigger={<Icon fitted
//                             // inverted
//                             link
//                             name='search' 
//                             className='users' 
//                             onClick={() => window.location.href = '/users'}
//                             />}
//                         />
//                     </a>
//                 </li>

//                 <li>
//                     <a href="/about" onClick={() => window.location.href = '/about'}>
//                         <Popup content='find out more' trigger={<Icon fitted
//                             // inverted
//                             link
//                             name='question circle outline' 
//                             className='iquestion circle outline' 
//                             onClick={() => window.location.href = '/about'}
//                             />}
//                         />
//                     </a>
//                 </li>

//                 <li><a href='/login' onClick={() => handleLogOut()}>Log Out</a></li>
//                 <li style={{color: 'white'}}>nothing to see here</li>
//                 <li style={{color: 'white'}}>nothing to see here</li>
//                 <li style={{color: 'white'}}>nothing to see here</li>

//             </ul>   
//             </nav>
//             </div>
            
            
            
//             {/* <br></br> */}
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         currentUser: state.currentUser
//     }
// }

// export default withRouter(connect(mapStateToProps)(LoggedInNavBar))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Popup } from 'semantic-ui-react'
import logo from '../photos/logo_teal_cropped.png'
import '../css/App.scss'
import { withRouter, Link, Redirect } from 'react-router-dom'

class LoggedInNavBar extends Component {

    handleLogOut = () => {
        localStorage.clear()
        this.props.clearUser()
        // window.location.href="/"
        this.props.clearOption('')
        this.props.history.push('/')
        // debugger
    }

    render() {

        // debugger

        if (!localStorage.jwt){
            return <Redirect to='/home' />;
        } 

        return (
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
    
                    <li><Link to='/' onClick={this.handleLogOut}>Log Out</Link></li>
                    <li style={{color: 'white'}}>nothing to see here</li>
                    <li style={{color: 'white'}}>nothing to see here</li>
                    <li style={{color: 'white'}}>nothing to see here</li>
    
                </ul>   
                </nav>
                </div>  
                {/* <br></br> */}
            </div>
        )

    }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedInNavBar))
