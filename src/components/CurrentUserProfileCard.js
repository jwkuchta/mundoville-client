import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Button, Container, Rating } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import { connect } from 'react-redux'
import PicUpload from './PicUpload'

class CurrentUserProfileCard extends Component {

    render() {
        
        // debugger
        let pic_url = `http://localhost:3000/${this.props.currentUser.profile_pic_url}`
        let first_name = this.props.currentUser.first_name
        let last_name = this.props.currentUser.last_name
        let username = this.props.currentUser.username
        let currentUser = this.props.currentUser

        let header = (first_name && last_name) ? `${first_name} ${last_name}` : username

        return (
            <>
            <Container>
            <Card>
                    <Card.Content>
                        <Image src={currentUser.profile_pic_url ? pic_url : placeholder} /><br></br>
                        <Card.Header as='h3'><br></br>
                            {header}
                        </Card.Header>
                        <PicUpload /><br></br>
                        <Button className='ui button'>
                            <Link to={`/users/${currentUser.username}/edit`}>Edit your profile</Link>
                        </Button>
                    </Card.Content>
                    <Card.Content style={{color: 'teal'}}>
                        {currentUser.rating 
                        ? 
                        <Rating 
                            icon='star' 
                            defaultRating={currentUser.rating} 
                            maxRating={5} 
                            disabled
                        />
                        : null }<br/>
                        {currentUser.rating ? currentUser.rating + '/5' : 'No reviews yet'}<br/><br/>
                    </Card.Content>
                </Card>
            </Container>   
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
export default connect(mapStateToProps)(CurrentUserProfileCard)