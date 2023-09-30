import { useContext, useState } from 'react'
import './profileEdit.css'
import axios from 'axios'
import { AppContext } from '../../../context/AppContext';

const EditProjects = () => {

  const {userdata} =useContext(AppContext);
  const emg ="/assests/images/protofolio.png";
  const [image, setImage] = useState(emg);
  const [issubmit, setIssubmit] = useState(false);
  const [inputData, setInputData] = useState({
    tittle:'Airoplane Management',
    description:'The Route components map to the Link components in a one to one relationship now. However, there can be more than one Link component linking to the same route, so its actually a one to many relationship',
    team:'Single',
    technology:'Reactjs and nodejs',
    link:'www.prabinmahato.com',
})
const initialState = {
  tittle:'',
    description:'',
    team:'',
    technology:'',
    link:'',
}
  
  const handleChange = (e) => {
    const {name, value} =e.target;
    setInputData({...inputData, [name]: value});
    
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

  const usid =userdata.users._id;
  const ClickHandle =async (e) => {
    e.preventDefault()
    // console.log(inputData)
    try {
      const res =await  axios.post(`http://localhost:5550/${usid}/addproject/`,inputData);
      console.log(res.data)
      setIssubmit(true);
      setInputData(initialState)
      setTimeout(()=>{
        setIssubmit(false);
      },1000)
     
      // setInputData(null)
    } catch (error) {
      console.log("error to fetch the data",error);
    }
  }
  const CancelUpload =()=>{
    setInputData(initialState);
    setImage('')
    
  }
  return (
    <>
      <div className="profileedits">
        <div className="addProjectInputField profileSection">
          <div className="profileedits ">
            <form action="" className="registerform profileForm" onSubmit={ClickHandle}>
            <span className="regTitle profTittle">Add your Project !</span>
            { issubmit && <span className='issubmitdiaplsy'> Added Successfully ...</span>}
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
                <label htmlFor="Name">Team</label>
                <input className='username textareas inputfields'
                  type="text"
                  name='team'
                  value={inputData.team}
                  onChange={handleChange}
                />
              </div>
              <div className="editaresas">
                <label htmlFor="Name">Technology</label>
                <input className='username textareas inputfields'
                  type="text"
                  name='technology'
                  value={inputData.technology}
                  onChange={handleChange}
                />
              </div>
              <div className="editaresas">
                <label htmlFor="Name">Description</label>
                <textarea className='textareas ta'
                  type="text"
                  cols="30" rows="4"
                  name='description'
                  value={inputData.description}
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
              <div className="btnUpdate">
            <button type='submit' className='inputfieldsbtn up upbtn'> Update</button>
           
          </div>
            </form>
          </div>
          <button onClick={CancelUpload} className='inputfieldsbtn cnclbtns'> Cancel</button>
        </div>
        <div className="addProjectDiaplay">
          <div className="projectItem">
            <div className="project-card">
            
              <img src={image} alt="" />
              <span className=" postTrack">{inputData.tittle}</span>
              <span className="desc">{inputData.description}</span>
              <span className="p1">Technology Used :-{inputData.technology}</span>
              <span className="projectTeam p1">Team :- {inputData.team}</span>
              <span className="projectTeam p1">Link:- {inputData.link}</span>
              <button className="explore1"><a href={inputData.link} target='_blank'>Explore</a></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProjects
