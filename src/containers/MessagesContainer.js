import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Container } from 'semantic-ui-react'
import Exchanges from './Exchanges'
import NewExchangeForm from '../components/NewExchangeForm'
import { useAuth0 } from "../react-auth0-spa"
import { getExchanges } from '../redux/actions'

const MessagesContainer = (props) => {
   
    const [ option, setOption ] = useState('exchanges')
    const { user } = useAuth0()

    useEffect(() => {
        fetchExchanges()
    }, [])

    const fetchExchanges = () => {
        fetch('http://localhost:4000/api/v1/findExchanges', {
          method: 'POST',
          headers: {
            // 'Authorization': `Bearer ${localStorage.jwt}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({id: props.currentUser.user.id})
        })
        .then(resp => {
          return resp.json()
        })
        .then(data => {
          props.getExchanges(data)
        })
        .catch(e => console.log(e))
      }

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

const mapDTP = dispatch => {
    return {
      getExchanges: exchanges => dispatch(getExchanges(exchanges))
    }
  }

export default connect(mapSTP, mapDTP)(MessagesContainer)