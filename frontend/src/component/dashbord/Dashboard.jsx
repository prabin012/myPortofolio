import React from 'react'
import './dashboard.css'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Mobile from '../mblnav/Mobile'


const Dashboard = () => {
  return (
   <>
   <div className="dashboard">
    <div className="dashboarditems">
        <div className="sidebar">
            <ul className="sidebarItem">
                <li className='sidebarLink'><NavLink to='/profile/profileedits' className='sidebarnavLink'>Profile</NavLink></li>
                <li className='sidebarLink'><NavLink to='/profile/educationedits' className='sidebarnavLink'>Education</NavLink></li>
                <li className='sidebarLink'><NavLink to='/profile/skillsedits' className='sidebarnavLink'>Skills</NavLink></li>
                <li className='sidebarLink'><NavLink to='/profile/projectedits' className='sidebarnavLink'>Projects</NavLink></li>
                <li className='sidebarLink'><NavLink to='/profile/certificateedits' className='sidebarnavLink'>Certificate</NavLink></li>
                <li className='sidebarLink'><NavLink to='/profile/aboutedits' className='sidebarnavLink'>About</NavLink></li>
                <li className='sidebarLink'><NavLink to='/profile/blogdetail' className='sidebarnavLink'>Blog</NavLink></li>
            </ul>
           
        </div>
        <Outlet/>
      
    </div>
    <Mobile/>
   </div>
   
   
   </>
  )
}

export default Dashboard
