import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import tickets from "../../assests/data/data.json";
import { MessageHistory } from "../../components/messageHistory/MessageHistory.js";
import { UpdateTicket } from "../../components/updateTicket/UpdateTicket";

const ticket = tickets[0];
export const Ticket = () => {
    const [message,setMessage]=useState('')
    useEffect(()=>{

    },[message])

    const handleOnChange=(e)=>{
        setMessage(e.target.value);
        console.log(message)
    }
    const handleOnSubmit=()=>{
        alert('Reply Submitted');
    }
  return (
    <Container className="mt-3">
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="Subject"><b>Subject:</b> {ticket.subject}</div>
          <div className="Date"><b>Ticket Opened:</b> {ticket.opened}</div>
          <div className="Status"><b>Status:</b> {ticket.status}</div>
        </Col>
        <Col className="text-center text-md-right">
          <Button variant="dark">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <MessageHistory msg={ticket.history} />
      </Row>
      <hr />
      <Row>
        <Col>
          <UpdateTicket
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          msg={message}
          />
        </Col>
      </Row>
    </Container>
  );
};
