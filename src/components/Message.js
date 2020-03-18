import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Moment from 'react-moment'
import { Comment, Divider } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'

class Message extends Component {
    
    render() {

        // debugger
        const { message, user, currentUser } = this.props
        let timestamp = message.created_at
        let sender = message.user_id === user.id ? user : currentUser
        let url = sender.username === currentUser.username ? '/profile' : `/users/${sender.username}`
        
        if (message.user_id !== currentUser.id && message.read === false) {
            fetch(`/api/v1/messages/${message.id}`, {
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

        const senderPicUrl = `http://localhost:4000/${sender.profile_pic_url}`

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
                        <div>
                        <Moment format='dddd, MMMM Do YYYY, h:mm:ss a'>{timestamp}</Moment>
                        </div>
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