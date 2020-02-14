import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

const AddFriendButton = props => {

    let currentPage = window.location.pathname
    let userId = props.currentUser.id 
    let friendId = props.user.id
    
    // creates a new friendship in the backend
    const addFriendFetch = (userId, friendId) => {
        // debugger
        fetch('https://mundoville-api.herokuapp.com/api/v1/friendships', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user_id: userId, friend_id: friendId})
            })
        .then(resp => resp.json())
        .then(data => console.log(data))
        window.location.href = currentPage
    }

    return (
        <Button 
            color='green' 
            inverted 
            onClick={e => addFriendFetch(userId, friendId)} 
            content='Add Friend' 
        />
    )
}

const mapDTP = dispatch => {
    return {
        addFriend: (userId, friendId) => dispatch({type: 'ADD_FRIENDSHIP', userId: userId, friendId: friendId})
    }
}

export default connect(null, mapDTP)(AddFriendButton)