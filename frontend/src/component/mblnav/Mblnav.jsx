import { Profiler, useContext, useState } from 'react';
import './mblnav.css'
import {  CgMenuRightAlt} from "react-icons/cg";
import { useNavigate } from 'react-router';
import { AppContext } from '../../context/AppContext';
import { GrDashboard } from 'react-icons/gr';
import Dashboard from '../dashbord/Dashboard';
import { Link } from 'react-router-dom';




const Mblnav = () => {
  const history = useNavigate();
  const { userdata } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [opennev, setOpennev] = useState(false);
  const uImage = userdata.users.userimage;
  const LogOut = () => {
    localStorage.clear();
    history("/");
    window. location. reload()
}
  return (
    <>
      <div className="navbar-1">
        <div className="navbarItem">
          <div className="navbarSearch">
          <div className="personIcon messaheIcon" onClick={() => setOpen(!open)}>
              {/* <CgProfile/> */}
              <img src={`/assests/images/${uImage}` ?`/assests/images/${uImage}`:"/assests/images/pic_yello.png" } alt="" />
              {open &&
                        <div className="logoutOpen">
                            <ul className="logoutItem">
                                <li>Profile</li>
                                <li onClick={LogOut}>Logout </li>
                                {/* <LogoutIcon/> */}

                            </ul>
                        </div>
                    }
            </div>
            <label className="navbarSearchfield"> myPortofolio</label>
            <button className="navbarSearchButton">Search</button>
            
            <div className="messaheIcon" >
              <CgMenuRightAlt onClick={() => setOpennev(!opennev)}/>
            </div>
            {
                opennev && 
                <div className="logoutOpen-1">
                  <ul ul className="logoutItem-1">
                  <Link to='/' className='l23'>Home</Link>
                  <Link to='/profile/profileedits' className='l23'>Profile</Link>
                <Link to='/blog' className='l23'>Blog</Link>
                <Link className='l23'>logout</Link>
                  </ul>
                
                </div>
              }
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Mblnav
