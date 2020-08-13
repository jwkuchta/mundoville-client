import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Header, Icon } from 'semantic-ui-react'
import { apiBaseUrl } from '../../utils/constants'

const RemoveFriendButton = ({ user, currentUser }) => {

    let currentPage = window.location.pathname

    const removeFriendFetch = () => {
        fetch(`${apiBaseUrl}/api/v1/unfriend`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(
                {
                    user_id: currentUser.id, 
                    friend_id: user.id
                })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        window.location.href = currentPage
    }

    return (
        <Modal 
            trigger={<Button 
            color='red' 
            inverted    
            content='Unfriend' 
            />} 
        >
            <Header icon='archive' content='Are you sure?' />
            <Modal.Content>
                <p style={{color: 'teal'}}>
                    This action will permanently delete your friendship. 
                    The other user will not be notified. 
                </p>
            </Modal.Content>
                <Modal.Actions>
                    <Button color='red' inverted onClick={() => window.location.href='/profile/edit'}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted onClick={removeFriendFetch}>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
        </Modal>
    )
}

const mapSstateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFriend: (userId, friendId) => dispatch({type: 'REMOVE_FRIENDSHIP', userId: userId, friendId: friendId})
    }
}

export default connect(mapSstateToProps, mapDispatchToProps)(RemoveFriendButton)