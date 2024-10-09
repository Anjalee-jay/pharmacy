import React from 'react'
import './Prescription.css'
import { BsPeopleFill, BsFileMedical, BsDiagram2,BsPersonCircle,BsJustify} from 'react-icons/bs'


function Prescription() {
  return (
    
    <div>
    <header className='header2'>
  <div className='menu-icon'>
      <BsJustify className='icon'/>
  </div>
  <div className='header-left2'>
      <h1>Your Health,Our Priority</h1>
      </div>
      <div className='header-right2'>
          
          <BsPersonCircle className='icon'/>
          
      </div>
      
    

</header>
       <aside id= "sidebar2">
        <div className='sidebar-title2'>
            <div className='sidebar-brand2'>
            <span className="part1">Medi</span>
            <span className="part2">Connect</span>
            </div>
   
        </div>
        <u1 className='sidebar-list2'>
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
    
    <div className='pretable'>

    </div>
    </div>
  )
}

export default Prescription
