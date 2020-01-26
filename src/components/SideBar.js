import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Modal, Button, Rating } from 'semantic-ui-react'
import FriendButton from './FriendButton'
// import SendMessageButton from './SendMessageButton'
import Review from './Review'
import ReviewModal from './ReviewModal'
// import placeholder from '../photos/profilePicPlaceholder.png'

class SideBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        // debugger
        console.log(this.props)

        return (
            <Card>
                <Card.Content>
                    {/* <FriendButton 
                        currentUser={setUser}
                        user={this.props.user}
                        handleFriending={this.props.handleFriending}
                        handleUnfriending={this.props.handleUnfriending}
                        /> */}
                </Card.Content>
                <Card.Content style={{color: 'teal'}}>
                    {this.props.user.rating
                        ? <Rating 
                            icon='star' 
                            defaultRating={this.props.user.rating} 
                            maxRating={5} 
                            disabled
                        />
                            : null }<br/>
                    {this.props.user.rating
                        ? this.props.user.rating + '/5'
                            : 'This user has no reviews yet'}<br/><br/>
                    <Modal 
                        trigger={<Button basic content='Read All Reviews'/>} 
                        closeIcon
                    >
                        <Modal.Header content={`Reviews for ${this.props.user.username}`} />
                        <Modal.Content>
                            {this.props.user.reviews.length < 1 
                                ? <p style={{color: 'black'}}>This user has no reviews yet</p>
                                    : null}
                            {this.props.user.reviews.reverse().map(review => 
                                <Review key={review.id} review={review} />
                            )}
                        </Modal.Content>
                    </Modal><br/><br/>
                    {this.props.exchanges.length > 0 && this.props.user.id !== this.props.user.id
                        ? <ReviewModal 
                            user={this.props.user}
                            currentUser={this.props.currentUser}
                        />
                            : null}
                </Card.Content>
            </Card>
        )
    }
}

const mapSTP = state => {
    return {
        currentUser: state.currentUser,
        exchanges: state.exchanges
    }
}

// const mapDTP = dispatch => {
//     return {
//         handleFriending: (user, currentUser) => {
//             currentUser.friends = [...currentUser.friendships, user]
//             dispatch({
//                 type: 'FRIEND',
//                 user: currentUser
//             })
//         },
//         handleUnfriending: (user, currentUser) => {
//             currentUser.friendships = [...currentUser.friendships.filter(u => u.id !== user.message)]
//             dispatch({
//                 type: 'UNFRIEND',
//                 payload: currentUser
//             })
//         }
//     }
// }

// export default connect(mapSTP, mapDTP)(SideBar)
export default connect(mapSTP)(SideBar)

