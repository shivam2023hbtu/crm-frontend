import React from 'react'
import PropTypes from 'prop-types'
import {Container,Row,Col,Form, Button} from 'react-bootstrap'
export const ResetForm = ({handleOnChange,handleOnResetSubmit,formSwitcher,email}) => {
  return (
    <div>
      <Container>
        <Row>
            <Col>
            <h1>Reset Password</h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    type='email'
                    name='email'
                    
                    value={email}
                    onChange={handleOnChange}
                    placeholder='Enter Email'
                    required
                    />
                </Form.Group>
                
                <hr />
                <Button type='submit'>Request Password</Button>
                
            </Form>
            </Col>
        </Row>
        
        <a href="#!" onClick={()=>formSwitcher('login')} style={{ lineHeight: '2.5' }}>Go Back To Login</a>
      </Container>
    </div>
  )
}

ResetForm.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnResetSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired
    
}
