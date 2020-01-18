import React, {Component} from 'react'
import {Form, Grid, Header, Segment, Button, Message} from 'semantic-ui-react'

class LanguageForm extends Component {
    state = {values: ''}

    render() {

        const { value } = this.state;

        const languageList = 
        <datalist id='languages'>
        <option value='English'/>
        <option value='Spanish'/>
        <option value='French'/>
        <option value='German'/>
        <option value='Chinese'/>
        <option value='Portugese'/>
        </datalist>

        const dropdown = () => {}

        return(
            <>
            {/* <Form.Group widths='equal'>
                    <Form.Input
                        id='mainLanguage'
                        label='Main Language' 
                        placeholder='Main language'
                        options={languageList} 
                    />
                    <Form.Input required
                        id='secondLanguage'
                        label='Second Language' 
                        placeholder='Another language I know'
                    />
                    <Form.Input required list='languages'
                        id='thirdLanguage'
                        label='Third Language' 
                        placeholder='I am awesome, and I can speak a third language'  
                    />
            </Form.Group><br/> */}

            <Grid centered columns='equal'>
                <Grid.Row>
                <Grid.Column>
                <Header as="h2" textAlign="center">
                    More Info
                </Header>
                <Segment>
                    <Form size="large">
                    <Form.Input
                        id='mainLanguage'
                        label='Main Language' 
                        placeholder='Main language'
                        options={languageList} 
                    />
                    <Form.Input required
                        id='secondLanguage'
                        label='Second Language' 
                        placeholder='Another language I know'
                    />
                    <Form.Input required list='languages'
                        id='thirdLanguage'
                        label='Third Language' 
                        placeholder='I am awesome, and I can speak a third language'  
                    />
                    <Button color="blue" fluid size="large">
                        Login
                    </Button>
                    </Form>
                </Segment>
                <Message>
                    Not registered yet? <a href="#">Sign Up</a>
                </Message>
                </Grid.Column>
                </Grid.Row>
                
            </Grid>
        </>
        )
    }
}

export default LanguageForm