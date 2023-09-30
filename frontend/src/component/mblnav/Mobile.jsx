import './mbl.css'
import { CgAddR, CgHome, CgBell, CgToday, CgAwards } from "react-icons/cg";
import { BsPlusSquareFill,BsPersonFillGear,BsPersonVcardFill,BsPencilSquare } from "react-icons/bs";
import { Link } from 'react-router-dom'
import Mblnav from './Mblnav';


const Mobile = () => {
  return (
    <div>
      {/* <Mblnav/> */}
    <div className="mobileHome">
        
    <Link to="/profile/profileedits">
        <div className="mhome">
            <BsPersonVcardFill/>
            <p>Profile</p>
        </div>
        </Link>
        <Link to="/profile/educationedits">
        <div className="mhome">
            <BsPencilSquare/>
            <p>Education</p>
        </div>
        </Link>
      
        <Link to="/profile/skillsedits">
        <div className="mhome">
            <BsPersonFillGear/>
            <p>Skills</p>
        </div>
        </Link>
        <Link to="/profile/projectedits">
        <div className="mhome">
            <BsPlusSquareFill/>
            <p>Projects</p>
        </div>
        </Link>
        
        <Link to="/profile/certificateedits">
        <div className="mhome">
            <CgAwards />
            <p>Certificate</p>
        </div>
        </Link>
      
    </div>
    </div>
  )
}

export default Mobile
