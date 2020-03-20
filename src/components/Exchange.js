import React from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Modal, Button, Comment, Icon, Image } from 'semantic-ui-react'
import Message from './Message'
import NewMessageForm from './NewMessageForm'
import placeholder from '../photos/profilePicPlaceholder.png'

const Exchange = (props) => {

    // debugger

    const { exchange, users, currentUser } = props

    // debugger
        
        if (users.length > 0) {
            const userId = exchange.first_user_id === currentUser.user.id ? exchange.second_user_id : exchange.first_user_id
            // debugger
            const otherUser = users.filter(user => user.id === userId)[0]
            // debugger
            const unread = exchange.messages.filter(m => m.user_id === otherUser.id && m.read === false)
            let from = otherUser.username ? otherUser.username : otherUser.email

            let infoMessage = otherUser.username
            // debugger
            if (unread.length === 1) {
                infoMessage =  unread.length + ' unread message from ' + from
            } else if (unread.length > 1) {
                infoMessage = unread.length + ' unread messages from ' + from
            }

            const otherUserPic = `http://localhost:4000/${otherUser.profile_pic_url}`

            return (
                <Segment secondary padded='very'>
                    <Header as='h2' textAlign='left'>
                        <Image 
                        size='large' 
                        floated='left' 
                        src={otherUser.profile_pic_url ? otherUserPic : placeholder} /> 
                        <a href={`/users/${otherUser.username}`}>{infoMessage}</a>
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
                                        <div id='messages'>
                                            {exchange.messages.map(message => 
                                                <Message 
                                                    key={message.id} 
                                                    message={message} 
                                                    user={otherUser}
                                                    currentUser={currentUser}
                                                />
                                            )}
                                        </div>
                                        <NewMessageForm 
                                            exchange={exchange}
                                            user={otherUser}
                                            currentUser={currentUser}
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

const mapStateToProps = state => {
    return {
        users: state.users,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Exchange)