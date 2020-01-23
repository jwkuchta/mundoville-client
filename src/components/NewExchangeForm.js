import React, { Component } from 'react'
import { Segment, Form, Button, Header, Modal } from 'semantic-ui-react'
import {connect} from 'react-redux'
// import {submitNewExchange} from '../redux/actions'

class NewExchangeForm extends Component {
    
    constructor() {
        super()

        this.state = {
            body: '',
            receiver_id: null,
            users: [],
            open: false,
        }
    }

    resetState = () => {
        this.setState({
            body: '',
            receiver_id: null,
            users: []
        })
    }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    componentDidMount() {
        // debugger
        let filteredUsers = this.props.users.filter(user => user.id !== this.props.currentUser.id)
        let sortedUsers = filteredUsers.sort((a, b) => a.username - b.username)
        let users = []
        
        sortedUsers.map(user => {
            let userInstance = {id: user.id, text: user.username, value: user.id}
            users.push(userInstance)
            return users
        })
        this.setState({users: users})
    }

    handleChange = e => {
        if (e.target.id === 'body') {
            this.setState({
                body: e.target.value
            })
        } else {
            this.setState({
                receiver_id: e.target.id
            })
        }
    }

    handleSubmit = (e, entries) => {
        e.preventDefault()
        this.postNewExchange()
        this.renderModal()
        this.resetState()  
        alert('Message sent successfully')
        // window.location.href='/messages'
    }

    renderModal = () => {
        this.open()
        return (
            <div>
                <Modal size='small' open={this.state} onClose={window.location.href='/messages'}>
                <Modal.Header>Delete Your Account</Modal.Header>
                <Modal.Content>
                <p>Are you sure you want to delete your account</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative>No</Button>
                    <Button
                    positive
                    icon='checkmark'
                    labelPosition='right'
                    content='Yes'
                    />
                </Modal.Actions>
            </Modal>
            </div>
            
        )
    }

    postNewExchange = () => {
        let currentUser = this.props.currentUser

        fetch('http://localhost:3000/api/v1/exchanges', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                first_user_id: currentUser.id,
                second_user_id: Number.parseInt(this.state.receiver_id),
                body: this.state.body
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    display = user => {
        return (
            <div>
                <i className={user.username} ></i>
                {user.username}
            </div>
        )
    }

    render() {

        // debugger
        return (
            <Segment padded='very' style={{backgroundColor: '#528FBB'}}>
                <Form onSubmit={(e) => this.handleSubmit(e, this.state)}>
                    <Form.Group>
                        <Form.Select required
                            inline
                            label='To: '
                            floating
                            options={this.state.users}
                            placeholder='Select User'
                            resultRenderer={this.display}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.TextArea width={15}
                            // style={{backgroundColor: '#00FFFF'}}
                            // width={16}
                            inline
                            id='body'
                            placeholder='Type your message here'
                            onChange={(e) => this.handleChange(e)}
                        />
                    </Form.Group>
                    <Button type='submit' content='Send' />
                    <Header size='tiny' color='red'>
                        {this.state.exchange
                            ? this.state.exchange
                                : null}
                    </Header>
                </Form>
            </Segment>
        )
    }
}

const mapSTP = state => {
    return {
        users: state.users,
        currentUser: state.currentUser
    }
}

// const mapDTP = dispatch => {
//     return {
//         submitNewExchange: (sender_id, receiver_id, body) => dispatch(submitNewExchange(sender_id, receiver_id, body))
//     }
// }

// export default connect(mapSTP, mapDTP)(NewExchangeForm)
export default connect(mapSTP)(NewExchangeForm)