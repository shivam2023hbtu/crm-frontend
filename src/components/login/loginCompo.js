import React from 'react'
import PropTypes from 'prop-types'
import {Container,Row,Col,Form, Button} from 'react-bootstrap'
export const LoginForm = ({handleOnChange,handleOnSubmit,formSwitcher,email,pass}) => {
  return (
    <div>
      <Container>
        <Row>
            <Col>
            <h1>Client Login</h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
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
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type='password'
                    name='password'
                    
                    value={pass}
                    onChange={handleOnChange}
                    placeholder='Enter password'
                    required
                    />
                </Form.Group>
                <hr />
                <Button type='submit'>Login</Button>
                
            </Form>
            </Col>
        </Row>
        
        <a href="#!" onClick={()=>formSwitcher('reset')} style={{ lineHeight: '2.5' }}>Forget Password</a>
      </Container>
    </div>
  )
}

LoginForm.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    pass:PropTypes.string.isRequired
}
