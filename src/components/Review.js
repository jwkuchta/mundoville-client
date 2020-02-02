import React from 'react'
import { Segment, Header, Rating } from 'semantic-ui-react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Review = props => {

    let timestamp = props.review.created_at
    let reviewer = props.allUsers.filter(user => user.id === props.review.user_id)[0].username
    // let avatar = {avatar: true, src: `http://localhost:3000/${reviewer.profile_pic_url}` }

    debugger
    

    return (
        <div>
            <Header as='h4' attached='top'>
            <Rating defaultRating={props.review.rating} maxRating={5} disabled /> &nbsp;
            by &nbsp;
            <Link to={`/users/${reviewer}`}>{reviewer}
            </Link> &nbsp;
                <Moment format='MMMM Do, YYYY'>{timestamp}</Moment>  
            </Header>
            <Segment attached style={{color: 'teal'}} >
                {props.review.body}
            </Segment>
        </div>
    )
}

const mapSTP = state => {
    return {
        allUsers: state.users
    }
}

export default connect(mapSTP)(Review)