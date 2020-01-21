import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'
import Exchange from '../components/Exchange'

class Exchanges extends Component {

    render() {
        // debugger
    if (this.props.exchanges.length > 0) {

        let exchanges = this.props.exchanges
            
            return (
                <Segment inverted padded='very'>
                    {exchanges.map(e => <Exchange key ={e.id} exchange={e} /> )}
                </Segment>
            )
            
        } else {

            return (
                <Segment inverted padded='very'>
                    You have not sent any messages yet. <br/>
                    Search users to send messages to.
                </Segment>
            )
        }
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