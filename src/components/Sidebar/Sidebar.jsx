import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Siebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import IconButton from '@mui/material/IconButton';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import DetailsIcon from '@mui/icons-material/Details';
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from '../Navbar/Navbar';

export default function SidebarNew() {
    return (

      <div className='main-sidebar'>
         <div className="logo py-4 d-flex justify-content-start ps-4">
              <img src="https://i.postimg.cc/QtC7SdGL/crm.png" alt="Logo" />
            </div>
            <Nav className='d-flex flex-column'>
            <p>Apps</p>
            <Nav.Link href="/Dashboard" className='d-flex align-items-center'>
            <IconButton>
                <DashboardIcon />
              </IconButton>
              <span> Dashboard</span>
            </Nav.Link>
           
            <Nav.Link href="/Contacts" className='d-flex align-items-center'>
            <IconButton>
                <Person2OutlinedIcon />
              </IconButton>
             <span> Customers</span>
            </Nav.Link>
            <Nav.Link href="/Newcalendar" className='d-flex align-items-center'>
            <IconButton>
                <CalendarMonthOutlinedIcon />
              </IconButton>
              <span> Calendar</span>
            </Nav.Link>
            <Nav.Link href="/Kanban" className='d-flex align-items-center'>
            <IconButton>
                <ViewKanbanOutlinedIcon />
              </IconButton>
              <span> Kanban</span>
            </Nav.Link>
            <Nav.Link href="/Editor" className='d-flex align-items-center'>
            <IconButton>
                <EditNoteOutlinedIcon />
              </IconButton>
              <span> Editor</span>
            </Nav.Link>
            <p>Charts</p>
            <Nav.Link href="/Line" className='d-flex align-items-center'>
            <IconButton>
                <ShowChartOutlinedIcon />
              </IconButton>
              <span> Line Chart</span>
            </Nav.Link>
            <Nav.Link href="/Pyramid" className='d-flex align-items-center'>
            <IconButton>
                <DetailsIcon />
              </IconButton>
              <span>Pyramid</span>
            </Nav.Link>
            <Nav.Link href="/Pie" className='d-flex align-items-center'>
            <IconButton>
                <PieChartOutlineOutlinedIcon />
              </IconButton>
              <span>Pie</span>
            </Nav.Link>
            <Nav.Link href="/Financial" className='d-flex align-items-center'>
            <IconButton>
                <CandlestickChartOutlinedIcon />
              </IconButton>
              <span>Financial</span>
            </Nav.Link>
            <Nav.Link href="/Bar" className='d-flex align-items-center'>
            <IconButton>
          <BarChartIcon/>
              </IconButton>
              <span>Barchart</span>
            </Nav.Link>
            </Nav>
            </div>
      

  );
}
