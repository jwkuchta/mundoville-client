import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import { countries } from './dropdown'

const usersUrl = 'http://localhost:3000/api/v1/users/'

class EditProfileForm extends Component {

    state = {}
    user = this.props.currentUser

    handleChange = (target) => {
        this.setState({
            [target.id]: target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let updates = {}
        let values = this.state
        
        for (let [key, value] of Object.entries(values)) {
            if (key === 'yob') {
                if (values[key] !== parseInt(this.props.currentUser.yob) && values[key] !== this.currentYear) {
                    updates[key] = value
                }
            }
            else if (values[key] !== '') {
                updates[key] = value
            }
        }

        const filtered = this.filterObj(updates)
        this.updateUser(this.user, filtered)
    }

    filterObj(obj) {
        const newObj = {};
        Object.keys(obj).forEach(key => {
          if (key !== 'password_conf') {
            newObj[key] = obj[key];
          }
        });
        return newObj;
    }
    
    // updates user profile info in the backend
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
        .then(window.location.reload())
    }

    render() {

        return (
            <Form 
                size='small' 
                onSubmit={this.handleSubmit}
            >   

            {/* FIRST NAME, LAST NAME */}

                <Form.Group widths='equal'>
                    <Form.Input
                        id='first_name'
                        label='First Name'
                        placeholder='Enter your first name'
                        onChange={(e) => this.handleChange(e.target)}
                    />
                    <Form.Input
                        id='last_name'
                        label='Last Name' 
                        placeholder='Enter your last name'
                        onChange={(e) => this.handleChange(e.target)}
                    />
                </Form.Group>  
                
            {/* BIO */}

                <Form.TextArea 
                    id='bio'
                    label='Bio'
                    placeholder='Tell us a little about yourself'
                    onChange={(e) => this.handleChange(e.target)}
                />

            {/* COUNTRY, CITY */}
                <Form.Group widths='equal'>
                    <Form.Dropdown
                        id='country'
                        label='Country'
                        placeholder='Country where you live'
                        fluid
                        search
                        selection
                        options={countries}
                        onChange = {(e, data) => this.handleChange(data)}
                    />
                    <Form.Input
                        id='city'
                        label='City'
                        placeholder='City where you live'
                        onChange={(e) => this.handleChange(e.target)}
                    />
                </Form.Group><br/>
                <Button 
                basic 
                id='submit' 
                type='submit' 
                content='Update'
            />
            </Form>
        )
    }
}

const mapSTP = state => {
    return {currentUser: state.currentUser}
}

export default connect(mapSTP)(EditProfileForm)

// ******** WITH REFS ******** //

import React, { Component, createRef } from 'react'
// *** NEW *** => import createRef
import { connect } from 'react-redux'
import { Form, Button, Icon, Header, Modal, Ref } from 'semantic-ui-react'
// *** NEW *** => import Ref from 'semantic-ui-react'
import { countries } from './dropdown'

const usersUrl = 'http://localhost:3000/api/v1/users/'

class EditProfileForm extends Component {

    state = {}
    user = this.props.currentUser
    
    // *** NEW *** //
    // create one Ref per Input section and the Submit Button
    firstNameRef = createRef()
    lastNameRef = createRef()
    bioRef = createRef()
    countryRef = createRef()
    cityRef = createRef()
    submitRef = createRef()
    myRef = createRef()

    // *** NEW *** //
    // when component mounts, the cursor is moved to the first field on the form
    componentDidMount() {
        this.firstNameRef.current.lastChild.firstChild.focus()
    }

