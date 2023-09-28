import React from 'react'
import PropTypes from 'prop-types'
import { Form, FormControl, FormGroup, FormLabel,Row,Col } from 'react-bootstrap'
export const SearchForm = ({handleOnChange,Str}) => {
    
  return (
    <div>
      <Form className='mt-3'>
        <FormGroup as={Row}>
        <FormLabel column sm="2" >Search:{" "}</FormLabel>    
        <Col sm="9" >
        <FormControl 
        name='searchStr'
        onChange={handleOnChange}
        value={Str}
        placeholder='Search Ticket Here'
         />   
        </Col>   
        </FormGroup>
      </Form>    
    </div>
  )
}

SearchForm.prototype={
    handleOnChange: PropTypes.func.isRequired,
    Str: PropTypes.string.isRequired
}