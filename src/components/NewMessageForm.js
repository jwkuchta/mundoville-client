import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class NewMessageForm extends Component {
    
    constructor(props) {  
        super(props)
        this.state = {body: ''}
    }

    handleChange = e => {
        this.setState({body: e.target.value})
    }

    handleSubmit = (e, body) => {
        // debugger
        e.preventDefault()

        let otherUserId = this.props.exchange.second_user_id !== this.props.currentUser.id
            ? this.props.exchange.second_user_id : this.props.exchange.first_user_id

        fetch('http://localhost:4000/api/v1/exchanges',{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                first_user_id: this.props.currentUser.id,
                second_user_id: otherUserId,
                body: body
            })
        })
        .then(r => r.json())
        .then(data => {
            // alert('your message was sent')
            window.location.href='/messages'
            // this.props.setPageMessages()
        })
        this.setState({
            body: ''
        })
    }

    render() {

        // debugger
        return (
            <Form onSubmit={(e) => this.handleSubmit(e, this.state.body)}>
                <Form.TextArea 
                    value={this.state.body}
                    onChange={(e) => this.handleChange(e)} 
                />
                <Button 
                    type='submit' 
                    floated='right' 
                    content='Reply' 
                    labelPosition='right' 
                    icon='pencil' 
                />
            </Form>
        )
    }
}

export default NewMessageForm