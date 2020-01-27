import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddFriendButton from './AddFriendButton'
import RemoveFriendButton from './RemoveFriendButton'
import { Button } from 'semantic-ui-react'

class FriendButton extends Component {

    render() {

        // debugger
        
        const f1 = this.props.currentUser.friendships.filter(f => f.friend_id === this.props.user.id)
        const f2 = this.props.user.friendships.filter(f => f.friend_id === this.props.currentUser.id)
        
        const friends = f1 || f2

        if (this.props.user && this.props.currentUser) {
            return (
                <div>
                    {friends.length < 1
                        ?  (<AddFriendButton user={this.props.user} currentUser={this.props.currentUser} /> )
                        :  (<RemoveFriendButton user={this.props.user} currentUser={this.props.currentUser} />)}
                </div>
            )
        } else {
            return null
        }

        return (
            <Button></Button>
        )
    }
}

const mapSTP = state => {
    return {
        currentUser: state.currentUser,
        allUsers: state.users
    }
}

export default connect(mapSTP)(FriendButton)