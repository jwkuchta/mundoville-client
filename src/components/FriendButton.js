import React from 'react'
// import { connect } from 'react-redux'
// import AddFriendButton from './AddFriendButton'
// import RemoveFriendButton from './RemoveFriendButton'

const FriendButton = props => {

    const handleClick = () => {
        alert('you clicked me!')
    }

    return (
        <div>
            <button onClick={handleClick}>I am but a simple button</button>
        </div>
        
    ) 
}


export default FriendButton