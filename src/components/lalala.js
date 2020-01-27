import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import { connect } from 'react-redux'
// import EditProfilePage from '../containers/EditProfilePage'

class UserCard extends Component {

    render() {
        
        // debugger
        let pic_url = `http://localhost:3000/${this.props.currentUser.profile_pic_url}`

        return (
            <>
                <Card>
                    <Card.Content>
                        <Image src={this.props.currentUser.profile_pic_url ? pic_url : placeholder} />
                        <Card.Header as='h3'>
                            {this.props.currentUser.username}
                        </Card.Header>
                    </Card.Content>
                </Card>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        users: state.users
    }
}
export default connect(mapStateToProps)(UserCard)

