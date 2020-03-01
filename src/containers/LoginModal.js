// import React, {Component} from 'react'
// import {Container, Button} from 'semantic-ui-react'
// import LoginForm from '../components/LoginForm'
// import SignupForm from '../components/SignupForm'
// // import {connect} from 'react-redux'

// class LoginModal extends Component {

//     state = {option: ''}
   
//     render() {
        
//         switch(this.state.option) {
//             case 'login':
//                 return <LoginForm />
//             case 'signup':
//                 return <SignupForm />

//             default: 
//                 return (
//                     <Container fluid className='main-page-buttons'>
//                         <Button className='ui pink button' 
//                             // basic 
//                             size='huge' 
//                             content='Log In' 
//                             onClick={() => this.setState({option: 'login'})}
//                         />
//                         <Button className='ui pink button'
//                             // basic 
//                             size='huge' 
//                             content='Sign Up' 
//                             onClick={() => this.setState({option: 'signup'})}
//                         />
//                     </Container>
//                 )
//         }
//     }
// }

// export default LoginModal

// FOR THE NAVBAR OPTION

import React, {Component} from 'react'
import {Container, Button, Menu} from 'semantic-ui-react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
// import {connect} from 'react-redux'

class LoginModal extends Component {

    state = {option: ''}
   
    render() {
        
        switch(this.state.option) {
            case 'login':
                return <LoginForm />
            case 'signup':
                return <SignupForm />

            default: 
                return (
                    <Container fluid className='main-page-buttons'>
                        <Menu
                        fluid 
                        inverted='true'
                        pointing 
                        secondary 
                        size ='huge' 
                        widths={6}
                        >
                            <Menu.Item>
                            <Button className='ui pink button' 
                                // basic 
                                size='huge' 
                                content='Log In' 
                                onClick={() => this.setState({option: 'login'})}
                            />
                            <Button className='ui pink button'
                                // basic 
                                size='huge' 
                                content='Sign Up' 
                                onClick={() => this.setState({option: 'signup'})}
                            />
                            </Menu.Item>
                
                        </Menu>
                    </Container>
                )
        }
    }
}

export default LoginModal