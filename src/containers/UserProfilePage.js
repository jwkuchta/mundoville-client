import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import UserProfileCard from '../components/UserProfileCard'
import UserInfo from '../components/UserInfo'
import SideBar from '../components/SideBar'

const UserProfilePage = ({ users }) => {

    const username = window.location.pathname.split('/')[2]
    const user = users.filter(user => user.username === username)[0]

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

const mapStateToProps = state => {
    return {
        users: state.users,
        selectedUser: state.selectedUser
    }
}

export default connect(mapStateToProps)(UserProfilePage)