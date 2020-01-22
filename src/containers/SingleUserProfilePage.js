import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'
import placeholder from '../photos/profilePicPlaceholder.png'

class SingleUserProfilePage extends Component {

    render() {

        let username = this.props.match.params.username
        let allUsers = this.props.users
        let user = allUsers.filter(user => user.username === username)[0]
         
        // debugger
        return (
            <div>
            <Card>
                <Card.Content>
                    <Image src={user.profile_pic_url ? `http://localhost:3000/${user.profile_pic_url}` : placeholder} />
                        <Card.Header as='h3'> {user.username} </Card.Header>
                        Detailed User Info Here
                </Card.Content>
            </Card>
            </div>
        )
    }
}

const mapSTP = state => {
    // debugger
    return {
        users: state.users
    }
}

export default connect(mapSTP)(SingleUserProfilePage)