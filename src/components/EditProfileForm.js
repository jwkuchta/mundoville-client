import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Header, Modal, Icon } from 'semantic-ui-react'
import { languages, countries, years } from './dropdown'

const usersUrl = 'http://localhost:3000/api/v1/users/'

// initially wanted to use createRef, which worked with basic html
// but did not want to play nice with Semantic UI, so I used getElementById instead

class EditProfileForm extends Component {

    state = {}

    componentDidMount() {
        document.getElementById('first_name').focus()
    }

    // filter fields and exclude 'password_conf' from the final object
    filterObj(obj) {
        const newObj = {};
        Object.keys(obj).forEach(key => {
          if (key !== 'password_conf') {
            newObj[key] = obj[key];
          }
        });
        return newObj;
    }
    
    handleChange = (target) => {
        this.setState({
            [target.id]: target.value
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

        const filtered = this.filterObj(updates)
        this.updateUser(user, filtered)
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

    handleKeyUp = (e, target) => {
        // if the key is 'Enter'
        if(e.keyCode === 13) {
            switch (target) {
                case 'firstName':
                    document.getElementById('last_name').focus()
                    break
                case 'lastName':
                    // needed to use 'firstChild' as the parent is a div and was not focusing
                    document.getElementById('yob').firstChild.focus()
                    break
                case 'yob':
                    document.getElementById('bio').focus()
                    break
                case 'bio':
                    document.getElementById('email').focus()
                    break
                case 'email':
                    document.getElementById('password').focus()
                    break
                case 'password':
                    document.getElementById('password_conf').focus()
                    break
                case 'passwordConf':
                    document.getElementById('country').firstChild.focus()
                    break
                case 'country':
                    document.getElementById('city').focus()
                    break
                case 'city':
                    document.getElementById('occupation').focus()
                    break
                case 'occupation':
                    document.getElementById('language1').firstChild.focus()
                    break
                case 'language1':
                    document.getElementById('language2').firstChild.focus()
                    break
                case 'language2':
                    document.getElementById('language3').firstChild.focus()
                    break
                case 'language3':
                    document.getElementById('submit').focus()
                    break
                default:
                    document.getElementById('first_name').focus()
                    break
            }  
        }
    }

    render() {

        return (
            <>
            <Form 
                size='small' 
                // onSubmit={(e) => this.handleSubmit(e, this.state, this.props.currentUser)}
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
                        onChange={(e) => this.handleChange(e.target)}
                        onKeyUp={e => this.handleKeyUp(e, 'firstName')}

                    />
                    <Form.Input
                        id='last_name'
                        label='Last Name' 
                        placeholder={this.props.currentUser.last_name}
                        onChange={(e) => this.handleChange(e.target)}
                        onKeyUp={e => this.handleKeyUp(e, 'lastName')}
                    />
                    <Form.Dropdown
                        id='yob'
                        search
                        selection
                        options={years}
                        label='Year you were Born' 
                        placeholder={this.props.currentUser.yob && this.props.currentUser.yob}
                        onChange={(e, data) => this.handleChange(data)}
                        onKeyUp={e => this.handleKeyUp(e, 'yob')}
                        onFocus={e => e.target.size='20'}
                    />
                    {/* </Form.Input> */}
                    
                </Form.Group> 
                <Form.TextArea 
                    id='bio'
                    label='Bio'
                    placeholder={this.props.currentUser.bio}
                    onChange={(e) => this.handleChange(e.target)}
                    onKeyUp={e => this.handleKeyUp(e, 'bio')}
                />

            {/* EMAIL AND PASSWORD */}
                <Form.Input
                    id='email'
                    label='Email' 
                    placeholder={this.props.currentUser.email}
                    onChange={(e) => this.handleChange(e.target)}
                    onKeyUp={e => this.handleKeyUp(e, 'email')}
                /> 
                <Form.Group widths='equal'>
                    <Form.Input
                        id='password'
                        label='Password' 
                        placeholder='Password'
                        onChange={(e) => this.handleChange(e.target)}
                        onKeyUp={e => this.handleKeyUp(e, 'password')}
                    />
                    <Form.Input
                        id='password_conf'
                        label='Confirm Password' 
                        placeholder='Confirm Password'
                        onChange={(e) => this.handleChange(e.target)}
                        onKeyUp={e => this.handleKeyUp(e, 'passwordConf')}
                    />
                </Form.Group><br/> 

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
                    onChange = {(e, data) => this.handleChange(data)}
                    onKeyUp={e => this.handleKeyUp(e, 'country')}
                />
                <Form.Input
                    id='city'
                    label='City'
                    placeholder='City'
                    onChange={(e) => this.handleChange(e.target)}
                    onKeyUp={e => this.handleKeyUp(e, 'city')}
                />
                <Form.Input
                    id='occupation'
                    label='Occupation'
                    placeholder='Occupation'
                    onChange={(e) => this.handleChange(e.target)}
                    onKeyUp={e => this.handleKeyUp(e, 'occupation')}
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
                    onChange = {(e, data) => this.handleChange(data)}
                    onKeyUp={e => this.handleKeyUp(e, 'language1')}
                />
                <Form.Dropdown
                    id='language2'
                    label='Secondary Language'
                    placeholder='Select your secondary language'
                    fluid
                    search
                    selection
                    options={languages}
                    onChange = {(e, data) => this.handleChange(data)}
                    onKeyUp={e => this.handleKeyUp(e, 'language2')}
                />
                <Form.Dropdown
                    id='language3'
                    label='Another Language'
                    placeholder='Wow a third language?'
                    fluid
                    search
                    selection
                    options={languages}
                    onChange = {(e, data) => this.handleChange(data)}
                    onKeyUp={e => this.handleKeyUp(e, 'language3')}
                />
            </Form.Group>

            {/* the buttton was originally here, but it was submitting the form
            instead of focusing on next field on Enter so I moved it. */}
        
            <br/><br/>

            {/* DELETE ACCOUNT MODAL*/}
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

            {/* I put the button here because it kept submitting the form after each enter 
            instead of focusing on the next field like I asked it to nicely */}

             <Button 
                basic 
                id='submit' 
                type='submit' 
                content='Update'
                onKeyUp={(e) => this.handleSubmit(e, this.state, this.props.currentUser)}
                onClick={(e) => this.handleSubmit(e, this.state, this.props.currentUser)}
            />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(EditProfileForm)

