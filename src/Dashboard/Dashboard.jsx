import React from 'react'
import './Dashboard.css'
import { BsPeopleFill, BsFileMedical, BsDiagram2,BsPersonCircle,BsJustify} from 'react-icons/bs'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } 
from 'recharts'

import Table from '../Table/Table'





function Dashboard() {
 

    
      const data = [
        {
          name: 'Mon',
          uv: 3000,
          
          amt: 2400,
        },
        {
          name: 'Tue',
          uv: 3200,
          
          amt: 2210,
        },
        {
          name: 'Wed',
          uv: 2000,
          
          amt: 2290,
        },
        {
          name: 'Thu',
          uv: 2780,
          
          amt: 2000,
        },
        {
          name: 'Fri',
          uv: 1890,
        
          amt: 2181,
        },
        {
          name: 'Sat',
          uv: 2590,
    
          amt: 2500,
        },
        {
          name: 'Sun',
          uv: 2190,
          
          amt: 2100,
        },
        
      ];
  return (
    <div>
          <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon'/>
        </div>
        <div className='header-left'>
            <h1>Your Health,Our Priority</h1>
            </div>
            <div className='header-right'>
                
                <BsPersonCircle className='icon'/>
                
            </div>
            
          

    </header>
     <aside id= "sidebar">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <span className="part1">Medi</span>
            <span className="part2">Connect</span>
            </div>
   
        </div>
        <u1 className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href=""> 
                    <div className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=""> 
                    <div className='icon'/> Prescriptions
                </a>
            </li>
        </u1>
    </aside>
    <div className='contain'>
      
    </div>
  
    <div className='main-cards1'>
            <div className='icon-container1'>
                   <BsPeopleFill className='card_icon'/>
            </div>
            <div className='card-inner1'>
                <h3>Patients</h3>
              
            </div>
           <h3>120</h3>
        
        <div className='main-cards2'>
            <div className='icon-container2'>
            <BsFileMedical className='card_icon'/>  
            </div>
            <div className='card-inner2'>
                <h3>Prescriptions</h3>
               
                
            </div>
           <h3>120</h3>
           
           <div className='main-cards3'>
            <div className='icon-container3'>
            <BsDiagram2 className='card_icon'/>
            </div>
            <div className='card-inner3'>
                <h3>Sales</h3>
                
              </div>
           <h3>120</h3>
    </div>
    <div className="container2">
  <div>Weekly Progress</div>
  
  <div className="charts">
    <ResponsiveContainer width="170%" height={280}>
      <BarChart
        width={700}
        height={280}
        data={data}
        margin={{
          top: 5,
          right: -50,
          left: 150,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#3574b8" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        <Bar dataKey="uv" fill="#3574b8" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>
    <div className='container3'>
      <div>Recent Sales</div>
      <div className='tablecontainer'>
      <Table/>
      </div>
    </div>
  </div>

</div>
    
        
      
      </div>
    </div>
    </div>
    
    
    
  )
}

export default Dashboard
