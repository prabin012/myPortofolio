
import react, { useContext, useEffect, useState } from 'react';
import '../navbar/navbar.css'
import { Link, NavLink } from "react-router-dom";
import Loding from '../loding/Loding';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import Mobile from '../mblnav/Mobile';
import Mblnav from '../mblnav/Mblnav';


const Navbar =() => {
  const [open, setOpen] = useState(false);
  // const [info, setInfo] = useState(null);
  const{userdata, logout, userinfo , setUserinfo,}= useContext(AppContext);

  const UID = userdata?.users?._id;
const getinfo = async()=>{
  try {
    const ress = await axios.get(`http://localhost:5550/${UID}/getuser/`) //http://localhost:5550/6509b4d2bf3cc59b81f2cb8f/getuser
    setUserinfo(ress.data)
   
  } catch (error) {
   
    console.log(error)
  }
 
}

useEffect(()=>{
  getinfo();
},[])


  if(!userdata) return null;
  if(!userdata.users){
    return <Loding/>
  }
  const uImage = userdata.users.userimage;
  const logoutHandle =(e)=>{
    e.preventDefault();
    logout();
  }


  return (
    <>
    <div>
      <div className="navbar">
        <div className="navbarItem">
            <span className="logo">Portofolio..</span>
            <div className="navElement">
                <ul className="navItem">
                    <NavLink to='/' className='navList'>Home</NavLink>
                    <NavLink to='/blog' className='navList'>Blogs</NavLink>

                </ul>
            </div> 
        </div>
        <div className="profilePic">
                <img src= {`/assests/images/${uImage}` ?`/assests/images/${uImage}`:"/assests/images/pic_yello.png" }  alt="" onClick={()=> setOpen(!open)}/>
            </div>
      </div>
    
    </div>

    {
      open && 
      <div className="openLogout"  onClick ={()=>setOpen(false)}>
        <Link to='profile/profileedits/' className='logoutOption'>Profile</Link>
        <Link to='/' onClick={logoutHandle} className='logoutOption'>Logout</Link>
      </div>
    }

    <Mblnav/>

    </>
  )
}

export default Navbar
