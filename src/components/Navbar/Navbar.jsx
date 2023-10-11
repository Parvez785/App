import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Nav from 'react-bootstrap/Nav';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import './navbar.css';

export default function Navbar() {

  return (
<Nav className="d-flex justify-content-end pt-4 pe-5 align-items-center">
<TooltipComponent position="TopCenter" content="Cart" target="#btn">
<MenuIcon  id="btn" style={{color:'rgb(3, 201, 215)'}}/>
  </TooltipComponent>
<TooltipComponent position="TopCenter" content="Cart" target="#nav">
<Nav.Link id="nav">
<ShoppingCartIcon style={{color:'rgb(3, 201, 215)'}}/>
</Nav.Link>
</TooltipComponent>
<TooltipComponent position="TopCenter" content="Chat" target="#nav2">
<Nav.Link id="nav2">
<ChatBubbleOutlineOutlinedIcon style={{color:'rgb(3, 201, 215)'}}/>
</Nav.Link>
</TooltipComponent>
<TooltipComponent position="TopCenter" content="Notifications" target="#nav3">
<Nav.Link id="nav3">
<NotificationsNoneOutlinedIcon style={{color:'rgb(3, 201, 215)'}}/>
</Nav.Link>
</TooltipComponent>
<TooltipComponent position="TopCenter" content="Notifications" target="#hero">
<div className='hero-secton d-flex align-items-center' id="hero">
    <img src="https://i.postimg.cc/2ybW5C18/download.jpg" className='rounded-circle pe-1' height="40px" width="40px"/>
    <span id="hero">Hi , Michael</span><KeyboardArrowDownIcon style={{fontSize:"8px", cursor:'pointer',color:'rgb(3, 201, 215)'}}/>
</div>
</TooltipComponent>
    </Nav>
  )
}
