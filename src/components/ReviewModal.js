import React, { Component } from 'react'
import { Modal, Button, Form, Rating } from 'semantic-ui-react'

class AddReviewModal extends Component {
    
    constructor() {
        super()

        this.state = {
            rating: '',
            body: '',
            userId: '',
            reviewedId: ''
        }
    }

    handleChange = e => {
        this.setState({
            content: e.target.value
        })
    }

    handleRate = (e, { rating }) => {
        let userId = this.props.currentUser.id
        let reviewedId = this.props.user.id

        this.setState({
            rating: rating,
            userId: userId,
            reviewedId: reviewedId
        })
    }

    handleSubmit = (e, values) => {
        e.preventDefault()

        let reviewObj = {
            reviewedId: values.reviewedId,
            userId: values.userId,
            rating: values.rating,
            content: values.content
        }

        if (this.state.rating) {
            fetch('http://localhost:3000/api/v1/reviews', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.jwt}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({reviewObj})
            })
            .then(resp => resp.json())
            .then(() => window.location.reload())
        } else {
            alert('Rating invalid')
        }
    }

    render() {
        return (
            <Modal 
                size='small'
                trigger={<Button >Add a Review</Button>}
                closeIcon
            >
                <Modal.Header>
                    Add a Review for: {this.props.user.username}
                </Modal.Header>
                <Modal.Content>
                    <Form onSubmit={e => this.handleSubmit(e, this.state)}>
                        <Form.TextArea 
                            onChange={e => this.handleChange(e)}
                        />
                        <Rating 
                            onRate={this.handleRate} 
                            defaultRating={1}
                            maxRating={5} 
                        />
                        <Button type='submit' content='Submit'/>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default AddReviewModal