import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Header, Modal, Icon } from 'semantic-ui-react'
import { languages, countries } from './dropdown'

const usersUrl = 'http://localhost:4000/api/v1/users/'

class EditProfileForm extends Component {
    
    constructor() {
        super()

        this.state = {
            first_name: '',
            last_name: '',
            bio: '',
            email: '',
            country: '',
            city: '',
            language1: '',
            language2: '',
            language3: '',
            yob: '',
            occupation: '',
            isLoading: false,
            results: [],
            value: ''
        }
    }

    // filter fields and exclude 'passConfirmation' from the final object
    filterObj(obj) {
        const newObj = {};
        Object.keys(obj).forEach(key => {
          if (key !== 'passConfirmation') {
            newObj[key] = obj[key];
          }
        });
        return newObj;
    }
    
    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e, values, user) => {
        // debugger
        e.preventDefault()
        let updates = {}
        
        // only include values that have been updated/changed
        for (let [key, value] of Object.entries(values)) {
            if (values[key] !== '') {
                updates[key] = value
            }
        }
        const filtered = this.filterObj(updates)
        this.updateUser(user, filtered)
    }
    
    // updates user profile info in the backend
    updateUser = (user, data) => {
        // debugger
        fetch(`${usersUrl}${user.user.sub.split('|')[1]}`, {
            method: 'POST',
            headers: {
            // 'Authorization': `Bearer ${localStorage.jwt}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
            body: JSON.stringify(data)
        })
        .then(resp => {
            // debugger
            resp.json()
        } )
        .then(window.location.href = "/")
    }

    handleDelete = user => {
        this.deleteUser(user)
    }

    deleteUser = user => {
        fetch(`${usersUrl}${user.id}`, {
            method: 'DELETE',
            headers: {
                // 'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.clear()
            window.location.href = "/login"
        })
    }

    render() {

        return (
            <Form 
                size='small' 
                onSubmit={(e) => this.handleSubmit(e, this.state, this.props.currentUser)}
            >   
             
            {/* PHOTO */}
                <Form.Group width={12}>
                    {/* <PicUpload /> */}
                </Form.Group>

            {/* MAIN INFO */}
                <Form.Group widths='equal'>
                    <Form.Input
                        id='first_name'
                        label='First Name' 
                        placeholder={this.props.currentUser.first_name}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input
                        id='last_name'
                        label='Last Name' 
                        placeholder={this.props.currentUser.last_name}
                        onChange={(e) => this.handleChange(e)}
                    />
                    {/* <Dropdown style={{color: 'black'}}
                        search
                        selection
                        options={years}
                        id='yob'
                        label='Year you were Born' 
                        placeholder={this.props.currentUser.yob}
                        onChange={(e) => this.handleChange(e)}
                    /> */}
                    {/* <Form.Input id='yob' label='Year you were born' onChange={(e) => this.handleChange(e)}> */}
                    <select id='yob' label='Year you were born' onChange={(e) => this.handleChange(e)} name="birth-year">
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                        <option value="1959">1959</option>
                        <option value="1958">1958</option>
                        <option value="1957">1957</option>
                        <option value="1956">1956</option>
                        <option value="1955">1955</option>
                        <option value="1954">1954</option>
                        <option value="1953">1953</option>
                        <option value="1952">1952</option>
                        <option value="1951">1951</option>
                        <option value="1950">1950</option>
                        <option value="1949">1949</option>
                        <option value="1948">1948</option>
                        <option value="1947">1947</option>
                        <option value="1946">1946</option>
                        <option value="1945">1945</option>
                        <option value="1944">1944</option>
                        <option value="1943">1943</option>
                        <option value="1942">1942</option>
                        <option value="1941">1941</option>
                        <option value="1940">1940</option>
                        <option value="1939">1939</option>
                        <option value="1938">1938</option>
                        <option value="1937">1937</option>
                        <option value="1936">1936</option>
                        <option value="1935">1935</option>
                        <option value="1934">1934</option>
                        <option value="1933">1933</option>
                        <option value="1932">1932</option>
                        <option value="1931">1931</option>
                        <option value="1930">1930</option>
                        <option value="1929">1929</option>
                        <option value="1928">1928</option>
                        <option value="1927">1927</option>
                        <option value="1926">1926</option>
                        <option value="1925">1925</option>
                        <option value="1924">1924</option>
                        <option value="1923">1923</option>
                        <option value="1922">1922</option>
                        <option value="1921">1921</option>
                        <option value="1920">1920</option>
                        <option value="1919">1919</option>
                        <option value="1918">1918</option>
                        <option value="1917">1917</option>
                        <option value="1916">1916</option>
                        <option value="1915">1915</option>
                        <option value="1914">1914</option>
                        <option value="1913">1913</option>
                        <option value="1912">1912</option>
                        <option value="1911">1911</option>
                        <option value="1910">1910</option>
                        <option value="1909">1909</option>
                        <option value="1908">1908</option>
                        <option value="1907">1907</option>
                        <option value="1906">1906</option>
                        <option value="1905">1905</option>
                    </select>

                    {/* </Form.Input> */}
                    
                </Form.Group>  
                <Form.TextArea 
                    id='bio'
                    label='Bio'
                    placeholder={this.props.currentUser.bio}
                    onChange={(e) => this.handleChange(e)}
                />

            {/* EMAIL AND PASSWORD */}
                <Form.Input
                    id='email'
                    label='Email' 
                    placeholder={this.props.currentUser.email}
                    onChange={(e) => this.handleChange(e)}
                /> 

            {/* COUNTRY */}
            <Form.Group widths='equal'>
                <Form.Dropdown
                    id='country'
                    label='Country'
                    placeholder='Country'
                    fluid
                    search
                    selection
                    options={countries}
                    onChange = {(e, { id, value }) => {
                        console.log(e)
                        this.setState({ [id]: value })}
                    } 
                />
                <Form.Input
                    id='city'
                    label='City'
                    placeholder='City'
                    onChange={(e) => this.handleChange(e)}
                />
                <Form.Input
                    id='occupation'
                    label='Occupation'
                    placeholder='Occupation'
                    onChange={(e) => this.handleChange(e)}
                />
            </Form.Group><br/>
 
            {/* LANGUAGES */}
            <Form.Group widths='equal'>
                <Form.Dropdown
                    id='language1'
                    label='Primary Language'
                    placeholder='Select your primary language'
                    fluid
                    search
                    selection
                    options={languages}
                    onChange = {(e, { id, value }) => this.setState({ [id]: value })}
                />
                <Form.Dropdown
                    id='language2'
                    label='Secondary Language'
                    placeholder='Select your secondary language'
                    fluid
                    search
                    selection
                    options={languages}
                    onChange = {(e, { id, value }) => this.setState({ [id]: value })}
                />
                <Form.Dropdown
                    id='language3'
                    label='Another Language'
                    placeholder='Wow a third language?'
                    fluid
                    search
                    selection
                    options={languages}
                    onChange = {(e, { id, value }) => this.setState({ [id]: value })}
                />
            </Form.Group>

            {/* DELETE ACCOUNT MODAL*/}
                <Button basic type='submit' content='Update'/>
                <br/><br/>
                <Modal 
                    trigger={<Header 
                                href='#'
                                size='small'
                                floated='right'
                                color='blue'
                                content='Delete Account'
                            />} 
                    size='small'
                >
                    <Header icon='archive' content='Are you sure?' />
                    <Modal.Content>
                        <p style={{color: 'teal'}}>
                            If you delete your account, everything will be permanently 
                            deleted and your account cannot be recovered. 
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' inverted onClick={() => window.location.href='/profile/edit'}>
                            <Icon name='remove' /> No
                        </Button>
                        <Button color='green' inverted onClick={() => this.handleDelete(this.props.currentUser)}>
                            <Icon name='checkmark' /> Yes
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(EditProfileForm)