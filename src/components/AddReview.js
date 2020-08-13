import React, { useState } from 'react'
import { Modal, Button, Form, Rating, Header, Icon } from 'semantic-ui-react'
import { apiBaseUrl } from '../utils/constants'

const AddReview = ({ currentUser, user }) => {

    const currentPage = window.location.pathname
    const userId = currentUser.id
    const reviewedId = user.id

    const [ rating, setRating ] = useState('')
    const [ body, setBody ] = useState('')
    const [ success, setSuccess ] = useState(false)
    const [ invalid, setInvalid ] = useState(false)  
 
    const handleChange = e => {
      setBody(e.target.value)
    }

    // it doesn't work without the "e" even though it is not used. Semantic quirk?
    const handleRate = (e, { rating }) => {
        setRating(rating)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // create a new Review instance in the backend
        if (rating) {
            fetch(`${apiBaseUrl}/api/v1/reviews`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.jwt}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    reviewed_id: reviewedId,
                    user_id: userId,
                    rating: rating,
                    body: body
                })
            })
            .then(resp => resp.json())
            setSuccess(true)
        } else {
            setInvalid(true)
        }
    }

    const addReviewModal = () => {
        return (
            <Modal 
            size='small'
            trigger={<Button >Add a Review</Button>}
            closeIcon
            >
                <Modal.Header>
                    Add a Review for: {user.username}
                </Modal.Header>

                <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.TextArea 
                            onChange={handleChange}
                        />
                        <Rating 
                            onRate={handleRate} 
                            defaultRating={1}
                            maxRating={5} 
                        />
                        <Button type='submit' content='Submit'/>
                    </Form>
                </Modal.Content> 
            </Modal>
        )
    }

    const successModal = () => {
        return (
            <Modal open={success}>
                <Header icon='checkmark' content='Your review has been submitted!' />
                <Modal.Content>
                    <p style={{color: 'teal'}}>You're all set! </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' inverted onClick={() => window.location.href=currentPage}>
                        <Icon name='checkmark' /> ok, thanks
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }

    const errorModal = () => {
        return (
            <Modal open={invalid}>
                <Header icon='frown outline' content='We were unable to submit your review!' />
                <Modal.Content>
                    <p style={{color: 'red'}}>
                    Please make sure you fill out all the fields before submitting. 
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' inverted onClick={() => window.location.href=currentPage}>
                        <Icon name='checkmark' /> ok, thanks
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }

    return (
        <>
        {addReviewModal()}
        {success && successModal()}
        {invalid && errorModal()}
        </>
    )
}

export default AddReview

