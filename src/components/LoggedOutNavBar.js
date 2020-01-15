import React from 'react'
// import { connect } from 'react-redux'
import {Image, Menu, Container} from 'semantic-ui-react'
import logo_white from '../photos/logo_white.png'

const LoggedOutNavBar = () => {

    let activeItem
    
    return (
        <Container fluid> 
            <Menu
            fluid 
            inverted
            pointing 
            secondary 
            size ='huge' 
            widths={7}>
                <Menu.Item link size='medium'>
                    <Image 
                    inverted
                    name='white-logo'
                    src={logo_white} 
                    size ='huge' 
                    className='white-logo'
                    onClick={() => window.location.href = '/'}/>
                </Menu.Item>
                <Menu.Item
                name='How this works'
                size='medium'
                active={activeItem === 'about'}
                onClick={() => window.location.href = '/about'}
                />
                <Menu.Item link
                name='Safety'
                size='medium'
                active={activeItem === 'safety'}
                onClick={() => window.location.href = '/safety'}
                />
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                {/* <Menu.Item header
                name='JOIN'
                size='medium'
                active={activeItem === 'join'}
                onClick={() => window.location.href = '/join'} />
                <Menu.Item header
                name='LOG IN'
                size='medium'
                active={activeItem === 'login'}
                onClick={() => window.location.href = '/login'} />      */}
            </Menu>
        </Container>
    )
}  

export default LoggedOutNavBar

// import React, { Component } from 'react'
// // import { connect } from 'react-redux'
// import {Image, Menu, Container} from 'semantic-ui-react'
// import logo_white_cropped from '../photos/logo_white_cropped.png'
// // import logo_white from '../photos/logo_white.png'
// // import {setOption} from '../redux/authActions'
// // import LoginForm from '../components/LoginForm'
// // import SignupForm from '../components/SignupForm'
// // import {connect} from 'react-redux'
// import LoginModal from '../containers/LoginModal'
// // import LoginForm from './LoginForm'

// class LoggedOutNavBar extends Component {

//     constructor() {
//         super() 
//         this.state = {option: ''}
//     }

//     signUp = (e) => {
//         // debugger
//         this.setState({option: 'signup'})
//     }

//     logIn = (e) => {
//         // debugger
//         this.setState({option: 'login'})
//     }

//     render() {
//         // debugger
//         let activeItem
        
//     return (
//         <Container fluid>
//             <Menu fluid
//             inverted
//             pointing 
//             secondary 
//             size ='huge' 
//             widths={7}>
//                 <Menu.Item link size='medium'>
//                     <Image 
//                     inverted
//                     name='white-logo'
//                     // src={logo_white} 
//                     src={logo_white_cropped}
//                     size ='huge' 
//                     className='white-logo'
//                     onClick={() => window.location.href = '/'}/>
//                 </Menu.Item>
//                 <Menu.Item></Menu.Item>
//                 <Menu.Item></Menu.Item>
//                 <Menu.Item 
//                 header 
//                 link
//                 name='How this works'
//                 size='medium'
//                 link
//                 active={activeItem === 'about'}
//                 onClick={() => window.location.href = '/about'}
//                 />
//                 <Menu.Item 
//                 header
//                 name='Safety'
//                 size='medium'
//                 link
//                 active={activeItem === 'safety'}
//                 onClick={() => window.location.href = '/safety'}
//                 />
//                 <Menu.Item></Menu.Item>
//                 <Menu.Item></Menu.Item>
//                 {/* <Menu.Item
//                 link
//                 name='LOG IN'
//                 size='medium'
//                 value='login'
//                 onClick={() => this.logIn()}
//                 // onMouseOver={e => console.log(e.target.innerText)} 
//                 /> 
//                 <Menu.Item
//                 name='SIGN UP'
//                 link
//                 size='medium'
//                 value='signup'
//                 onClick={(e) => this.signUp(e)}
//                 // onMouseOver={e => console.log(e.target.innerText)} 
//                 />          */}
//             </Menu>
//             <LoginModal option={this.state.option} />
//         </Container>
        
//     )
// }
// }

// // const mapDispatchToProps = dispatch => ({
// //     setOption: option => dispatch({type: 'SET_OPTION', option})
// // })

// // export default connect(null, {setOption})(LoggedOutNavBar)
// export default LoggedOutNavBar


