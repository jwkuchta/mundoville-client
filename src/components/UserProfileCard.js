import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import { selectedUser } from '../redux/actions'

class UserCard extends Component {

    render() {
        // debugger

        let profilePicUrl = `http://localhost:4000/${this.props.user.profile_pic_url}`
        let fullName = `${this.props.user.first_name} ${this.props.user.last_name}`

        return (
            <Card>
                <Card.Content>
                    <Image src={this.props.user.profile_pic_url ? profilePicUrl : placeholder} />
                        <Card.Header as='h3'> {fullName} </Card.Header>
                </Card.Content>
            </Card>
        )
    }
}

const mapDTP = dispatch => {
    return {selectedUser: user => dispatch(selectedUser(user))}
}

export default connect(null, mapDTP)(UserCard)
