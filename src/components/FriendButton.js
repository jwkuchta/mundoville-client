import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AddFriendButton from './AddFriendButton'
import RemoveFriendButton from './RemoveFriendButton'
// import { Button } from 'semantic-ui-react'

const FriendButton = props => {

    useEffect(() => {
        fetchFriendships()
    }, [])

    const fetchFriendships = () => {
        fetch('http://localhost:4000/api/v1/friendships', {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => props.setFriendships(data))
    }

    // check for friendship to determine which button will be displayed (friend/unfriend)
    let currentUser = props.currentUser.user
    let user = props.user

    let f1 = props.friendships.filter(f => f.user_id === currentUser.id && f.friend_id === user.id)
    let f2 = props.friendships.filter(f => f.friend_id === currentUser.id && f.user_id === user.id)
        
    const friends = f1 || f2

    if (user && currentUser) {
        // debugger
        return (
            <div>
                {friends.length < 1
                    ?  <AddFriendButton user={props.user} currentUser={props.currentUser} /> 
                    :  <RemoveFriendButton user={props.user} currentUser={props.currentUser} />}
            </div>
        )
    } else {
        return null
    }
}

const mapSTP = state => {
    return {
        currentUser: state.currentUser,
        allUsers: state.users,
        friendships: state.friendships
    }
}

const mapDTP = dispatch => {
    return {
        setFriendships: (friendships) => dispatch({type: 'GET_FRIENDSHIPS', friendships: friendships})
    }
}

export default connect(mapSTP, mapDTP)(FriendButton)