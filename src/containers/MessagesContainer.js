import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Container } from 'semantic-ui-react'
import Exchanges from './Exchanges'
import NewExchangeForm from '../components/NewExchangeForm'
import { useAuth0 } from "../react-auth0-spa"

const MessagesContainer = (props) => {
   
    const [ option, setOption ] = useState('exchanges')
    const { user, isAuthenticated } = useAuth0()

    if (user) {
        // debugger
        let currentPage = option === 'exchanges' 
        ? 
        <Exchanges currentUser={props.currentUser ? props.currentUser : user} />
        :  
        <NewExchangeForm 
            currentUser={props.currentUser ? props.currentUser : user} 
            users={props.users} 
            setPageMessages={() => setOption('exchanges')}
        />

        return (
            
            <Container style={{width: '50%'}}>
            <br></br>
            <Grid stretched >
                <Menu tabular  widths={2}  >
                    <Menu.Item 
                        id='messages'
                        header
                        name='Messages'
                        active={option === 'exchanges'}
                        // onClick={() => setState({page: 'exchanges'})}
                        onClick={() => setOption('exchanges')}
                    />
                    <Menu.Item 
                        id='messages'
                        header
                        position='right'
                        name='New Message'
                        active={option === 'new'}
                        onClick={() => setOption('new')}
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