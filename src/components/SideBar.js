import React from 'react'
import { connect } from 'react-redux'
import { Card, Modal, Button, Rating } from 'semantic-ui-react'
import FriendButton from './FriendButton'
import Review from './Review'
import AddReviewModal from './AddReviewModal'

const SideBar = (props) => {

    // debugger

    return (
        <Card>
            <Card.Content style={{color: 'teal'}}>
                {props.user.reviews.length > 0
                    ? <Rating 
                        icon='star' 
                        defaultRating={props.user.rating} 
                        maxRating={5} 
                        disabled
                    />
                    : null } <br/>
                {props.user.rating ? props.user.rating + '/5' : 'This user has no reviews yet'}<br/><br/>
                {props.user.reviews.length > 0 &&
                    <Modal 
                    trigger={<Button basic content='Read All Reviews'/>} 
                    closeIcon
                    >
                        <Modal.Header content={`Reviews for ${props.user.username}`} />
                        <Modal.Content>
                            {props.user.reviews.length < 1 
                                ? <h1>This user has no reviews yet</h1>
                                    : null}
                            {props.user.reviews.reverse().map(review => 
                                <Review key={review.id} review={review} />
                            )}
                        </Modal.Content>
                    </Modal>}<br/><br/>
                {props.user.reviews === 0 && <h4 style={{color: 'teal'}}>Be the first to leave a review</h4>} 
                <AddReviewModal 
                    user={props.user}
                    currentUser={props.currentUser}
                /><br></br>
            </Card.Content><br></br>
            <Card.Content>
                <FriendButton
                    currentUser={props.currentUser}
                    user={props.user}
                    handleFriending={props.handleFriending}
                    handleUnfriending={props.handleUnfriending}
                    />
            </Card.Content>
        </Card>
    )  
}

const mapSTP = state => {
    return {
        currentUser: state.currentUser,
        exchanges: state.exchanges
    }
}

export default connect(mapSTP)(SideBar)


