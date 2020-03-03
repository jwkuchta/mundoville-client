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
            <Container className='profilePage'>
                <Grid >
                {/* <br></br> */}
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Grid.Row>
                            <CurrentUserProfileCard /> 
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={11} style={{'backgroundColor': 'white', 'padding': '1px'}}>
                        <Grid.Row>
                            <UserInfo user={this.props.currentUser} />
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
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



