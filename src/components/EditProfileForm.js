import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Header, Modal, Icon, Ref } from 'semantic-ui-react'
import { languages, countries, years } from './dropdown'
// import Ref from '@bit/semantic-org.semantic-ui-react.ref'
import Moment from 'react-moment'

const usersUrl = 'http://localhost:3000/api/v1/users/'

class EditProfileForm extends Component {

    currentYear = new Date().getFullYear()

    firstNameRef = createRef()
    lastNameRef = createRef()
    yobRef = createRef()
    bioRef = createRef()
    emailRef = createRef()
    passRef = createRef()
    passConfRef = createRef()
    countryRef = createRef()
    cityRef = createRef()
    occupationRef = createRef()
    lang1Ref = createRef()
    lang2Ref = createRef()
    lang3Ref = createRef()
    submitRef = createRef()
    divRef = createRef()

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
        debugger
        e.preventDefault()
        let updates = {}
        
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
        // debugger
        // if the key is 'Enter'
        if(e.keyCode === 13) {
            switch (target) {
                case 'firstName':
                    this.lastNameRef.current.lastChild.firstChild.focus()
                    break
                case 'lastName':
                    this.yobRef.current.lastChild.firstChild.focus()
                    break
                case 'yob':
                    this.bioRef.current.lastChild.focus()
                    break
                case 'bio':
                    this.emailRef.current.lastChild.firstChild.focus()
                    break
                case 'email':
                    this.passRef.current.lastChild.firstChild.focus()
                    break
                case 'password':
                    this.passConfRef.current.lastChild.firstChild.focus()
                    break
                case 'passwordConf':
                    this.countryRef.current.lastChild.firstChild.focus()
                    break
                case 'country':
                    this.cityRef.current.lastChild.firstChild.focus()
                    break
                case 'city':
                    this.occupationRef.current.lastChild.firstChild.focus()
                    break
                case 'occupation':
                    this.lang1Ref.current.lastChild.firstChild.focus()
                    break
                case 'language1':
                    this.lang2Ref.current.lastChild.firstChild.focus()
                    break
                case 'language2':
                    this.lang3Ref.current.lastChild.firstChild.focus()
                    break
                case 'language3':
                    this.submitRef.current.focus()
                    break
                default:
                    this.firstNameRef.current.lastChild.firstChild.focus()
                    break
            }  
        }
    }

    render() {
        // debugger

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
                    <Ref innerRef={this.firstNameRef}>
                    <Form.Input
                        id='first_name'
                        label='First Name' 
                        placeholder={this.props.currentUser.first_name}
                        onChange={(e) => this.handleChange(e.target)}
                        onKeyUp={e => this.handleKeyUp(e, 'firstName')}

                    />
                    </Ref>
                    
                    <Ref innerRef={this.lastNameRef}>
                    <Form.Input
                        id='last_name'
                        label='Last Name' 
                        placeholder={this.props.currentUser.last_name}
                        onChange={(e) => this.handleChange(e.target)}
                        onKeyUp={e => this.handleKeyUp(e, 'lastName')}
                    />
                    </Ref>
                    
                    <Ref innerRef={this.yobRef}>
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
                    </Ref>
                    
                    {/* </Form.Input> */}
                    
                </Form.Group>
                <Ref innerRef={this.bioRef}>
                <Form.TextArea 
                    id='bio'
                    label='Bio'
                    placeholder={this.props.currentUser.bio}
                    onChange={(e) => this.handleChange(e.target)}
                    onKeyUp={e => this.handleKeyUp(e, 'bio')}
                />
                </Ref>    

            {/* EMAIL AND PASSWORD */}
                <Ref innerRef={this.emailRef}>
                <Form.Input
                    id='email'
                    label='Email' 
                    placeholder={this.props.currentUser.email}
                    onChange={(e) => this.handleChange(e.target)}
                    onKeyUp={e => this.handleKeyUp(e, 'email')}
                /> 
                </Ref>
                
                <Form.Group widths='equal'>
                    <Ref innerRef={this.passRef}>
                    <Form.Input
                        id='password'
                        label='Password' 
                        placeholder='Password'
                        onChange={(e) => this.handleChange(e.target)}
                        onKeyUp={e => this.handleKeyUp(e, 'password')}
                    />
                    </Ref>
                    
                    <Ref innerRef={this.passConfRef}>
                    <Form.Input
                        id='password_conf'
                        label='Confirm Password' 
                        placeholder='Confirm Password'
                        onChange={(e) => this.handleChange(e.target)}
                        onKeyUp={e => this.handleKeyUp(e, 'passwordConf')}
                    />
                    </Ref>    
                </Form.Group><br/> 

            {/* COUNTRY */}
            <Form.Group widths='equal'>
                <Ref innerRef={this.countryRef}>
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
                </Ref>
                
                <Ref innerRef={this.cityRef}>
                <Form.Input
                    id='city'
                    label='City'
                    placeholder='City'
                    onChange={(e) => this.handleChange(e.target)}
                    onKeyUp={e => this.handleKeyUp(e, 'city')}
                />
                </Ref>
                
                <Ref innerRef={this.occupationRef}>
                <Form.Input
                    id='occupation'
                    label='Occupation'
                    placeholder='Occupation'
                    onChange={(e) => this.handleChange(e.target)}
                    onKeyUp={e => this.handleKeyUp(e, 'occupation')}
                />
                </Ref>
                
            </Form.Group><br/>
 
            {/* LANGUAGES */}
            <Form.Group widths='equal'>

                <Ref innerRef={this.lang1Ref}>
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
                </Ref>
                
                <Ref innerRef={this.lang2Ref}>
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
                </Ref>
                
                <Ref innerRef={this.lang3Ref}>
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
                </Ref>
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
            <Ref innerRef={this.submitRef}>
            <Button 
                basic 
                id='submit' 
                type='submit' 
                content='Update'
                onKeyUp={(e) => this.handleSubmit(e, this.state, this.props.currentUser)}
                onClick={(e) => this.handleSubmit(e, this.state, this.props.currentUser)}
            />
            </Ref>   
            </>
        )
    }
}

const mapStateToProps = state => {
    return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(EditProfileForm)

