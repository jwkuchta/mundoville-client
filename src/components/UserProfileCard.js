import React from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import { selectedUser } from '../redux/actions'

const UserCard = ({ user }) => {

    let profilePicUrl = `http://localhost:3000/${user.profile_pic_url}`

    return (
        <Card>
            <Card.Content>
                <Image src={user.profile_pic_url ? profilePicUrl : placeholder} />
                    <Card.Header as='h3'> {user.first_name} {user.last_name} </Card.Header>
            </Card.Content>
        </Card>
    )
}

const mapDTP = dispatch => {
    return {selectedUser: user => dispatch(selectedUser(user))}
}

export default connect(null, mapDTP)(UserCard)
