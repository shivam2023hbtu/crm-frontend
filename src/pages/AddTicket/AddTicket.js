import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AddTicketForm } from '../../components/addticketcomp/AddTicketForm'

const InitialFormData={
  Subject:"",
  IssueDate:"",
  Detail:""
}
//const initialFrmError = {
  //subject: false,
  //issueDate: false,
  //message: false,
//};
export const AddTicket = () => {
  
  const [frmData, setfrmData]= useState(InitialFormData);
  //const [frmDataErro, setFrmDataErro] = useState(initialFrmError);

  useEffect(()=> {},[frmData]);

  const handleOnChange= (e)=>{
     const {name,value} = e.target;

     setfrmData({
      ...frmData,
      [name]:value,
     });
  }
  const handleOnSubmit =(e)=>{
    e.preventDefault()
   // setFrmDataErro(initialFrmError);
    setfrmData(InitialFormData);
    console.log(frmData)
  }
  return (
    <Container className='d-flex align-items-center justify-content-center '>
        <Row className='text-center mt-2'>
            <Col>
            <h1>Add New Ticket</h1>
            </Col>
            <hr />
            <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmData={frmData}
            />
        </Row>

        <Row>
            
        </Row>
    </Container>
  )
}


