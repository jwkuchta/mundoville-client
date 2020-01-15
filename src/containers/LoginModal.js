import React, { Component } from 'react'
import { Container, Button} from 'semantic-ui-react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
// import {connect} from 'react-redux'

export default class LoginModal extends Component {

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
                        {/* <Button.Group> */}
                        <Button className='ui pink button' 
                            // basic 
                            size='huge' 
                            content='Log In' 
                            onClick={() => this.setState({option: 'login'})}
                        />
                        {/* <Divider class='or'/> */}
                        {/* <div className="or" color='#246a92'></div> */}
                        <Button className='ui pink button'
                            // basic 
                            size='huge' 
                            content='Sign Up' 
                            onClick={() => this.setState({option: 'signup'})}
                        />
                        {/* </Button.Group>  */}
                    </Container>
                )
        }
    }
}

// mapStateToProps = state => {
//     return ({option: state.option})
// }

// export default connect(mapStateToProps)(LoginModal)

// *************************************************************

// import React, { Component } from 'react'
// import { Container, Button, Modal, Divider} from 'semantic-ui-react'
// import LoginForm from '../components/LoginForm'
// import SignupForm from '../components/SignupForm'
// // import {connect} from 'react-redux'

// export default class LoginModal extends Component {

//     // renderModal = () => {
//     //     if(this.props.option) {
//     //         if(this.props.option === 'login') {
//     //             this.render(<LoginForm />) 
//     //         } if(this.props.option === 'signup') {
//     //             // return <SignupForm />
//     //             this.render(<SignupForm/>)
//     //         } else {
//     //             return null
//     //         }
//     //     }
//     // }
   
//     render() {
//         switch(this.props.option) {
//             case 'login': return <LoginForm/>
//             case 'signup': return <SignupForm/>
//             default: return (
//                 <Container fluid className='main-page-buttons'></Container>
//             )
//         }
//         // debugger 
//         // switch(this.props.option) {
//         //     case 'login':
//         //         return <div><LoginForm /></div>
//         //     case 'signup':
//         //         return <div><SignupForm /></div>
//         //     default: return null
//         // }
//         return(
//             <div>{() => this.renderModal()}</div>  
//         )   
//     }
// }

// // const mapStateToProps = state => {
// //     return ({option: state.option})
// // }

// // export default connect(mapStateToProps)(LoginModal)
// // export default LoginModal