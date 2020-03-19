import React from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'
import Exchange from '../components/Exchange'

const Exchanges = (props) => {

    if (props.exchanges.length > 0) {
        let exchanges = props.exchanges
        return (
            <Segment padded='very' style={{backgroundColor: '#528FBB'}}>
                {exchanges.map(e => <Exchange key ={e.id} exchange={e} /> )}
            </Segment>
        ) 
    } else {
        return (
            <Segment padded='very'>
                No messages yet. <br/>
                Click on New Message to create a new message.
            </Segment>
        )
    }
}

const mapSTP = (state) => {
    return {
        exchanges: state.exchanges,
        users: state.users,
        currentUser: state.currentUser
    }
}

export default connect(mapSTP)(Exchanges)