
import React from 'react'
import { Table } from 'react-bootstrap'

const TicketTable = ({tickets}) => {
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Opened</th>
            </tr>
        </thead>
        <tbody>
        {tickets.length ?
        tickets.map(row=> 
               <tr key={row.id}>
                <th>{row.id}</th>
                <th>{row.subject}</th>
                <th>{row.status}</th>
                <th>{row.opened}</th>
            </tr>):
            <tr>
                 <td colSpan="4" className='text-center'>no data to show</td>
             </tr>
        }
        </tbody>
    </Table>
  )
}

export default TicketTable
