import React from "react"
import { Modal, Button, Form } from "react-bootstrap"
const Enquiry = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enquiry Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form method="POST">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div className="float-right">
            <Button className="mr-3" variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="danger" onClick={props.onHide}>
              Close
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default Enquiry
