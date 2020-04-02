import React from 'react'
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Reviews = props => {

    let reviews = props.user.reviews
    let users = props.allUsers
   
    return (
        <Container>
            <h3>Here is what others had to say about you</h3>
            {(reviews && reviews.length) > 0 
            ?
            reviews.map(review => {
                // debugger
                let reviewer = users.find(user => user.id === review.user_id)
                return <h3>
                    <div>
                        "<i>{review.body}</i>" - 
                            <Link to={`/users/${reviewer.username}`}>
                            {reviewer.city && reviewer.country
                            ? 
                            `${reviewer.first_name} ${reviewer.last_name}, ${reviewer.city}, ${reviewer.country}.`
                            : 
                            `${reviewer.first_name} ${reviewer.last_name}`}
                            </Link>
                    </div>
                </h3>
            })
            :
            <h3>You don't have any reviews yet</h3>
            }   
        </Container>
    )
}

const mapSTP = state => {
    return {
        user: state.currentUser,
        allUsers: state.users
    }
}

export default connect(mapSTP)(Reviews)

