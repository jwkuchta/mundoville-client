import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Header, Modal, Icon } from 'semantic-ui-react'
import PicUpload from './PicUpload'

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
            passConfirmation: ''
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

    render() {

        return (
            <Form 
                size='small' 
                onChange={(e) => this.handleChange(e)}
                onSubmit={(e) => this.handleSubmit(e, this.state, this.props.currentUser)}
            >                
                <Form.Group width={16}>
                    <PicUpload currentUser={this.props.currentUser} /><br/>
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input
                        id='first_name'
                        label='First Name' 
                        placeholder={this.props.currentUser.first_name}
                    />
                    <Form.Input
                        id='last_name'
                        label='Last Name' 
                        placeholder={this.props.currentUser.last_name}
                    />
                </Form.Group>  

                <Form.TextArea 
                    id='bio'
                    label='Bio'
                    placeholder={this.props.currentUser.bio}
                />

                <Form.Input
                    id='email'
                    label='Email' 
                    placeholder={this.props.currentUser.email}
                /> 

                <Form.Group widths='equal'>
                    <Form.Input
                        id='password'
                        label='Password' 
                        placeholder='Password'
                    />
                    <Form.Input
                        id='passConfirmation'
                        label='Confirm Password' 
                        placeholder='Confirm Password'
                    />
                </Form.Group><br/>    
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
                        <p style={{color: 'black'}}>
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
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(EditProfileForm)