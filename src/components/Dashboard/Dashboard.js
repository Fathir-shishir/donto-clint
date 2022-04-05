import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, PieChart, Pie, BarChart, CartesianGrid, Tooltip, Legend, Bar, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    const[chart,setChart]= useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setChart(data))
    },[])
    return (
        <div className='Dashboard-container'>
        <div className='chart'>
        <h5>MONTH WISE SALE</h5>
        <LineChart width={400} height={500} data={chart}>
       <Line type="monotone" dataKey="sell" stroke="#8884d8" />
       <XAxis dataKey="month" />
       <YAxis />
       <Tooltip />
       </LineChart>
        </div>

        <div className='chart'>
        <h5>Investment VS Revenue </h5>
             <BarChart width={400} height={500} data={chart}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="investment" fill="#8884d8" />
  <Bar dataKey="revenue" fill="#82ca9d" />
</BarChart>
        </div>

        <div className='chart'>
        <h5>Investment VS Revenue </h5>
        <AreaChart width={400} height={250} data={chart}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="month" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
  <Tooltip />
</AreaChart>
        </div>
        <div className='chart'>
        <h5>Investment VS Revenue </h5>
        <RadarChart outerRadius={90} width={400} height={250} data={chart}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="investment" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="revenue" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />revenue
  <Legend />
  <Tooltip />
</RadarChart>
        </div>

       
       
      
        </div>
    );
};

export default Dashboard;