import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, PieChart, Pie, BarChart, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';

const Dashboard = () => {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    const[chart,setChart]= useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setChart(data))
    },[])
    return (
        <div>
       <LineChart width={400} height={500} data={chart}>
       <Line type="monotone" dataKey="sell" stroke="#8884d8" />
       <XAxis dataKey="month" />
       <YAxis />
       </LineChart>
       
       <BarChart width={730} height={500} data={chart}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="investment" fill="#8884d8" />
  <Bar dataKey="revenue" fill="#82ca9d" />
</BarChart>
        </div>
    );
};

export default Dashboard;