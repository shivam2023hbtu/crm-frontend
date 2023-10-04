import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import {TicketTable} from '../../components/ticket-table/TicketTable'
import tickets from '../../../src/assests/data/data.json'
import {Link} from 'react-router-dom'

export const Dashboard = () => {
  return (
    <Container>
        <Row>
          <Col className='text-center mt-3 mb-2'>
            <Link to="/add-ticket">
            <Button variant='dark' style={{fontSize:"2rem","padding":"10px 20px"}}>
                Add new Ticket
            </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className='text-center mb-2'>
            <div>Total Ticket:50</div>
            <div>Pending Ticket:7</div>
          </Col>
        </Row>
        <Row>
          <Col className='mb-2'>
            Recently Added Tickets 
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className='recent-ticket'>
            <TicketTable tickets={tickets}/>
          </Col>
        </Row>
      
    </Container>
  )
};


