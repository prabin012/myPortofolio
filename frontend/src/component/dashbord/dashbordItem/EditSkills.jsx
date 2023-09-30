

import { useContext, useEffect, useState } from 'react';
import './profileEdit.css'
import axios from 'axios';
import { AppContext } from '../../../context/AppContext';

const EditSkills = () => {
   const {userdata, userinfo} = useContext(AppContext)
  const emg ="/assests/images/r1.png";
  const [image, setImage] = useState(emg);
  const [inputData, setInputData] = useState({
    tittle:'React',
    level:'Bengineer',
    link:'www.prabinmahato.com',
  })

  const handleChange=(e)=>{
    const {name , value} =e.target;

    setInputData({...inputData,[name]:value})
  }

//upload image **********************************************///
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  //cancel image upload*******************************/
  const handleImageCancel=()=>{
    setImage(emg)
  }
  //*********************************************** */
  const usid =userdata.users._id;
  const ClickHandle = async(e) => {
    e.preventDefault();
    try {
      // console.log("clicked")
      const respSkill = await axios.post(`http://localhost:5550/${usid}/skills/`,inputData)
      console.log(respSkill.data)
    } catch (error) {
      console.log(error)
    }
  }
 
  return (
    <>
    <div className="mainSection skillsSection">
    <div className="addProjectInputField profileSection">
          <div className="profileedits ">
            <form action="" className="registerform profileForm" onSubmit={ClickHandle}>
            <span className="regTitle profTittle">Add your Skills !</span>
              <div className="editaresas">
                <label htmlFor="Name">Tittle</label>
                <input className='username textareas inputfields'
                  type="text"
                  name='tittle'
                  value={inputData.tittle}
                  onChange={handleChange}
                />
              </div>
             
              <div className="editaresas">
                <label htmlFor="Name">Level</label>
                <input className='username textareas inputfields'
                  type="text"
                  name='level'
                  value={inputData.level}
                  onChange={handleChange}
                />
              </div>
             
            
              <div className="editaresas">
                <label htmlFor="Name">Link</label>
                <input className='username textareas inputfields'
                  type="text"
                  name='link'
                  value={inputData.link}
                  onChange={handleChange}
                />
              </div>
              <div className="editaresas">
                <label htmlFor="Name">Project Image</label>
                <input className='username textareas inputfields'
                  type="file"
                  name='username'
                  onChange={handleImageUpload}
                />
              </div>
              <button type='submit' className='inputfieldsbtn up'> Update</button>
            </form>
          </div>
          <div className="btnUpdate">
           
            <button  className='inputfieldsbtn'> Cancel</button>
          </div>
    </div>
    <div className="skillView">
    <div className="projectsBox langBox skilbox" >
      <div className="skillImage languageImage ">
      <img src={image} alt="" className="" />
      </div>
      <span className="p1 p2">Tittle :- <span className='PLink'>{inputData.tittle}</span></span>
      <span className="p1 p2">Level :- <sapn className='PLink'>{inputData.level}</sapn></span>
      <span className="p1 p2">Links :-<sapn className='iLink'>{inputData.link} </sapn></span>
       
      <span className="p1 p2">Explore  <a href={""} target='_blank'> Cleck Here</a></span>
    </div>
    </div>
    
                           
     
    </div>
     

    </>
  )
}

export default EditSkills

