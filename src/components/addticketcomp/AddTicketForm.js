import React from 'react'
import PropTypes from 'prop-types'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import './add-ticket.css'
export const AddTicketForm = ({handleOnChange,handleOnSubmit,frmData}) => {
  return (
   <Container className='add-new-ticket bg-light mt-5'>
    <Row>
        <Col> 
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row} className="mb-3 mt-3" >
        <Form.Label column sm={3}>
          Subject 
        </Form.Label>
        <Col sm={9}>
          <Form.Control
          
          name='Subject'
          value={frmData.Subject}
          maxLength="100"
          onChange={handleOnChange}
          placeholder="Enter Ticket Heading"
          required
          />
        </Col>
      </Form.Group>
       
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm={3}>
          IssueFound
        </Form.Label>
        <Col sm={9}>
          <Form.Control 
          type="date"
          name='IssueDate'
          value={frmData.IssueDate}
          placeholder="Date"
          onChange={handleOnChange}
          required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 " >
        <Form.Label column sm={3}>Details</Form.Label>
        <Col sm={9}>
          <Form.Control
           as="textarea"
           name='Detail'
           value={frmData.Detail}
           placeholder="Ticket Details "
           rows="5"
           onChange={handleOnChange}
           required
         />
        </Col>
      </Form.Group>

      <Button type='submit'variant='dark mb-3' >
        Open Ticket
      </Button>

        </Form>
        </Col>
    </Row>
   </Container>
  )
}

AddTicketForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    frmData: PropTypes.object.isRequired,
}


