import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrentUserProfileCard from '../components/CurrentUserProfileCard'
import { Grid, Container } from 'semantic-ui-react'
// import { Button, Link } from 'semantic-ui-react'
import UserInfo from '../components/UserInfo'
// import PicUpload from '../components/PicUpload'

class CurrentUserProfilePage extends Component {

    render() {

        // console.log(this.props)
        return (
            <div className='profilePage'>
            <Container >
                <Grid>
                <br></br>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Grid.Row>
                            <CurrentUserProfileCard /> 
                        </Grid.Row>
                        <Grid.Row>
                        </Grid.Row>    
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <UserInfo user={this.props.currentUser} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                </Grid.Row>
                </Grid>
            </Container>
            </div>
        )
    }  
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        users: state.users,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(CurrentUserProfilePage)