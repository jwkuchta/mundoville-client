import React from 'react'
import { connect } from 'react-redux'
import AddFriendButton from './AddFriendButton'
import RemoveFriendButton from './RemoveFriendButton'
// import { Button } from 'semantic-ui-react'

const FriendButton = props => {

    // check for friendship to determine which button will be displayed (friend/unfriend)
    const f1 = props.currentUser.friendships.filter(f => f.friend_id === props.user.id)
    const f2 = props.user.friendships.filter(f => f.friend_id === props.currentUser.id)
        
    const friends = f1 || f2

    if (props.user && props.currentUser) {
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
        allUsers: state.users
    }
}

export default connect(mapSTP)(FriendButton)