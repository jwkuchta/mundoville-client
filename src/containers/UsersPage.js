import React, {Component} from 'react'
// import {getUsers} from '../redux/actions'
import {Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'
import SingleUserProfileCard from '../components/SingleUserProfileCard'
import SearchBar from '../components/SearchBar'

class UsersPage extends Component  {

    state = {filtered: false}

    render() {

        const currentUser = this.props.currentUser
        let allUsers = this.props.users
        let filteredUsers = this.props.filteredUsers
        const users = allUsers.filter(user => user.username !== currentUser.username)
        const filtered = filteredUsers.filter(user => user.username !== currentUser.username)
       
        // return (
        //     <div>
        //         <h1>You are currently logged in as {currentUser.username}</h1>
        //         <SearchBar />
        //         <Grid columns={4} divided>
                
        //             <Grid.Row> {this.state.filtered} ? 
        //             {this.props.filteredUsers.map(user => 
        //                 <>
        //                     <Grid.Column key={user.id}>
        //                         <SingleUserProfileCard user={user} />
        //                         <Grid.Row></Grid.Row>
        //                     </Grid.Column>
        //                     </> )}
        //                     :
        //                 {users.map(user => <>
        //                     <Grid.Column key={user.id}>
        //                         <SingleUserProfileCard user={user} />
        //                         <Grid.Row></Grid.Row>
        //                     </Grid.Column>
        //                     </>
        //                 )}
        //             </Grid.Row>
        //         </Grid>  
        //     </div>
        // )
        return (
            <div>
                <h1>You are currently logged in as {currentUser.username}</h1>
                <SearchBar />
                <Grid columns={4} divided>
                
                    <Grid.Row>
                        {filtered.map(user => <>
                            <Grid.Column key={user.id}>
                                <SingleUserProfileCard user={user} />
                                <Grid.Row></Grid.Row>
                            </Grid.Column>
                            </>
                        )}
                    </Grid.Row>
                </Grid>  
            </div>
        )
    } 
}

const mapStateToProps = state => {
    return {
        users: state.users,
        currentUser: state.currentUser,
        filteredUsers: state.filteredUsers
    }
}

export default connect(mapStateToProps)(UsersPage)
