import React from 'react'
import PropTypes from 'prop-types'
import { Form,Button } from 'react-bootstrap'

export const UpdateTicket = ({handleOnChange,handleOnSubmit,msgg}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label >Reply</Form.Label>
        <Form.Control
        as="textarea"
        row="5"
        value={msgg}
        onChange={handleOnChange}
        name="detail" 
        />
         <div className='text-right mt-3 mb-3'>
        <Button variant="dark" type="submit" className="text-right">Reply</Button> {/* Added "className" */}
      </div>
        

        
    </Form>
  )
}
UpdateTicket.prototype={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
   msgg :PropTypes.string.isRequired
}


