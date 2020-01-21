import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid } from 'semantic-ui-react'
import Exchanges from './Exchanges'
import NewExchangeForm from '../components/NewExchangeForm'

class MessagesContainer extends Component {
    constructor() {
        super()

        this.state = {
            page: 'exchanges'
        }
    }

    render() {

        // debugger
        if (this.props.currentUser.username) {
            let currentPage
            this.state.page === 'exchanges'
                ? currentPage = <Exchanges 
                                    currentUser={this.props.currentUser}
                                />
                    : currentPage = <NewExchangeForm 
                                        currentUser={this.props.currentUser} 
                                        users={this.props.users} 
                                    />

            return (
                <Grid stretched>
                    <Menu tabular inverted widths={4} size='huge'>
                        <Menu.Item 
                            name='Messages'
                            active={this.state.page === 'exchanges'}
                            onClick={() => this.setState({page: 'exchanges'}, () => window.location.reload())}
                        />
                        <Menu.Item 
                            position='right'
                            name='Create New Message'
                            active={this.state.page === 'new'}
                            onClick={() => this.setState({page: 'new'})}
                        />
                    </Menu>
                    <Grid.Column width={16}>
                        {currentPage}
                    </Grid.Column>
                </Grid>
            )
        } else {
            return null
        }
    }
}

const mapSTP = state => {
    return {
        currentUser: state.currentUser,
        users: state.users
    }
}

export default connect(mapSTP)(MessagesContainer)