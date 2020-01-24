import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Button } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import { connect } from 'react-redux'
import PicUpload from './PicUpload'
// import EditProfilePage from '../containers/EditProfilePage'

class ProfileCard extends Component {

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
                        <PicUpload />
                        <Button className='ui button'>
                            <Link to={`/users/${this.props.currentUser.username}/edit`}>Edit your profile</Link>
                        </Button>
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
export default connect(mapStateToProps)(ProfileCard)

