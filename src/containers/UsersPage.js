import React from 'react'
// import { getUsers } from '../redux/actions'
import { Grid, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import UserCard from '../components/UserCard'
import SearchBar from '../components/SearchBar'
import { filterUsers } from '../redux/actions'

const UsersPage = (props) => {

    const currentUser = props.currentUser
    const allUsers = props.users
    const selectedCountry = props.selectedCountry

    const all = allUsers.filter(u => u.username !== currentUser.username)
    const filtered = all.filter(u => u.country === selectedCountry)

    return (
        <Container maxwidth={10}>
            <SearchBar />
            <Grid columns={4} divided>
                <Grid.Row>
                    {filtered.map(user => <>
                        <Grid.Column key={user.id}>
                            <UserCard user={user} />
                            <Grid.Row></Grid.Row>
                        </Grid.Column>
                        </>
                    )}
                </Grid.Row>
            </Grid>  
        </Container>     
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
        currentUser: state.currentUser,
        filteredUsers: state.filteredUsers,
        selectedCountry: state.countrySelection
    }
}

const mapDTP = dispatch => {
    return {
        filterUsers: filtered => dispatch(filterUsers(filtered))
    }
}

export default connect(mapStateToProps, mapDTP)(UsersPage)