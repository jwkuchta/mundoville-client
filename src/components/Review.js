import React from 'react'
import { Segment, Header, Rating } from 'semantic-ui-react'

const Review = (props) => {
    let created = props.review.created_at
    let date = created.split('T')[0]
    let splitDate = date.split('-')
    let formattedDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]

    return (
        <div>
            <Header as='h5' attached='top'>
                <Rating defaultRating={props.review.rating} maxRating={5} disabled />
                <div style={{textAlign: 'right', float: 'right'}}>{formattedDate}</div>
            </Header>
            <Segment attached style={{color: 'black'}}>
                {props.review.content}
            </Segment>
        </div>
    )
}

export default Review