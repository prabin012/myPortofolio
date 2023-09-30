import '../about/about.css'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import Loding from '../loding/Loding';

const About = () => {
  const {userdata ,userinfo} = useContext(AppContext);
if(!userinfo) return null;
const edu = userinfo.educations;
  if(!userdata){
    return <Loding/>
  }
  return (
    <div>
        <div className="about">
            <div className="aboutImage">{
              edu.map((e)=>{
                return  <img src={e.educationimage?e.educationimage:"add image"} alt="add image" />
              })
            }
           
            </div>
            <div className="aboutText">
                <span className="aboutTittle">About me !</span>
               
                 
                    <p className="aboutDescribe">{userdata.users.about1}</p>
                      <p className="aboutDescribe">{userdata.users.about2}</p>
                    
                      
                
               
            </div>
        </div>

    </div>
  )
}

export default About
