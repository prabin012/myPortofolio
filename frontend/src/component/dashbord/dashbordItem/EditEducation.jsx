import { useState } from 'react';
import './profileEdit.css'

const EditEducations = () => {

  const emg ="/assests/images/pic_yello.png";
  const [image, setImage] = useState(emg);

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
  const handleChange = () => {

  }
  const ClickHandle = (e) => {

  }
  return (
    <>
    <div className="mainSection">
    <div className="profileSection">
      <span className="regTitle profTittle">Edit your Education !</span>
      <div className="profileaimageEdit">
        {
          image &&
          <img className='pimage'  src={image} alt="" />
        }
       
        <input type="file" id='myPic' className='inp' onChange={handleImageUpload}/>
        <div className="btnUpdate">
          <label htmlFor='myPic' type='submit' className='inputfieldsbtn up  dp'> Update</label>
          <button type='submit' className='inputfieldsbtn' onClick={handleImageCancel}> Cancel</button>
        </div>
      </div>
        <div className="profileedits">
          {/* <h1>welcomw</h1> */}
          <form action="" className="registerform profileForm" onSubmit={ClickHandle}>
           <div className="university_item ">
           <span className='tittleofdisplay'>University Informantio</span>
           <div className="editaresas">
              <label htmlFor="Name">University</label>
              <input className='username textareas inputfields'
                type="text"
                name='username'
                onChange={handleChange}
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Branch</label>
              <input className='username textareas inputfields'
                type="text"
                name='username'
                onChange={handleChange}
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Date </label>
              <input className='username textareas inputfields'
                type="text"
                name='username'
                onChange={handleChange}
                placeholder='joinDate - passingDate'
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Result</label>
              <input className='username textareas inputfields'
                type="text"
                name='username'
                onChange={handleChange}
              />
            </div>
            
           </div>
           <div className="university_item ">
           <span className='tittleofdisplay'>College Informantio</span>
           <div className="editaresas">
              <label htmlFor="Name">College</label>
              <input className='username textareas inputfields'
                type="text"
                name='username'
                onChange={handleChange}
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Branch/Stream</label>
              <input className='username textareas inputfields'
                type="text"
                name='username'
                onChange={handleChange}
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Date </label>
              <input className='username textareas inputfields'
                type="text"
                name='username'
                onChange={handleChange}
                placeholder='joinDate - passingDate'
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Result</label>
              <input className='username textareas inputfields'
                type="text"
                name='username'
                onChange={handleChange}
              />
            </div>
            
           </div>
           <div className="university_item ">
           <span className='tittleofdisplay'>School Informantio</span>
           <div className="editaresas">
              <label htmlFor="Name">School</label>
              <input className='username textareas inputfields'
                type="text"
                name='username'
                onChange={handleChange}
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Branch</label>
              <input className='username textareas inputfields'
                type="text"
                name='username'
                onChange={handleChange}
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Date </label>
              <input className='username textareas inputfields'
                type="text"
                name='username'
                onChange={handleChange}
                placeholder='joinDate - passingDate'
              />
            </div>
            <div className="editaresas">
              <label htmlFor="Name">Result</label>
              <input className='username textareas inputfields'
                type="text"
                name='username'
                onChange={handleChange}
              />
            </div>
            
           </div>
            
            
            
          </form>

        </div>
        <div className="btnUpdate">
          <button type='submit' className='inputfieldsbtn up'> Update</button>
          <button type='submit' className='inputfieldsbtn'> Cancel</button>
        </div>
        
      </div>
     
    </div>
     

    </>
  )
}

export default EditEducations
