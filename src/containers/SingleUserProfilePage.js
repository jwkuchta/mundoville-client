import React, { Component } from 'react'
import { Card, Image, Container, Grid } from 'semantic-ui-react'
import {connect} from 'react-redux'
import placeholder from '../photos/profilePicPlaceholder.png'
import {fetchUsers} from '../redux/actions'
import UserInfo from '../components/UserInfo'

class SingleUserProfilePage extends Component {

    // getUsers = () => {
    //     return this.props.fetchUsers
    // }

    componentDidMount() {
        if (localStorage.jwt) {
          this.props.fetchUsers()  
        } else {
          localStorage.clear()
        }
      }

    render() {
        // this.getUsers()

        // this.props.fetchUsers()

        // let username = this.props.match.params.username
        let username = window.location.pathname.split('/')[2]
        let allUsers = this.props.users
        let user = allUsers.filter(user => user.username === username)[0]
         
        // debugger
        return (
            <Container>
                <br></br>
                <Grid>
                <br></br><br></br>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Card>
                                <Card.Content>
                                    <Image src={user.profile_pic_url ? `http://localhost:3000/${user.profile_pic_url}` : placeholder} />
                                    <Card.Header as='h3'> {user.username} </Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={12}>
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

const mapDTP = dispatch => {
    return {fetchUsers: users => dispatch(fetchUsers(users))}
}

export default connect(mapSTP, mapDTP)(SingleUserProfilePage)