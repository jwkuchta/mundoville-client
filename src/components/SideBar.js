import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Modal, Button, Rating, Grid } from 'semantic-ui-react'
import FriendButton from './FriendButton'
// import SendMessageButton from './SendMessageButton'
import Review from './Review'
import ReviewModal from './ReviewModal'

class SideBar extends Component {

    render() {

        // debugger

        return (
            <Card>
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
                    {this.props.exchanges.length > 0 && this.props.user.id !== this.props.currentUser.id
                        ? <ReviewModal 
                            user={this.props.user}
                            currentUser={this.props.currentUser}
                        />
                            : null}
                </Card.Content>
                <Card.Content>
                    <FriendButton
                        currentUser={this.props.currentUser}
                        user={this.props.user}
                        handleFriending={this.props.handleFriending}
                        handleUnfriending={this.props.handleUnfriending}
                        />
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

export default connect(mapSTP)(SideBar)


