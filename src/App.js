import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/defaultLayout';
//import { Dashboard } from './pages/dashboard/Dashboard';
//import {AddTicket} from './pages/AddTicket/AddTicket';
//import { TickietList } from './pages/TicketPageList/TickietList';
import {Ticket} from './pages/Tickets/Ticket.js'

function App() {
  return (
    <div className="App">
      <DefaultLayout>
       {/* <Dashboard/> */ }
       { /*<AddTicket/> */ }
       {/*<TickietList/> */}
       <Ticket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
