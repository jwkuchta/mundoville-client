import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Segment, Header } from 'semantic-ui-react'
import { countries } from './dropdown'
import { connect } from 'react-redux'
import {setCountry} from '../redux/actions'
// import faker from 'faker'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false, 
            results: [], 
            value: '',
            filtered: [],
            selected: ''
        }
    }

    display = country => {
        return (
            <div>
                <i className={country.flag + " flag"} ></i>
                {country.text}
                
            </div>
        )
    }

    handleResultSelect = (e, { result }) => {
        this.props.setCountry(result.key)
        this.setState({ 
            value: '', 
            selected: '', 
            filtered: [],
        })
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

        // debugger
        console.log(this.state.results)

        const { isLoading, value, results } = this.state

        return (
            <Grid>
            <Grid.Column width={15}>
                <h4>Search users by destination</h4>
                <Search
                fluid
                placeholder='Country'
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true,
                })}
                results={results}
                resultRenderer={this.display}
                value={value}
                />
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
            </Grid>
        )
    }
}

const mapSTP = state => {
    return {allUsers: state.users}
}

const mapDTP = dispatch => {
    return {
        setCountry: country => dispatch(setCountry(country) )
    }
}

export default connect(mapSTP, mapDTP)(SearchBar)




