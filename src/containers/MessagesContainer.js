import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Container } from 'semantic-ui-react'
import Exchanges from './Exchanges'
import NewExchangeForm from '../components/NewExchangeForm'

const MessagesContainer = props => {
    
    const [ page, setPage ] = useState('exchanges')

    if (props.currentUser) {
        let currentPage = page === 'exchanges' 
        ? 
        <Exchanges currentUser={props.currentUser} />
        :  
        <NewExchangeForm 
            currentUser={props.currentUser} 
            users={props.users} 
            setPageMessages={() => setPage('exchanges')}
        />

        return (   
            <Container style={{width: '50%'}}>
            <br></br>
            <Grid stretched >
                <Menu tabular  widths={2}  >
                    <Menu.Item 
                        id='messages'
                        header
                        // ref={messagesRef}
                        name='Messages'
                        active={page === 'exchanges'}
                        onClick={() => setPage('exchanges')}
                        // color={this.state.messagesColor}
                    />
                    <Menu.Item 
                        id='messages'
                        header
                        // ref={this.newMessageRef}
                        position='right'
                        name='New Message'
                        active={page === 'new'}
                        onClick={() => setPage('new')}
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

const mapSTP = state => {
    return {
        currentUser: state.currentUser,
        users: state.users
    }
}

export default connect(mapSTP)(MessagesContainer)