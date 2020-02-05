import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import placeholder from '../photos/profilePicPlaceholder.png'
import UserProfileCard from '../components/UserProfileCard'
import UserInfo from '../components/UserInfo'
import SideBar from '../components/SideBar'

class UserProfilePage extends Component {

    render() {

        // debugger
        // console.log(this.props)

        let username = window.location.pathname.split('/')[2]
        let allUsers = this.props.users 
        let user = allUsers.filter(user => user.username === username)[0]
        
        return (
            <Container>
                <br></br>
                <Grid>
                <br></br><br></br>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            
                            <Grid.Row>
                                <UserProfileCard user={user}/>
                            </Grid.Row>

                            <Grid.Row>
                                <SideBar user={user} />
                            </Grid.Row>

                        </Grid.Column>

                        <Grid.Column width={11}>
                            <UserInfo user={user} />
                        </Grid.Column>
                        
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

const mapSTP = state => {
    // debugger
    return {
        users: state.users,
        selectedUser: state.selectedUser
    }
}

export default connect(mapSTP)(UserProfilePage)