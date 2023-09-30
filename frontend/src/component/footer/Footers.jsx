import { useContext } from 'react'
import '../footer/footers.css'
import { AppContext } from '../../context/AppContext';


const Footers = () => {

  const {userdata ,userinfo} = useContext(AppContext);

  if(!userdata.users) return null;
  return (
    <div>
      <div className="footer">
        <div className="footerItem">
          <p className="number">Contact me !</p>
          <p>{userdata.users.phoneNumber}</p>
          <p>{userdata.users.email}</p>
          <div className='j1 j2'>
            <input type="email" className="joinEmail " placeholder='example@gmail.com'/>
            <button className="joinMe">Send</button>
          </div>
          <span className="foot">Copyright 2023 || {userdata.users.name}</span>
        </div>
        </div>
    </div>
      
  )
}

export default Footers
