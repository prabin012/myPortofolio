import '../education/education.css'
import { TiMortarBoard } from "react-icons/ti";
import { AiFillBank } from "react-icons/ai";
import { BsMortarboardFill,BsFillBookFill } from "react-icons/bs";

import { education } from '../../dummy'
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Education = () => {
    const { userdata ,userinfo} = useContext(AppContext);
    if(!userinfo) return null;
    const educ = userinfo.educations;
    const edic =education
    if (!educ) {
        return null;
    }
    if(educ===null){
        educ=edic;
    }


    return (
        <div>  
            <div className="about edu">
{
    educ.map((educ)=>{
        return(
            <>
            <div className="aboutText eduText">
            <span className="aboutTittle">Education !</span>
                                                    <div className="higherCollege">
                                                        <span className="collegeName"><BsMortarboardFill /> {educ.university ? educ.university : "add University"}</span>
                                                        <span className="branch">{educ.UniversityStream ? educ.UniversityStream : ""}</span>
                                                        <span className="year">{educ.universityDtae ? educ.universityDtae : ""}  || Average {educ.UniversityCgpa ? educ.UniversityCgpa : ""}</span>
                                                    </div>
                                                    <div className="higherCollege">
                                                        <span className="collegeName"><AiFillBank /> {educ.college ? educ.college : "Add College"}</span>
                                                        <span className="branch">{educ.collegetream ? educ.collegetream : ""}</span>
                                                        <span className="year">{educ.collegeDtae ? educ.collegeDtae : ""}  || Average {educ.collegeCgpa ? educ.collegeCgpa : ""}</span>
                                                    </div>
                                                    <div className="higherCollege">
                                                        <span className="collegeName"><BsFillBookFill /> {educ.school ? educ.school : "Add School"}</span>
                                                        <span className="branch">{""}</span>
                                                        <span className="year">{educ.schoolDtae ? educ.schoolDtae : ""}  || Average {educ.SchoolCgpa ? educ.SchoolCgpa : ""}</span>
                                                    </div>
                                </div>
                                <div className="aboutImage eduImg-1">
                                                    <img src={educ.educationimage ? educ.educationimage : "assests/images/b5.jpg"} alt="" />
                                                </div>
            </>
        )
    }) 
   
}

                
                       

                    </div>
                </div>
    )
}

export default Education
