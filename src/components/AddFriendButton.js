import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

const AddFriendButton = (props) => {

    let userId = props.currentUser.id 
    let friendId = props.user.id
    
    const addFriendFetch = (userId, friendId) => {
        debugger

        fetch('http://localhost:3000/api/v1/friendships', {
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


// mapSTP = state => {
//     return {
//         currentUser: state.currentUser
//     }
// }

const mapDTP = dispatch => {
    return {
        addFriend: (userId, friendId) => dispatch({type: 'ADD_FRIENDSHIP', userId: userId, friendId: friendId})
    }
}

// export default connect(mapSTP, mapDTP)(AddFriend)
export default connect(null, mapDTP)(AddFriendButton)