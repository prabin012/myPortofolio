import '../body/body.css'
import About from '../about/About';
import Education from '../education/Education';
import Project from '../projects/Project';
import Skills from '../skills/Skills';
import Certificate from '../certificate/Certificate';
import Footers from '../footer/Footers'
import Feedback from '../feed/Feedback';
import { GrFacebook,GrGithub,GrLinkedin,GrInstagram, GrDownload } from "react-icons/gr";

import { useContext, useState } from 'react';
import Loding from '../loding/Loding';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

const Body = () => {


const {userdata,userinfo} = useContext(AppContext);

if(!userdata){
  return <Loding/>;
}

  return (
  
    <>
    <div>
 
      <div className="body">
      
            <div className="bodyitems">
            <span className="greeting">Welcome!</span>
            <span className="greeting1">This is {userdata.users.name} ....</span>
            <span className="description">{userdata.users.Desc}</span>
            <span className="follow">Follow me</span>
            <div className="bodyIcons">
             
                  <div className="iconsItem">
                    <span className="icons"><a href={userdata.users.facebookLink} target='_target'><GrFacebook/></a></span>
                    <span className="icons"><a href={userdata.users.instagram} target='_target'><GrInstagram/></a></span>
                    <span className="icons"><a href={userdata.users.linkedIn} target='_target'><GrLinkedin/></a></span>
                    <span className="icons"><a href={userdata.users.github} target='_target'><GrGithub/></a></span>
                    <span className="download icons"><a href={userdata.users.resuma} download>Resuma <GrDownload/></a></span> 
                </div>
             
                
                
            </div>
        </div>
        <div className="bodyImage">
        <img src={`assests/images/${userdata.users.userimage}` ? `assests/images/${userdata.users.userimage}`:"assests/images/b6.jpg"} alt="" />
        </div>
      
       
      </div>
        
      
    </div>

   
   <About/>
   <Education/>
     
    <Skills/>
    <Project/>
    <Certificate/> 
    <Feedback/>
    <Footers/>
    </>
  )
}

export default Body
