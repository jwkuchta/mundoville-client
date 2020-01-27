import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

const RemoveFriendButton = (props) => {

    let userId = props.currentUser.id 
    let friendId = props.user.id 

    const removeFriendFetch = (userId, friendId) => {
        fetch('http://localhost:3000/api/v1/unfriend', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(
                {
                    user_id: userId, 
                    friend_id: friendId
                })
            })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    return (
        <Button 
            color='red' 
            inverted 
            onClick={e => removeFriendFetch(userId, friendId)} 
            content='Unfriend' 
        />
    )
}

const mapSTP = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDTP = dispatch => {
    return {
        removeFriend: (userId, friendId) => dispatch({type: 'REMOVE_FRIENDSHIP', userId: userId, friendId: friendId})
    }
}

export default connect(mapSTP, mapDTP)(RemoveFriendButton)