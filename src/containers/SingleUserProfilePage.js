import React, { Component } from 'react'
import { Card, Image, Container, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import placeholder from '../photos/profilePicPlaceholder.png'
import { fetchUsers } from '../redux/actions'
import UserInfo from '../components/UserInfo'
import SideBar from '../components/SideBar'

class SingleUserProfilePage extends Component {

    constructor() {
        super()
        this.state = {users: []}
    }

    fetchUsers = () => {
        fetch('http://localhost:3000/api/v1/users', {
      headers: {
        'Authorization': `Bearer ${localStorage.jwt}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => this.setState({users: data}))
    }

    render() {

        console.log(this.props)

        let allUsers
        let username = window.location.pathname.split('/')[2]

        if (this.props.users) {
            allUsers = this.props.users
        } else {
            this.fetchUsers()
            // allUsers = this.state.users
        }
        
        allUsers = this.props.users ? this.props.users : this.state.users
        let user = allUsers.filter(user => user.username === username)[0]

        let profile_pic_url = `http://localhost:3000/${user.profile_pic_url}`

        // debugger
        
        return (
            <Container>
                <br></br>
                <Grid>
                <br></br><br></br>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Grid.Row>
                            <Card>
                                <Card.Content>
                                    <Image src={user.profile_pic_url ? profile_pic_url : placeholder} />
                                    <Card.Header as='h3'> {user.username} </Card.Header>
                                </Card.Content>
                            </Card>   
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
    return {users: state.users}
}

// const mapDTP = dispatch => {
//     return {fetchUsers: users => dispatch(fetchUsers(users))}
// }

export default connect(mapSTP)(SingleUserProfilePage)