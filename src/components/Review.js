import React from 'react'
import { Segment, Header, Rating } from 'semantic-ui-react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Review = ({ review, allUsers }) => {

    let timestamp = review.created_at
    let reviewer = allUsers.filter(user => user.id === review.user_id)[0].username

    return (
        <div>
            <Header as='h4' attached='top'>
            <Rating defaultRating={review.rating} maxRating={5} disabled /> &nbsp;
            by &nbsp;
            <Link to={`/users/${reviewer}`}>{reviewer}
            </Link> &nbsp;
                <Moment format='MMMM Do, YYYY'>{timestamp}</Moment>  
            </Header>
            <Segment attached style={{color: 'teal'}} >
                {review.body}
            </Segment>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        allUsers: state.users
    }
}

export default connect(mapStateToProps)(Review)