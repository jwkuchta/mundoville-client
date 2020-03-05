import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Reviews extends Component {

    reviews = this.props.user.reviews
    users = this.props.allUsers
   
    render () {
        debugger
        return (
            <Container>
                <h3>Here is what others had to say about you</h3>
                {this.reviews.length > 0 
                ?
                this.reviews.map(review => {
                    debugger
                    let reviewer = this.users.find(user => user.id === review.user_id)
                    return <h3>
                        <div>"<i>{review.body}</i>" - <strong><Link to={`/users/${reviewer.username}`}>{reviewer.username}</Link></strong></div>
                    </h3>
                })
                :
                <h3>You don't have any reviews yet</h3>
                }   
            </Container>
        )
    }
}

const mapSTP = state => {
    return {
        user: state.currentUser,
        allUsers: state.users
    }
}

export default connect(mapSTP)(Reviews)

