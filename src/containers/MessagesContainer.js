import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Container } from 'semantic-ui-react'
import Exchanges from './Exchanges'
import NewExchangeForm from '../components/NewExchangeForm'

class MessagesContainer extends Component {
    
    constructor() {
        super()
        this.state = {
            page: 'exchanges',
        }
    }


    render() {
        // debugger
        if (this.props.currentUser.username) {
            debugger
            let currentPage = this.state.page === 'exchanges' 
            ? 
            <Exchanges currentUser={this.props.currentUser} />
            :  
            <NewExchangeForm 
                currentUser={this.props.currentUser} 
                users={this.props.users} 
                setPageMessages={() => this.setState({page: 'exchanges'})}
            />

            return (
                
                <Container style={{width: '50%'}}>
                <br></br>
                <Grid stretched >
                    <Menu tabular  widths={2}  >
                        <Menu.Item 
                            id='messages'
                            header
                            ref={this.messagesRef}
                            name='Messages'
                            active={this.state.page === 'exchanges'}
                            // onClick={() => this.setState({page: 'exchanges'})}
                            onClick={() => this.setState({page: 'exchanges'})}
                            color={this.state.messagesColor}
                        />
                        <Menu.Item 
                            id='messages'
                            header
                            ref={this.newMessageRef}
                            position='right'
                            name='New Message'
                            active={this.state.page === 'new'}
                            onClick={() => this.setState({page: 'new'})}
                            color={this.state.newMessageColor} 
                            // color={this.state.color}
                        />
                    </Menu>
                    <Grid.Column width={16}>
                        {currentPage}
                    </Grid.Column>
                </Grid>
                </Container> 
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