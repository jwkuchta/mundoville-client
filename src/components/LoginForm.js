// import React, { Component } from 'react'
// import { Button, Form, Segment, Modal, Image, Header } from 'semantic-ui-react'

// class LoginForm extends Component {
//     constructor() {
//         super()
//         this.state = {
//             username: '',
//             password: '',
//             user: false
//         }
//     }

//     changeHandler = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     }

//     handleLogin = (e, values) => {
//         e.preventDefault()
        
//         fetch('http://localhost:3000/api/v1/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify({user: { 
//                 username: values.username, 
//                 password: values.password 
//             }})
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.user){
//                 localStorage.setItem('jwt', data.jwt)
//                 this.setState({
//                     ...this.state,
//                     user: true
//                 })
//             } else {
//                 alert('Invalid Username or Password')
//             }
//         })
//     }

//     render() {
//         if (this.state.user) {
//             return window.location.href = "/"
//         } else {
//             return (
//                 <Segment padded='very' className='main-page-forms'>
//                     <Form onSubmit={(e) => this.handleLogin(e, this.state)}>
//                         <Form.Group>
//                             <Form.Input 
//                                 id='username'
//                                 label='Username'
//                                 type='text' 
//                                 placeholder='Username'
//                                 value={this.state.username}
//                                 onChange={(e) => this.changeHandler(e)}
//                             />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Input 
//                                 id='password'
//                                 label='Password'
//                                 type='password' 
//                                 placeholder='Password'
//                                 value={this.state.password}
//                                 onChange={(e) => this.changeHandler(e)}
//                             />
//                         </Form.Group><br/>
//                         <Form.Group >
//                             <Button fluid type='submit'>Sign In</Button>
//                         </Form.Group>
//                     </Form>
                    
//                 </Segment>
                
//             )
//         }
//     }
// }


// export default LoginForm

import React, { Component } from 'react'
import { Button, Form, Segment, Modal, Image, Header } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {logIn} from '../redux/actions'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            user: false
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLogin = (e) => {
        e.preventDefault()
        // let user = {user: {
        //     username: values.username,
        //     password: values.password
        // }}
        let user = this.state
        this.props.logIn(user)
        // fetch('http://localhost:3000/api/v1/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({user: { 
        //         username: values.username, 
        //         password: values.password 
        //     }})
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.user){
        //         localStorage.setItem('jwt', data.jwt)
        //         this.setState({
        //             ...this.state,
        //             user: true
        //         })
        //     } else {
        //         alert('Invalid Username or Password')
        //     }
        // })
    }

    render() {
        if (this.state.user) {
            return window.location.href = "/"
        } else {
            return (
                <Segment padded='very' className='main-page-forms'>
                    <Form onSubmit={(e) => this.handleLogin(e)}>
                        <Form.Group>
                            <Form.Input 
                                id='username'
                                label='Username'
                                type='text' 
                                placeholder='Username'
                                value={this.state.username}
                                onChange={(e) => this.changeHandler(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input 
                                id='password'
                                label='Password'
                                type='password' 
                                placeholder='Password'
                                value={this.state.password}
                                onChange={(e) => this.changeHandler(e)}
                            />
                        </Form.Group><br/>
                        <Form.Group >
                            <Button fluid type='submit'>Sign In</Button>
                        </Form.Group>
                    </Form>
                    
                </Segment>
            )
        }
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         logIn: user => dispatch(logIn(user))
//     }
// }

// export default connect(null, mapDispatchToProps)(LoginForm)
export default connect(null, {logIn})(LoginForm)

