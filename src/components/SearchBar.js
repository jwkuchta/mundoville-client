// import React from 'react'
// import { connect } from 'react-redux'
// import { Search, Segment, Header } from 'semantic-ui-react'
// import { setQuery } from './redux/actions'

// const SearchBar = (props) => {
//     return (
//         <div>
//             <Search
//                 size='mini'
//                 type='text'
//                 aligned='right'
//                 placeholder='Search'
//                 value={props.searchQuery.input}
//                 results={props.searchQuery.results}
//                 resultRenderer={resultRenderer}
//                 onSearchChange={(e) => props.onChange(e.target.value)}
//                 onResultSelect={null}
//             />
//         </div>
//     )
// }

// const resultRenderer = (user) => {
//     return(
//         <Segment size='small'>
//             <Header as='h3' content={user.username} />
//             {user.first_name + ' ' + user.last_name}
//         </Segment>
//     )
// }

// //sets the value of the searchbar to state's default searchQuery: ''
// const mapSTP = state => {
//     return {
//         search: state.search
//     }
// }

// //creates dispatch functions to use as props
// const mapDTP = dispatch => {
//     return {
//         setQuery: query => dispatch(setQuery(query)) 
//     }
// }

// export default connect(mapSTP, mapDTP)(SearchBar)

import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Segment, Header } from 'semantic-ui-react'
// import { COUNTRY_OPTIONS } from './countriesData.js'
import {countries} from './dropdown'
import { connect } from 'react-redux'
import {filterUsers} from '../redux/actions'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false, 
            results: [], 
            value: '',
            country: '',
            filtered: []
        }
    }

    handleResultSelect = (e, { result }) => {
        let filtered = this.props.allUsers.filter(u => u.country === this.state.country)
        this.setState({ 
            value: result.text, 
            selected: result.key, 
            filtered: filtered
        })
        this.props.filterUsers(filtered)
    } 

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
        if (this.state.value.length < 1) return this.setState({isLoading: false, results: [], value: ''})

        const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
        const isMatch = result => re.test(result.text)

        this.setState({
            isLoading: false,
            results: _.filter(countries, isMatch),
        })
        }, 300)
    }

    render() {

        const { isLoading, value, results } = this.state

        return (
            <Grid>
            <Grid.Column width={6}>
                <Search
                placeholder='search users by destination'
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true,
                })}
                results={results}
                value={value}
                />
            </Grid.Column>
            <Grid.Column width={10}>
            </Grid.Column>
            </Grid>
        )
    }
}

const mapSTP = state => {
    return {allUsers: state.users}
}

const mapDTP = dispatch => {
    return {filterUsers: filtered => dispatch(filterUsers(filtered))}
}

export default connect(mapSTP, mapDTP)(SearchBar)





