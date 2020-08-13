import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import { apiBaseUrl } from '../utils/constants'

const UserCard = ({ user }) => {

    let profilePicUrl = `${apiBaseUrl}${user.profile_pic_url}`

    return (
        <Card>
            <Card.Content>
                <Image src={user.profile_pic_url ? profilePicUrl : placeholder} />
                    <Card.Header as='h3'> {user.first_name} {user.last_name} </Card.Header>
            </Card.Content>
        </Card>
    )
}

export default UserCard

