import '../skills/skill.css'

// import {skills} from '../../dummy'

import { TiAttachment } from "react-icons/ti";
import { useContext } from 'react';

// import{AppContext} from '../../context/AppContext'
import { AppContext } from '../../context/AppContext';

const Skills = (props) => {

    const{userdata, userinfo} = useContext(AppContext);
    if(!userinfo) return null;
    const skil = userinfo.skills;
    if(!skil){
        return null;
    }

   
  return (
    <div>
        <div className="about skillss">
           
            <div className="aboutText projects skillsText">
                <span className="aboutTittle">Skills !</span>
               <div className="projectItem langItem">
                {
                    skil.map((m)=>{
                        return (
                            <div className="projectsBox langBox" key={m._id}>
                                <div className="skillCancelbtn" onClick={''}>-</div>
                            <img src={m.skillimage} alt="" className="languageImage" />
                                <span className="langTittle p1">{m.skillsTittle}</span>
                                <span className="projectLanguage p1">Level :- {m.skilllevel}</span>
                                <span className="projectLink p1">Explore<a href={m.skilllinks} target='_blank'>Cleck Here</a></span>
                            </div>
                        )
                    })
                }
                           
                  
              
            </div>
              
                
            </div>
        </div>

    </div>
  )
}

export default Skills
