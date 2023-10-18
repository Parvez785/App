import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  
import SidebarNew from './components/Sidebar/Sidebar';
import { registerLicense } from '@syncfusion/ej2-base';
import Newcalendar from './components/Calendar/Calendar'
import Dashboard from './components/Dashboard/Dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWH9ed3RSRWFdWUxxWUE=');


root.render(

  <React.StrictMode>
  <App/>
  </React.StrictMode>

);

