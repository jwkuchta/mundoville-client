import React from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Modal, Button, Comment, Icon, Image } from 'semantic-ui-react'
import Message from './Message'
import NewMessageForm from './NewMessageForm'
import placeholder from '../photos/profilePicPlaceholder.png'

const Exchange = () => {

    const { exchange, users, currentUser } = this.props
        
        if (users.length > 0) {
            const userId = exchange.first_user_id === currentUser.id ? exchange.second_user_id : exchange.first_user_id
            const otherUser = users.filter(user => user.id === userId)[0]
            const unread = exchange.messages.filter(m => m.user_id === otherUser.id && m.read === false)
        
            let infoMessage = otherUser.username
            if (unread.length === 1) {
                infoMessage =  unread.length + ' unread message from ' + otherUser.username
            } else if (unread.length > 1) {
                infoMessage = unread.length + ' unread messages from ' + otherUser.username
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