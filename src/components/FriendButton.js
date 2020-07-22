import React from 'react'
import { connect } from 'react-redux'
import AddFriendButton from './AddFriendButton'
import RemoveFriendButton from './RemoveFriendButton'

const FriendButton = ({ user, currentUser }) => {

    // check for existing friendship to determine which button will be displayed (friend/unfriend)
    const f1 = currentUser.friendships.filter(f => f.friend_id === user.id)
    const f2 = user.friendships.filter(f => f.friend_id === currentUser.id)
        
    const friends = f1 || f2

    if (user && currentUser) {
        return (
            <div>
                {friends.length < 1
                    ?  <AddFriendButton user={user} currentUser={currentUser} /> 
                    :  <RemoveFriendButton user={user} currentUser={currentUser} />}
            </div>
        )
    } else {
        return null
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        allUsers: state.users
    }
}

export default connect(mapStateToProps)(FriendButton)