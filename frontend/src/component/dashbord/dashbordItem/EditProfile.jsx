import { useContext, useEffect, useRef, useState } from 'react';
import './profileEdit.css'
import { Form, Link } from 'react-router-dom'
import axios from 'axios';
import { AppContext } from '../../../context/AppContext';

const EditProfiles = () => {

  const username = useRef();
  const Desc = useRef();
  const Location = useRef();
  const phoneNumber = useRef();
  const about1 = useRef();
  const about2 = useRef();
  const Birth = useRef();
  const Facebook = useRef();
  const Instagram = useRef();
  const LinkedIn = useRef();
  const Youtube = useRef();
  const Github = useRef();
  const Resuma = useRef();

  const {userdata} = useContext(AppContext)
  const [data, setData] = useState(null)


  const [image, setImage] = useState(null);
  const imgRef = useRef();
  // console.log(userdata)
const usersid = userdata.users._id
console.log(usersid)
//upload image **********************************************///
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file)
  }


  const SubmitForm = async(e) => {
    e.preventDefault();
    const formData = {
      username: username.current.value,
      Desc: Desc.current.value,
      Birth: Birth.current.value,
      Location: Location.current.value,
      phoneNumber: phoneNumber.current.value,
      about1: about1.current.value,
      about2: about2.current.value,
  
     
    };
    try {
      console.log(formData)
      const res = await axios.post(`http://localhost:5550/update/${usersid}`, formData);
      setData(res.data);
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }


  const submitImage =async(e)=>{
    e.preventDefault();
     const formData =new FormData();
     formData.append('image', image);
    try {
      const res = await axios.post(`http://localhost:5550/${usersid}/upload`,formData ,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const ClickHandleSocial =async(e)=>{
    e.preventDefault();

    const socaildata = {
      Facebook: Facebook.current.value,
      Instagram: Instagram.current.value,
      LinkedIn: LinkedIn.current.value,
      Youtube: Youtube.current.value,
      Github: Github.current.value,
      Resuma: Resuma.current.value
    }

    try {
      console.log(socaildata)
      const ress = await axios.post(`http://localhost:5550/update/${usersid}`, socaildata);
      setData(ress.data);
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  const UpImg =()=>{
    imgRef.current.click();
  }
  return (
    <>
    <div className="mainSection">
    <div className="profileSection"  >
      <span className="regTitle profTittle">Edit your Profile !</span>
      <form className="profileaimageEdit" onSubmit={submitImage}>
        <div className="pimage" onClick={UpImg}>
        {
          image ?<img  className='pimage'  src={URL.createObjectURL(image)} alt=""/>: <img className='pimage' src="/assests/images/pic_yello.png" alt="" />
        }
        </div>
        <input type="file" id='myPic' className='inp' onChange={handleImageUpload} accept='jpg/png/jpeg' ref={imgRef}/>
        <div className="btnUpdate">
          <button  type='submit' className='inputfieldsbtn up  dp' > Update</button>
          <button className='inputfieldsbtn' onClick={()=> setImage('')}> Cancel</button>
        </div>
      </form>
        <div className="profileedits">
          {/* <h1>welcomw</h1> */}
          <form action="" className="registerform profileForm" onSubmit={SubmitForm}>
           
            <div className="editaresas">
              <label htmlFor="Name">Name</label>
              <input className='username textareas inputfields'
                type="text"
                name='username'
                ref={username}
             
              />
            </div>
            <div className="editaresas">
            <label htmlFor="Name">Short Descriptionn</label>
              <input className='username textareas inputfields'
                type="Desc"
                name='Desc'
                ref={Desc}
             
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Date of Birth</label>
              <input className='username textareas inputfields'
                type="date"
                name='Birth'
                ref={Birth}
             
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Location</label>
              <input className='username textareas inputfields'
                type="text"
                name='Location'
                ref={Location}
             
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Phone Number</label>
              <input className='username textareas inputfields'
                type="text"
                name='phoneNumber'
                ref={phoneNumber}
             
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">About 1</label>
              <textarea className='username textareas inputfields'
                type="text"
                name='about1'
                ref={about1}
             
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">About 2</label>
              <textarea className='username textareas inputfields'
                type="text"
                name='about2'
                ref={about2}
             
              />
               
            </div>
            <div className="btnUpdate">
                   <button type='submit' className='inputfieldsbtn up'> Update</button>
                    <button  className='inputfieldsbtn' onClick={''}> Cancel</button>
               </div>
          </form>

        </div>
       
        
      </div>
      <div className='profileSection'>
      <span className="regTitle profTittle">Social Links !</span>
      <div className="profileedits">
          {/* <h1>welcomw</h1> */}
          
          <form action="" className="registerform profileForm" onSubmit={ClickHandleSocial}>
          
            <div className="editaresas">
              <label htmlFor="Name">Facebook</label>
              <input className='username textareas inputfields'
                type="text"
                name='Facebook'
                ref={Facebook}
             
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Instagram</label>
              <input className='username textareas inputfields'
                type="text"
                name='Instagram'
                ref={Instagram}
             
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Github</label>
              <input className='username textareas inputfields'
                type="text"
                name='Github'
                ref={Github}
             
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">LinkedIn</label>
              <input className='username textareas inputfields'
                type="text"
                name='LinkedIn'
                ref={LinkedIn}
             
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Youtube</label>
              <input className='username textareas inputfields'
                type="text"
                name='Youtube'
                ref={Youtube}
             
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Resuma</label>
              <input className='username textareas inputfields'
                type="file"
                name='Resuma'
                ref={Resuma}
             
              />
            </div>
            <div className="btnUpdate">
          <button type='submit' className='inputfieldsbtn up'> Update</button>
          <button  className='inputfieldsbtn' onClick={''}> Cancel</button>
        </div>
          </form>

        </div>
       
      </div>
    </div>
     

    </>
  )
}

export default EditProfiles
