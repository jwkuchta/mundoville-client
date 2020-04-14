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