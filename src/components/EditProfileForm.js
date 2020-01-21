import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Form, Button, Header, Modal, Icon} from 'semantic-ui-react'
// import PictureUpload from './PictureUpload'
// import PicUpload from './PicUpload'
// import LanguageForm from './LanguageForm'
// import DropdownExample from './DropdownExample'
import {languageOptions1, languageOptions2, countryList} from './dropdown'
// import _ from 'lodash'
// import { COUNTRY_OPTIONS } from './countriesData.js';

const usersUrl = 'http://localhost:3000/api/v1/users/'

class EditProfileForm extends Component {
    
    constructor() {
        super()

        this.state = {
            first_name: '',
            last_name: '',
            bio: '',
            email: '',
            password: '',
            passConfirmation: '',
            country: '',
            city: '',
            language1: '',
            language2: '',
            language3: '',
            isLoading: false,
            results: [],
            value: ''
        }
    }

    filterObj(obj, entry) {
        const newObj = {};
        Object.keys(obj).forEach(key => {
          if (key !== entry) {
            newObj[key] = obj[key];
          }
        });
        return newObj;
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e, values, user) => {
        e.preventDefault()
        let updates = {}
        
        for (let [key, value] of Object.entries(values)) {
            if (values[key] !== '') {
                updates[key] = value
            }
        }

        if (updates.password === updates.passConfirmation) {
            const filtered = this.filterObj(updates, 'passConfirmation')
            this.updateUser(user, filtered)
        } else {
            alert("Something went wrong")
        }
    }

    updateUser = (user, data) => {
        fetch(`${usersUrl}${user.id}`, {
            method: 'PATCH',
            headers: {
            'Authorization': `Bearer ${localStorage.jwt}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(window.location.href = "/profile")
    }

    handleDelete = user => {
        this.deleteUser(user)
    }

    deleteUser = user => {
        fetch(`${usersUrl}${user.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.jwt}`,
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

    handleClick = e => {
        console.log(e.target)
    }

    render() {

        return (
            <Form 
                size='small' 
                // onChange={(e) => this.handleChange(e)}
                onSubmit={(e) => this.handleSubmit(e, this.state, this.props.currentUser)}
            >    
            {/* PHOTO */}

                <Form.Group width={12}>
                    {/* <PicUpload /> */}
                    {/* <PictureUpload currentUser={this.props.currentUser} /><br/> */}
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
                <Form.Group widths='equal'>
                    <Form.Input
                        id='password'
                        label='Password' 
                        placeholder='Password'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input
                        id='passConfirmation'
                        label='Confirm Password' 
                        placeholder='Confirm Password'
                        onChange={(e) => this.handleChange(e)}
                    />
                </Form.Group><br/> 

            {/* COUNTRY */}
            {/* put it in DropdownExample cause it was not working */}
 
            <Form.Group widths='equal'>
                <Form.Dropdown
                    id='country'
                    label='Country'
                    placeholder='Country'
                    fluid
                    selection
                    options={countryList}
                    onChange = {(e, { id, value }) => this.setState({ [id]: value })}
                />
                <Form.Input
                    id='city'
                    label='City'
                    placeholder='City'
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
                    selection
                    options={languageOptions1}
                    onChange = {(e, { id, value }) => this.setState({ [id]: value })}
                />
                <Form.Dropdown
                    id='language2'
                    label='Secondary Language'
                    placeholder='Select your secondary language'
                    fluid
                    selection
                    options={languageOptions1}
                    onChange = {(e, { id, value }) => this.setState({ [id]: value })}
                />
                <Form.Dropdown
                    id='language3'
                    label='Another Language'
                    placeholder='Wow a third language?'
                    fluid
                    selection
                    options={languageOptions2}
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
                        <p style={{color: 'cyan'}}>
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