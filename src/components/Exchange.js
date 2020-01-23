import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Modal, Button, Comment, Icon, Image } from 'semantic-ui-react'
import Message from './Message'
import NewMessageForm from './NewMessageForm'
import placeholder from '../photos/profilePicPlaceholder.png'

class Exchange extends Component {

    render() {
        if (this.props.users.length > 0) {

            const userId = this.props.exchange.first_user_id === this.props.currentUser.id 
                ? this.props.exchange.second_user_id : this.props.exchange.first_user_id
        
            const otherUser = this.props.users.filter(user => user.id === userId)[0]

            const unread = this.props.exchange.messages.filter(
                message => message.user_id === otherUser.id && message.read === false)
        
            let message = otherUser.username

            if (unread.length === 1) {
                message = otherUser.username + ' --  ' + unread.length + ' unread message'
            } else if (unread.length > 1) {
                message = otherUser.username + ' --  ' + unread.length + ' unread messages'
            }

            const otherUserPic = `http://localhost:3000/${otherUser.profile_pic_url}`

            return (
                <Segment secondary padded='very'>
                    <Header as='h2' textAlign='left'>
                        <Image 
                        size='large' 
                        floated='left' 
                        src={otherUser.profile_pic_url ? otherUserPic : placeholder} /> 
                        <a href={`/users/${otherUser.username}`}>{message}</a>
                        <Modal 
                            closeIcon
                            onClose={() => window.location.reload()}
                            size='small' 
                            trigger={<Button floated='right'>Open Message Exchange</Button>}
                        >
                            <Modal.Content>
                                <Header as='h3' dividing>
                                    Message Exchange with {otherUser.username}
                                </Header>
                                <Segment basic>
                                    <Comment.Group>
                                        <div id='commentGroup'>
                                            {this.props.exchange.messages.map(message => 
                                                <Message 
                                                    key={message.id} 
                                                    message={message} 
                                                    user={otherUser}
                                                    currentUser={this.props.currentUser}
                                                />
                                            )}
                                        </div>
                                        <NewMessageForm 
                                            exchange={this.props.exchange}
                                            user={otherUser}
                                            currentUser={this.props.currentUser}
                                        /><br/>
                                    </Comment.Group>
                                </Segment>
                            </Modal.Content>
                        </Modal>
                        {unread.length > 0
                            ? <Icon color='grey' name='mail outline' size ='big'/> : null}
                    </Header>
                </Segment>
            )
        } else {
            return null
        }
    }  
}    

const mapStateToProps = state => {
    return {
        users: state.users,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Exchange)
