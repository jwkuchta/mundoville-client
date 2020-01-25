import React from 'react'
import { Segment, Header, Rating } from 'semantic-ui-react'

const Review = props => {

    let timestamp = props.review.created_at
    let date = timestamp.split('T')[0]
    let splitDate = date.split('-')
    let formattedDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]

    return (
        <div>
            <Header as='h4' attached='top'>
                <Rating defaultRating={props.review.rating} maxRating={5} disabled />
                <div style={{textAlign: 'left', float: 'left'}}>{formattedDate}</div>
            </Header>
            <Segment attached style={{color: 'white'}}>
                {props.review.content}
            </Segment>
        </div>
    )
}

export default Review