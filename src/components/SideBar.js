import React from 'react'
import { connect } from 'react-redux'
import { Card, Modal, Button, Rating } from 'semantic-ui-react'
import FriendButton from './FriendButton'
import Review from './Review'
import AddReview from './AddReview'

const SideBar = ({ user, currentUser }) => {

    return (
        <Card>
            <Card.Content style={{color: 'teal'}}>
                {user.reviews.length > 0 &&
                    <Rating 
                        icon='star' 
                        defaultRating={user.rating} 
                        maxRating={5} 
                        disabled
                    />
                }<br/>
                {user.rating ? user.rating + '/5' : 'This user has no reviews yet'}
                <br/><br/>
                <Modal 
                    trigger={<Button basic content='Read All Reviews'/>} 
                    closeIcon
                >
                    <Modal.Header content={`Reviews for ${user.username}`} />
                    <Modal.Content>
                        {user.reviews.length < 1 && <h1>This user has no reviews yet</h1>}
                        {user.reviews.reverse().map(review => 
                            <Review key={review.id} review={review} />
                        )}
                    </Modal.Content>
                </Modal><br/><br/><br></br>
                <AddReview
                    user={user}
                    currentUser={currentUser}
                /><br></br>
            </Card.Content><br></br>
            <Card.Content>
                <FriendButton
                    currentUser={currentUser}
                    user={user}
                    />
            </Card.Content>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        exchanges: state.exchanges
    }
}

export default connect(mapStateToProps)(SideBar)


