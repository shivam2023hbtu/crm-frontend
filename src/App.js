
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { Entry } from '../src/pages/entry/entryPage';
import { DefaultLayout } from './layout/defaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard';
import { AddTicket } from './pages/AddTicket/AddTicket';
import { TicketList } from './pages/TicketPageList/TickietList';
import { Ticket } from './pages/Tickets/Ticket.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Entry />} />
          <Route path='/dashboard' element={<DefaultLayout><Dashboard /></DefaultLayout>} />
          <Route path='/add-ticket' element={<DefaultLayout><AddTicket /></DefaultLayout>} />
          <Route path='/tickets' element={<DefaultLayout><TicketList /></DefaultLayout>} />
          <Route path='/ticket/:tid' element={<DefaultLayout><Ticket /></DefaultLayout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
