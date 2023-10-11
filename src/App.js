import logo from './logo.svg';
import './App.css';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';  
import useState from 'react';
import SidebarNew from './components/Sidebar/Sidebar';
import Financial from './components/Financial/Financial'
import Newcalendar from './components/Calendar/Calendar'
import Dashboard from './components/Dashboard/Dashboard';
import Todo from './components/Kanban/Kanban';
import Contacts from './components/Contacts/Contacts';
import  Editornew from '../src/components/Editor/Editor'
import  Container  from 'react-bootstrap/Container';
import Pyramid from './components/Pyramid/Pyramid';
import Line from './components/LineChart/Line';
import BarChart from "./components/Stacked/BarChart"
import Pie from'./Pie/Pie';
import Navbar from './components/Navbar/Navbar'
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
function App() {


  return (
          <Router>
            <Container fluid>
   <div class="routes">
<Row>
  <Col lg="2" md="4">
    <SidebarNew/>
    </Col>
    <Col lg="10" md="8">
      <Navbar/>
<Routes>

  <Route path="/" element={<Dashboard/>}></Route>
  <Route path="/Newcalendar" element={<Newcalendar/>}></Route>
  <Route path="/kanban" element={<Todo/>}></Route>
  <Route path="/Editor" element={<Editornew/>}></Route>
  <Route path="/Contacts" element={<Contacts/>}></Route>
  <Route path="/Contacts" element={<Contacts/>}></Route>
  <Route path="/Contacts" element={<Contacts/>}></Route>
  <Route path="/Line" element={<Line/>}></Route>
  <Route path="/Pyramid" element={<Pyramid/>}></Route>
  <Route path="/Pie" element={<Pie/>}></Route>
  <Route path="/Financial" element={<Financial/>}></Route>
  <Route path="/Bar" element={<BarChart/>}></Route>
</Routes>
</Col>
</Row>
</div>
</Container>
    </Router>

  );
}

export default App;
