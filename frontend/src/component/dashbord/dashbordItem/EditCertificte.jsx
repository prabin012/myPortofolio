import { useState } from 'react';
import './profileEdit.css'

const EditCertificate = () => {
  const emg ="/assests/images/c1.jpeg";
  const [image, setImage] = useState(emg);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageCancel=()=>{
    setImage(emg)
  }
  return (
    <>
      
    <div className="profileedits certi">
      <div className="certificateSection">
        <span className="regTitle profTittle certificateTittle">Add Certificate !</span>
         <div className="profileaimageEdit certificateProfile">
        {
          image &&
          <img className='pimage cimage'  src={image} alt="" />
        }
       
        <input type="file" id='myPic' className='inp' onChange={handleImageUpload}/>
       
        <div className="btnUpdate">
         
          <label htmlFor='myPic' type='submit' className='inputfieldsbtn up  dp'> Update</label>
          <button type='submit' className='inputfieldsbtn' onClick={handleImageCancel}> Cancel</button>
        </div>
        </div>
        <div className="btnUpdate certifibtn">
          <button type='submit' className='inputfieldsbtn up'> Update</button>
          <button type='submit' className='inputfieldsbtn'> Cancel</button>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default EditCertificate
