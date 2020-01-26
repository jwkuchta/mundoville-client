import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Comment, Divider } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'

class Message extends Component {
    
    render() {

        const { message, user, currentUser } = this.props

        let timestamp = message.created_at
        
        let date = timestamp.split('T')[0]
        let splitDate = date.split('-')
        let formattedDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]

        let time = timestamp.split('T')[1].split('.')[0]
        let splitTime = time.split(':')
        let hour
        let amPm

        if (parseInt(splitTime[0]) > 12 ) {
            hour = parseInt(splitTime[0]) - 12 
            amPm = ' PM'
        } else if (parseInt(splitTime[0]) === 0) {
            hour = 12
            amPm = ' AM'
        } else {
            hour = parseInt(splitTime[0])
            amPm = ' AM'
        }
        let formattedTime = hour + ':' + splitTime[1] + amPm

        let sender = message.user_id === user.id ? user : currentUser

        let url = sender.username === currentUser.username ? '/profile' : `/users/${sender.username}`
        
        if (message.user_id !== currentUser.id && message.read === false) {
            fetch(`http://localhost:3000/api/v1/messages/${message.id}`, {
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

        const senderPicUrl = `http://localhost:3000/${sender.profile_pic_url}`

        return (
            <Comment>
                <Comment.Avatar src={sender.profile_pic_url ? senderPicUrl : placeholder} />
                <Comment.Content>
                    <Comment.Author 
                        as='a' 
                        onClick={() => window.location.href = url}>
                        {sender.username === currentUser.username ? sender.username + ' (you)' : sender.username}
                    </Comment.Author>
                    <Comment.Metadata style={{color: 'grey'}}>
                        <div>{formattedDate} at {formattedTime}</div>
                    </Comment.Metadata>
                    <Comment.Text style={{color: 'black'}}>
                        {message.body}
                    </Comment.Text>
                    {message.user_id === currentUser.id && message.read === false
                        ? <Comment.Metadata style={{color: 'red'}} content='UNREAD'/>
                            : null}
                </Comment.Content>
                <Divider />
            </Comment>
        )
    }
}

export default Message