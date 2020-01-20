import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Card, Icon, Image, Button } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import {connect} from 'react-redux'
import PicUpload from './PicUpload'
// import EditProfilePage from '../containers/EditProfilePage'

class ProfileCard extends Component {

    render() {
        // debugger

        let pic_url = `http://localhost:3000/ + ${this.props.currentUser.profile_pic_url}`

        // const img_url=this.props.currentUser.profile_pic_url
        return (
            <Grid.Column>
                <Card>
                    <Card.Content>
                        <Image src={this.props.currentUser.profile_pic_url 
                        ? pic_url : placeholder} />

                        {/* <img className ='profile-pic' src={this.props.currentUser.profile_pic_url
                            // ? this.props.currentUser.profile_pic_url
                            ? img_url : placeholder} alt='profile pic'/> */}

                        {/* <img className ='profile-pic' src={this.props.currentUser.profile_pic_url
                            ? "https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg"
                                : placeholder} alt='profile pic'/> */}
                        <Card.Header as='h3'>
                            {this.props.currentUser.verified 
                                ? <Icon color='green' name='check circle'/> 
                                    : null}
                            {this.props.currentUser.username}
                        </Card.Header>
                        <Card.Meta>
                            {this.props.currentUser.user_type} | {this.props.currentUser.rating 
                                ? this.props.currentUser.rating + '/5' 
                                    : 'Unrated'}
                        </Card.Meta>
                        <PicUpload />
                        <Button className='ui button'>
                            <Link to={`/users/${this.props.currentUser.username}/edit`}>Edit your profile</Link>
                        </Button>
                    </Card.Content>
                </Card>
            </Grid.Column>
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

// copied from Pica