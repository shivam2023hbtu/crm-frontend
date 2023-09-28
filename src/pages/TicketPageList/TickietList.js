import React, { useState, useEffect } from 'react'
import { Button, Col, Container,Row} from 'react-bootstrap'
import {SearchForm} from '../../components/searchForm/SearchForm.js'
import {TicketTable} from '../../components/ticket-table/TicketTable.js'
import tickets from '../../assests/data/data.json'
export const TickietList = () => {
  
  const [Str , setStr]= useState("");
  const [displayTickets, setDisplayTickets]=useState(tickets);

  useEffect(()=>{
    
  },[Str,displayTickets]);

  const handleOnchange =(e) =>{
    const {value}=e.target;
    setStr(value); 
    SearchTicket(value);
    
  }
  const  SearchTicket=(sttr)=>{
    const displayTickets=tickets.filter(row=> row.subject.toLowerCase().includes(sttr.toLowerCase()));

    setDisplayTickets(displayTickets)
  }
  return (
    <Container>
        <Row>
          <Col>
          <Button className='mt-3' variant='dark' >Add New Ticket</Button>
          </Col>
          <Col className='text-right'>
            <SearchForm
            handleOnChange={handleOnchange} // Corrected prop name
            Str={Str}
            />
          </Col>
        </Row>
        <hr />

        <Row>
          <Col>
          <TicketTable 
          tickets={displayTickets}/>
          </Col>
        </Row>
        
    </Container>
  )
}


