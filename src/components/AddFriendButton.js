import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import Radium from 'radium'

const AddFriendButton = ({ user, currentUser, history }) => {

    let currentPage = history.location.pathname

    // const style = {
    //     backgroundColor: 'orange',
    //     cursor: 'pointer',
    //     ':hover': {
    //         backgroundColor: 'black',
    //         cursor: 'orange',
    //         color: 'orange'
    //     }
    // }

    const addFriendFetch = () => {
        fetch('https://mundoville-api.herokuapp.com/api/v1/friendships', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user_id: currentUser.id, friend_id: user.id})
            })
        .then(resp => resp.json())
        .then(data => console.log(data))
        window.location.href = currentPage
    }

    return (
        <Button
            color='green' 
            inverted 
            onClick={addFriendFetch} 
            content='Add Friend' 
        />
    )
}

const mapDTP = dispatch => {
    return {
        addFriend: (userId, friendId) => dispatch({type: 'ADD_FRIENDSHIP', userId: userId, friendId: friendId})
    }
}

export default Radium(withRouter(connect(null, mapDTP)(AddFriendButton)))