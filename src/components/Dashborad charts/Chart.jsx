import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.css';

export default function Chart() {
    const data = [
   {name:"January",Total:12000},
   {name:"February",Total:8000},
   {name:"March",Total:15000},
   {name:"April",Total:16000},
   {name:"May",Total:25000},
   {name:"June",Total:3000},
      ];
      const options = {
        // Add a title to your chart
        title: {
          display: true,
          text: 'Monthly Total Sales',
          fontSize: 16,
        },
      };
  return (

<div className='Name'>
  <h5>Data for 6 months</h5>
<ResponsiveContainer width="100%">
  
<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }} options={options}>
  <defs>
    <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="name" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#Total)" />
  <Area type="monotone" dataKey="name" stroke="#82ca9d" fillOpacity={1} fill="url(#name)" />
</AreaChart>
      </ResponsiveContainer>
      </div>
    );

}
