import React from 'react'
// import { getUsers } from '../redux/actions'
import { Grid, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import UserCard from '../components/UserCard'
import SearchBar from '../components/SearchBar'
import { filterUsers } from '../redux/actions'
import { withRouter } from 'react-router-dom'

const UsersPage = ({ currentUser, users, selectedCountry}) =>  {

    const all = users.filter(u => u.username !== currentUser.username)
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
        selectedCountry: state.countrySelection
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterUsers: filtered => dispatch(filterUsers(filtered))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersPage))