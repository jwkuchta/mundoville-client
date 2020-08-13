import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Button } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import { apiBaseUrl } from '../utils/constants'

const UserCard = ({ user }) => {

    let profilePicUrl = `${apiBaseUrl}${user.profile_pic_url}`

        return (
            <Card link style={{marginBottom: 25, padding: 10, backgroundColor: '#eeeeee'}}>
                <Card.Content>
                    <div>
                    <Image src={user.profile_pic_url ? profilePicUrl : placeholder} />
                    </div>
                    <div>
                    <h3>{user.first_name}  {user.last_name}</h3>
                    <h3>{user.city}, {user.country}</h3>
                    <Button className='ui button'>
                        <Link to={`/users/${user.username}`} style={{'font-size': '20px', 'backgroundColor': 'white'}}>Full profile</Link>
                    </Button>
                    </div>
                </Card.Content>
            </Card>
        )
}

export default UserCard




