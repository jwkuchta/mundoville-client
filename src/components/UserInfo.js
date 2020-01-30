import React, {Component} from 'react'
import { Container, Grid, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import sakura from '../photos/sakura.jpg'
import SocialMediaIcons from '../components/SocialMediaIcons'

class UserInfo extends Component {

    render() {

        const {user} = this.props
        // let username = window.location.pathname.split('/')[2]
        // let allUsers = this.props.users
        // let userFromUrl = allUsers.filter(user => user.username === username)[0]

        // let user = localStorage.jwt ? this.props.currentUser : userFromUrl

        let bio = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        return (
            <Container className='text-custom'>
                <Grid.Row>Username: &nbsp; {user.username} </Grid.Row>
                <Grid.Row>Full Name: &nbsp; {user.first_name} {user.last_name} </Grid.Row>
                <Grid.Row>Email: &nbsp; {user.email} </Grid.Row>
                {/* <Grid.Row>Facebook: &nbsp; {user.facebook} </Grid.Row>
                <Grid.Row>Instagram: &nbsp; {user.instagram} </Grid.Row>
                <Grid.Row>Occupation: &nbsp; {user.occupation} </Grid.Row> */}
                <Grid.Row>Location: &nbsp; {user.city}, {user.country} </Grid.Row>
                <Grid.Row>Languages: &nbsp; {user.language1}, {user.language2}, {user.language3} </Grid.Row>
                <Divider></Divider><br></br>
                {user.bio ? <Grid.Row>Bio: &nbsp; {user.bio}</Grid.Row> : <Grid.Row>Bio: &nbsp; {bio}</Grid.Row> }
                <Grid.Row className='teal-background'>
                    <SocialMediaIcons />
                </Grid.Row>
            </Container>
        )
    }
}

const mapSTP = state => {
    return {
        currentUser: state.currentUser,
        allUsers: state.allUsers
    }
}

export default connect(mapSTP)(UserInfo)