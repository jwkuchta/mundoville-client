import React from 'react'
import { Grid, Search, Dropdown, Segment } from 'semantic-ui-react'

const languageOptions1 = [
    {key: 'English', text: 'English', value: 'English' },
    {key: 'Spanish', text: 'Spanish', value: 'Spanish' },
    {key: 'German', text: 'German', value: 'German' },
    {key: 'French', text: 'French', value: 'French' },
]

const languageOptions2 = [
    {key: 'English', text: 'English', value: 'English' },
    {key: 'Spanish', text: 'Spanish', value: 'Spanish' },
    {key: 'German', text: 'German', value: 'German' },
    {key: 'French', text: 'French', value: 'French' },
    {key: 'Other', text: 'Other', value: 'Other'}
]

const DropdownExampleSelection = () => {


    handleResultSelect = (e, { result }) => this.setState({ value: result['text'] })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
        if (this.state.value.length < 1) return this.setState({value: '', isLoading: true, results: ''})

        const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
        const isMatch = (result) => re.test(result['text'])

        this.setState({
            isLoading: false,
            results: _.filter(countries, isMatch),
        })
        }, 300)
    }
    
    return(
        <>
        <Form.Group width='equal'>
        <Dropdown
                placeholder='Select your primary language'
                fluid
                selection

                options={languageOptions1}
                handleChange = {(e, { name, value }) => this.setState({ [name]: value })}
            />
            <Dropdown
                placeholder='Select your secondary language'
                fluid
                selection
                options={languageOptions1}
            />
            <Dropdown
                placeholder='Wow a third language?'
                fluid
                selection
                options={languageOptions2}
            />
        </Form.Group>

        <Grid>
            <Grid.Column width={6}>
                <Search
                    loading={this.state.isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true,
                    })}
                    results={this.state.results}
                    value={this.state.value}
                    {...this.props}
                />
            </Grid.Column>
                <Grid.Column width={10}>
                    <Segment>
                        <Header>State</Header>
                        <pre style={{ overflowX: 'auto' }}>
                        {JSON.stringify(this.state, null, 2)}
                        </pre>
                        <Header>Options</Header>
                        <pre style={{ overflowX: 'auto' }}>
                        {JSON.stringify(countries, null, 2)}
                        </pre>
                    </Segment>
                </Grid.Column>
            </Grid>

            <Grid>
                <Grid.Column width={10}>
                    <Search
                        label="Country"
                        placeholder="Country"
                        loading={this.state.isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, {
                        leading: true,
                        })}
                        results={this.state.results}
                        value={this.state.value}
                        {...this.props}
                    />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Segment>
                        <Header>State</Header>
                        <pre style={{ overflowX: 'auto' }}>
                        {JSON.stringify(this.state, null, 2)}
                        </pre>
                        <Header>Options</Header>
                        <pre style={{ overflowX: 'auto' }}>
                        {JSON.stringify(countries, null, 2)}
                        </pre>
                    </Segment>
                </Grid.Column>
            </Grid>

            <Grid columns='equal'>
                <Grid.Column>
                    <Search
                        label="Country"
                        placeholder="Country"
                        loading={this.state.isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, {
                        leading: true,
                        })}
                        results={this.state.results}
                        value={this.state.value}
                        {...this.props}
                        />
                </Grid.Column>
                <Grid.Column>
                    <Form.Input
                        id='city'
                        // label='City' 
                        placeholder='City'
                        onChange = {(e, { name, value }) => this.setState({ [name]: value })}
                    />
                    </Grid.Column>
            </Grid>
                


            {/* DROPDOWN WAS NOT CAPTURING VALUES CORRECTLY */}

            <h4>Tell us about your language skills</h4>
                <Form.Group width='equal'>  
                    <Dropdown
                        id='language1'
                        value={this.state.language1}
                        placeholder='Select your primary language'
                        fluid
                        selection
                        options={languageOptions1}
                        onChange={e => this.setState({language1: e.target.value})}
                    />
                    <Dropdown                        
                        id='language2'
                        value={this.state.language2}
                        placeholder='Select your secondary language'
                        fluid
                        selection
                        options={languageOptions1}
                        onChange={e => this.setState({language2: e.target.value})}
                    />
                    <Dropdown
                        id='language3'
                        value={this.state.language3}
                        placeholder='Wow a third language?'
                        fluid
                        selection
                        options={languageOptions2}
                        onChange={e => console.log(e)}
                    />
                </Form.Group>
        </>
    )
}

export default DropdownExampleSelection
