import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyYenOutlinedIcon from '@mui/icons-material/CurrencyYenOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import Chart from '../Dashborad charts/Chart';
import NewLineChart from '../NewChart/NewLine';
import 'react-circular-progressbar/dist/styles.css';
import './Dashboard.css';
import { blue } from '@mui/material/colors';



export default function Dashboard() {
  const percentage = 66;

  return (
    <Container fluid className='mt-5'>
       <Row  className='d-flex justify-content-evenly'>
        <Col md="3" className='me-2 gx-4'>
          <div className="main-card" id="card-1">
            <div className='card-top d-flex justify-content-between py-3 '>
              <h5>USERS</h5>
              <div className='right'>
              <ArrowUpwardOutlinedIcon/>
              <span>20%</span>
              </div>
              </div>
              <h3 className='py-2'>100</h3>
              <div className='card-bottom d-flex justify-content-between align-items-center py-3'>
                <span>See All users</span>
               < Person2OutlinedIcon style={{backgroundColor:'crimson',color:'white'}}/>
              </div>
          </div>
        </Col>
        <Col md="3">
          <div className="main-card" id="card-1">
            <div className='card-top d-flex justify-content-between py-3 '>
              <h5>ORDERS</h5>
              <div className='right'>
              <ArrowUpwardOutlinedIcon/>
              <span>20%</span>
              </div>
              </div>
              <h3 className='py-2'>150</h3>
              <div className='card-bottom d-flex justify-content-between align-items-center py-3'>
                <span>View All Orders</span>
               < ShoppingCartOutlinedIcon style={{backgroundColor:'green',color:'white'}}/>
              </div>
         
          </div>
        </Col>
        <Col md="3">
          <div className="main-card" id="card-1">
            <div className='card-top d-flex justify-content-between py-3 '>
              <h5>BALANCE</h5>
              <div className='right'>
              <ArrowUpwardOutlinedIcon/>
              <span>20%</span>
              </div>
              </div>
              <h3 className='py-2'>10000</h3>
              <div className='card-bottom d-flex justify-content-between align-items-center py-3'>
                <span>See Earnings </span>
                <CurrencyYenOutlinedIcon style={{backgroundColor:'green',color:'white'}}/>
              </div>
         
          </div>
        </Col>
      
       </Row>
       <Row className='mt-5 '>
        <Col md="2" className='ms-5'>
          <div className='text-section d-flex align-items-center'>
          </div>
          <div className='Chart text-center pb-4'>
            <div className='header d-flex justify-content-between align-items-center'>
          <span className='revenue h5'>Total revenue</span>
          <MoreVertOutlinedIcon/>
          </div>
            <div className='chart-header pt-3'>
              <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} />;
            </div>
            <div className='chart-footer'>
              <p className='text-muted'>Total Sales Made Today</p>
              <h3> &yen;420</h3>
            </div>
          </div>
                   </Col>
                   <Col md="7">
                  < Chart/>
                   </Col>
       </Row>
    </Container>
  )
}
