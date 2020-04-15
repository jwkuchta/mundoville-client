import React, { useState } from 'react'
import { Modal, Button, Form, Rating, Header, Icon } from 'semantic-ui-react'

const AddReview = (props) => {

    const currentPage = window.location.pathname

    const [ rating, setRating ] = useState('')
    const [ body, setBody ] = useState('')
    const [ success, setSuccess ] = useState(false)
    const [ invalid, setInvalid ] = useState(false)

    const userId = props.currentUser.id
    const reviewedId = props.user.id
    
 
    const handleChange = e => {
      setBody(e.target.value)
    }

    const handleRate = (e, { rating }) => {
        setRating(rating)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // create a new Review instance in the backend
        if (rating) {
            fetch('http://localhost:3000/api/v1/reviews', {
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
            .then(() => window.location.reload())
            // change alert to a modal when time permits
            setSuccess(true)
        } else {
            setInvalid(true)
        }
    }

    return (
        <>
        <Modal 
            size='small'
            trigger={<Button >Add a Review</Button>}
            closeIcon
        >
            <Modal.Header>
                Add a Review for: {props.user.username}
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

        <Modal open={success}>
        <Header icon='archive' content='Your review has been submitted!' />
            <Modal.Content>
                <p style={{color: 'teal'}}>
                    You're all set! 
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' inverted onClick={() => window.location.href=currentPage}>
                    <Icon name='checkmark' /> ok, thanks
                </Button>
            </Modal.Actions>
        </Modal>

        <Modal open={invalid}>
        <Header icon='archive' content='We were unable to submit your review!' />
            <Modal.Content>
                <p style={{color: 'teal'}}>
                    Sorry about that! Please try again later. 
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' inverted onClick={() => window.location.href=currentPage}>
                    <Icon name='checkmark' /> ok, thanks
                </Button>
            </Modal.Actions>
        </Modal>
        </>
    )
}

export default AddReview