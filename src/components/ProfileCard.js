import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Card, Icon, Image, Button } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import {connect} from 'react-redux'
// import EditProfilePage from '../containers/EditProfilePage'

class ProfileCard extends Component {

    render() {
        return (
            <Grid.Column>
                <Card>
                    <Card.Content>
                        <Image size='small' src={this.props.currentUser.profile_pic
                            ? this.props.currentUser.profile_pic
                                : placeholder} />
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