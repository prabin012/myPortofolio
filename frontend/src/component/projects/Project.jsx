import '../projects/projects.css'
import {projects} from '../../dummy'
import { TiAttachment } from "react-icons/ti";
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Project = () => {
    const{userdata, userinfo} =useContext(AppContext);
    if(!userinfo) return null;
    const pros = userinfo.projectss
    if(!pros) return null;
  return (
    <div>
        <div className="about">
           
            <div className="aboutText projects">
                <span className="aboutTittle">Projects !</span>
               <div className="projectItem">

                {
                    pros.map((p)=>{
                        return (
                            <div className="project-card" key={p._id}>
                            <img src={p.projectimage} alt="" />
                            <span className=" postTrack">{p.projectTittle}</span>
                            <span className="desc">{p.projectDesc}</span>
                             <span className="p11">Technology Used :- {p.projectTechology}</span>
                            <span className="projectTeam p11">Team :-{p.projectlevel} </span>
                            <button className="explore1"><a href={p.projectlinks} target='_blank'>Explore</a></button>
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

export default Project
