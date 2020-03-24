import React from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import { selectedUser } from '../redux/actions'

const UserProfileCard = (props) => {

    // debugger

    let profilePicUrl = `http://localhost:4000/${props.user.profile_pic_url}`
        let fullName = `${props.user.first_name} ${props.user.last_name}`

    return (
        <Card>
            <Card.Content>
                <Image src={props.user.profile_pic_url ? profilePicUrl : placeholder} />
                    <Card.Header as='h3'> {fullName} </Card.Header>
            </Card.Content>
        </Card>
    )
}

const mapDTP = dispatch => {
    return {selectedUser: user => dispatch(selectedUser(user))}
}

export default connect(null, mapDTP)(UserProfileCard)
