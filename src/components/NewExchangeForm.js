import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { placeholder } from '../photos/round_placeholder.png'
// import {submitNewExchange} from '../redux/actions'

class NewExchangeForm extends Component {
    
    constructor() {
        super()

        this.state = {
            body: '',
            receiver_id: null,
            users: [],
        }
    }

    resetState = () => {
        this.setState({
            body: '',
            receiver_id: null,
            users: []
        })
    }

    componentDidMount() {
        // debugger
        let filteredUsers = this.props.users.filter(user => user.id !== this.props.currentUser.id)
        let sortedUsers = filteredUsers.sort((a, b) => a.username - b.username)
        let users = []
        
        sortedUsers.map(user => {
            // let userInstance = {id: user.id, text: user.username, value: user.id}
            let userInstance = {
                key: user.id, 
                id: user.id, 
                // text: user.username, 
                // text: `${user.first_name} ${user.last_name}`,
                text: `${user.email}`,
                value: user.id, 
                image: {avatar: true, src: user.profile_pic_url ? `http://localhost:4000/${user.profile_pic_url}` : placeholder}
            }
            users.push(userInstance)
            return users
        })
        this.setState({users: users})
    }

    handleChange = e => {
        // debugger
        if (e.target.id === 'body') {
            this.setState({
                body: e.target.value
            })
        } else {
            // user.id was not always showing so I changed to innerText
            let receiver = this.state.users.find(u => u.text === e.target.innerText)
            if(receiver !== undefined) {
                this.setState({
                    receiver_id: receiver.id
                })
            } else {
                return 
            }  
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postNewExchange()
        this.resetState()  
        // alert('Message sent')
        window.location.href='/messages'
        console.log(this.props)
        // goes back to '/messeges' without reload
        this.props.setPageMessages()
    }

    postNewExchange = () => {
        // debugger
        let currentUser = this.props.currentUser.user

        fetch('http://localhost:4000/api/v1/exchanges', {
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
        .then(data => {
            // debugger
            console.log(data)
            // window.location.href = '/messages'
            //window.location.reload()
            this.props.history.push('/messages')
        })
    }

    render() {

        // debugger
        return (
            <Segment padded='very' style={{backgroundColor: '#528FBB'}}>
                <Form onSubmit={(e) => this.handleSubmit(e, this.state)}>
                    <Form.Group>
                        <Form.Select required
                            search
                            inline
                            label='To: '
                            floating
                            options={this.state.users}
                            placeholder='Select User'
                            onChange={(e) => this.handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.TextArea width={15}
                            inline
                            id='body'
                            placeholder='Type your message here'
                            onChange={(e) => this.handleChange(e)}
                        />
                    </Form.Group>
                    <Button type='submit' content='Send' />
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

export default withRouter(connect(mapSTP)(NewExchangeForm))
