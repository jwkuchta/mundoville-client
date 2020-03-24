import React from 'react'
import { connect } from 'react-redux'
import { Icon, Popup } from 'semantic-ui-react'
import logo from '../photos/logo_teal_cropped.png'
import '../css/App.scss'

const LoggedInNavBar = () => {
    
    const handleLogOut = () => {
        localStorage.clear()
        // window.location.href = "/login"
    }

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
                    <a href="/messages" onClick={() => window.location.href = "/messages"}>
                        <Popup content='see your messages' trigger={<Icon fitted
                            // inverted
                            name='messages' 
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

                <li><a href='/login' onClick={() => handleLogOut()}>Log Out</a></li>
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

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(LoggedInNavBar)

// import React from 'react'
// import { connect } from 'react-redux'
// import { Icon, Popup, Container, Grid, GridColumn } from 'semantic-ui-react'
// import logo from '../photos/logo_teal_cropped.png'
// import '../css/App.scss'

// const LoggedInNavBar = () => {
    
//     const handleLogOut = () => {
//         localStorage.clear()
//         window.location.href = "/login"
//     }

//     return (
//         <Container fluid
//         style={{display: 'inline-block', width: '78vw', backgroundColor: 'white', paddingLeft: '10px'}}>
//             <Grid>
//             <Grid.Column width={6} style={{display: 'inline-block', backgroundColor: 'white', float:'left', padding: '1px'}}>
//             <a href="/" onClick={() => window.location.href = '/'}>
//             <Popup content='back to main page' trigger={<img 
//                 src={logo} 
//                 alt="logo"
//                 className='logo'
//                 ></img>}
//                 />
//             </a><br></br>
//             </Grid.Column>

//             <Grid.Column width={7} style={{display: 'inline-block', backgroundColor: 'white', overflow: 'hidden'}}>
//                 {/* <Grid.Row>&nbsp;</Grid.Row> */}
//                 <Grid.Row>&nbsp;</Grid.Row>
//                 <Grid.Row>&nbsp;</Grid.Row>
//                 <Grid.Row>
//                 <nav style={{float: 'right'}}>
//             <ul>
//                 <li>
//                     <a href="/" onClick={() => window.location.href = '/'}>
//                         <Popup content='back to main page' trigger={<Icon fitted
//                             // inverted
//                             name='home' 
//                             size='small' 
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
//                             size='small' 
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
//                             size='small' 
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
//                             size='small' 
//                             className='iquestion circle outline' 
//                             onClick={() => window.location.href = '/about'}
//                             />}
//                         />
//                     </a>
//                 </li>

               

//             </ul>   
//             </nav>
//                 </Grid.Row>
            
//             </Grid.Column>

//             <Grid.Column width={3}>
//             {/* <Grid.Row>&nbsp;</Grid.Row> */}
//                 <Grid.Row>&nbsp;</Grid.Row>
//                 <Grid.Row>&nbsp;</Grid.Row>
//             <li><a onClick={() => handleLogOut()}>Log Out</a></li>
//             </Grid.Column>
            
//             </Grid>
            
            
            
//             {/* <br></br> */}
//         </Container>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         currentUser: state.currentUser
//     }
// }

// export default connect(mapStateToProps)(LoggedInNavBar)