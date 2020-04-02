import _ from 'lodash'
import React, { useState } from 'react'
import { Search, Grid, Header, Icon } from 'semantic-ui-react'
import { countries } from './dropdown'
import { connect } from 'react-redux'
import { setCountry } from '../redux/actions'

const SearchBar = props => {

    const [ isLoading, setLoading ] = useState(false)
    const [ results, setResults ] = useState([])
    const [ value, setValue ] = useState('')

    let display = country => {
        return (
            <div>
                <i className={country.flag + " flag"} ></i>{country.text}   
            </div>
        )
    }

    const handleResultSelect = (e, { result }) => {
        props.setCountry(result.value)
    } 

    const handleSearchChange = (e, { value }) => {
        setLoading(true)
        setValue(value)

        setTimeout(() => {
            if (value.length < 1) {
                setLoading(true)
                setResults([])
                setValue('')
            }
            const re = new RegExp(_.escapeRegExp(value), 'i')
            const isMatch = result => re.test(result.text)

            setLoading(false)
            setResults(_.filter(countries, isMatch))
        }, 300)
    }

    return (
        <div>
            <br></br><br></br>
            <Grid style={{"background-color": "#2C8EA7"}}><br></br>
                <Grid.Column width={15}>
                    <Grid.Row></Grid.Row>
                        <Header icon>
                            <Icon inverted name='search' />
                        </Header>
                        <br></br>
                        <h2 style={{'color': 'white'}}>Search users by destination</h2>
                        <br></br>
                        <Search
                        fluid
                        placeholder='Country'
                        loading={isLoading}
                        onResultSelect={handleResultSelect}
                        onSearchChange={_.debounce(handleSearchChange, 500, {
                            leading: true,
                        })}
                        results={results}
                        resultRenderer={display}
                        value={value}
                        />
                        <br></br>
                    </Grid.Column>
                <Grid.Column width={1}>
                </Grid.Column>
            </Grid>
        <br></br><br></br>
        </div>
    )
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

