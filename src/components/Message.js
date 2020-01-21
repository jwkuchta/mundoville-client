import React, {Component} from 'react'
// import {connect} from 'react-redux'
import {Comment, Divider} from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'

class Message extends Component {
    
    render() {
    let created = this.props.message.created_at
    let date = created.split('T')[0]
    let splitDate = date.split('-')
    let formattedDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]

    let time = created.split('T')[1].split('.')[0]
    let splitTime = time.split(':')
    let hour
    let meridiem

    if (parseInt(splitTime[0]) > 12 ) {
        hour = parseInt(splitTime[0]) - 12 
        meridiem = ' PM'
    } else if (parseInt(splitTime[0]) === 0) {
        hour = 12
        meridiem = ' AM'
    } else {
        hour = parseInt(splitTime[0])
        meridiem = ' AM'
    }
    let formattedTime = hour + ':' + splitTime[1] + meridiem

    let sender = this.props.message.user_id === this.props.user.id ? this.props.user : this.props.currentUser

    let url = sender.username === this.props.currentUser.username ? '/profile' : `/users/${sender.username}`

        
    if (this.props.message.user_id !== this.props.currentUser.id && this.props.message.read === false) {
        fetch(`http://localhost:3000/api/v1/messages/${this.props.message.id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({read: true})
        })
        .then(resp => resp.json())
        .then(console.log)
    }
    return (
        <Comment>
            <Comment.Avatar src={sender.profile_pic ? sender.profile_pic : placeholder} />
            <Comment.Content>
                <Comment.Author 
                    as='a' 
                    onClick={() => window.location.href = url}>
                    {sender.username === this.props.currentUser.username ? sender.username + ' (you)' : sender.username}
                </Comment.Author>
                <Comment.Metadata style={{color: 'grey'}}>
                    <div>{formattedDate} at {formattedTime}</div>
                </Comment.Metadata>
                <Comment.Text style={{color: 'black'}}>
                    {this.props.message.body}
                </Comment.Text>
                {this.props.message.user_id === this.props.currentUser.id && this.props.message.read === false
                    ? <Comment.Metadata style={{color: 'red'}} content='message unread'/>
                        : null}
            </Comment.Content>
            <Divider />
        </Comment>
    )}
}

export default Message