    handleChange = (target) => {
        this.setState({
            [target.id]: target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let updates = {}
        let values = this.state
        
        for (let [key, value] of Object.entries(values)) {
            if (key === 'yob') {
                if (values[key] !== parseInt(this.props.currentUser.yob) && values[key] !== this.currentYear) {
                    updates[key] = value
                }
            }
            else if (values[key] !== '') {
                updates[key] = value
            }
        }

        const filtered = this.filterObj(updates)
        this.updateUser(this.user, filtered)
        this.setState({open: true})
    }

    filterObj(obj) {
        const newObj = {};
        Object.keys(obj).forEach(key => {
          if (key !== 'password_conf') {
            newObj[key] = obj[key];
          }
        });
        return newObj;
    }
    
    // updates user profile info in the backend
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
        .then(this.setState({open: true}))
    }

    // *** NEW *** //
    handleKeyUp = (e, target) => {
        // if the key is 'Enter'
        if(e.keyCode === 13) {
            switch (target) {
                case 'firstName':
                    this.lastNameRef.current.lastChild.firstChild.focus()
                    break
                case 'lastName':
                    this.bioRef.current.lastChild.focus()
                    break
                case 'bio':
                    this.countryRef.current.lastChild.firstChild.focus()
                    break
                case 'country':
                    this.cityRef.current.lastChild.firstChild.focus()
                    break
                case 'city':
                    this.submitRef.current.focus()
                    break
                default:
                    this.firstNameRef.current.lastChild.firstChild.focus()
                    break
            }  
        }
    }

    render() {
        debugger

        return (
            <>
            <Form size='small' >   

            {/* FIRST NAME, LAST NAME */}
            {/* NEW => Wrap each Form subcomponent in a Ref component */}

                <Form.Group widths='equal'>
                    <Ref innerRef={this.firstNameRef}>
                        {/* NEW => add innerRef property pointing to the previously created Ref */}
                    <Form.Input
                        ref={this.myRef}
                        id='first_name'
                        label='First Name'
                        placeholder='Enter your first name'
                        onChange={(e) => this.handleChange(e.target)}
                        // *** NEW *** add 'onKeyUp' and pass it the input name
                        onKeyUp={e => this.handleKeyUp(e, 'firstName')}
                    />
                    </Ref>
                    
                    <Ref innerRef={this.lastNameRef}>
                    <Form.Input
                        id='last_name'
                        label='Last Name' 
                        placeholder='Enter your last name'
                        onChange={(e) => this.handleChange(e.target)}
                        onKeyUp={e => this.handleKeyUp(e, 'lastName')}
                    />
                    </Ref>
                    
                </Form.Group>  
                
            {/* BIO */}

            <Ref innerRef={this.bioRef}>
            <Form.TextArea 
                    id='bio'
                    label='Bio'
                    placeholder='Tell us a little about yourself'
                    onChange={(e) => this.handleChange(e.target)}
                    onKeyUp={e => this.handleKeyUp(e, 'bio')}
                />
            </Ref>
                
            {/* COUNTRY, CITY */}
                <Form.Group widths='equal'>
                    <Ref innerRef={this.countryRef}>
                    <Form.Dropdown
                        id='country'
                        label='Country'
                        placeholder='Country where you live'
                        fluid
                        search
                        selection
                        options={countries}
                        onChange = {(e, data) => this.handleChange(data)}
                        onKeyUp={e => this.handleKeyUp(e, 'country')}
                    />
                    </Ref>
                    
                    <Ref innerRef={this.cityRef}>
                    <Form.Input
                        id='city'
                        label='City'
                        placeholder='City where you live'
                        onChange={(e) => this.handleChange(e.target)}
                        onKeyUp={e => this.handleKeyUp(e, 'city')}
                    />
                    </Ref>
                    
                </Form.Group><br/>
            </Form>

            {/* // you will notice I moved the button outside the form
            // and then wrapped everything in a Fragment <> </> */}

            <Ref innerRef={this.submitRef}>
            <Button 
            basic 
            id='submit' 
            type='submit' 
            content='Update'
            onKeyUp={this.handleSubmit}
            onClick={this.handleSubmit}
            />
            </Ref>

            {/* I added a Modal to replace the less attractive alert */}
            <Modal open={this.state.open}
            >
                <Header icon='archive' content='Your profile has been updated!' />
                    <Modal.Content>
                        <p style={{color: 'teal'}}>
                            You're all set! 
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' inverted onClick={() => window.location.href='/profile'}>
                            <Icon name='checkmark' /> ok, thanks
                        </Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

const mapSTP = state => {
    return {currentUser: state.currentUser}
}

export default connect(mapSTP)(EditProfileForm)