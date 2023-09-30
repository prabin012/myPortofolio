import { useState } from 'react'
import './register.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [data, setData] = useState({
    name:'',
    email:'',
    phoneNumber:'',
    password:'',
  })
  const history =useNavigate();
    const handleChange =(e)=>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
       
    }
    const ClickHandle =async(e)=>{
      e.preventDefault();
      try {
        const res = await axios.post(`http://localhost:5550/createUser`,data)
        console.log("Data posted",res.data)
        if(res.data.success===true){
          history('/login')
        }
      } catch (error) {
        console.log("Error found - ",error)
      }
    }
   
  return (

    
    <>
    <div className="register">
      <div className="registerItem">
      <div className="registerImage">
            <img src="assests/images/b2.jpg" alt="" />
        </div>
      <form action="" className="registerform" onSubmit={ClickHandle}>
        <span className="regTitle">Register Here !</span>
            <input className='username textareas'
             type="text"
             name='name'
             value={data.name}
            placeholder='name'
             onChange={handleChange}
              />
            <input className='textareas'
             type="text"
             name='email'
             value={data.email}
             onChange={handleChange}
             placeholder='example@gmail.com'
              />
              <input className='textareas'
             type="text"
             name='phoneNumber'
             placeholder='Number'
             value={data.phoneNumber}
             onChange={handleChange}
              />
              <input className='textareas'
             type="password"
             name='password'
             placeholder='Password'
             value={data.password}
             onChange={handleChange}
              />

              <button type='submit' className='textareas'> Register</button>

              <span className="alreadyUser">Already register !<Link to='/login'>login here!</Link></span>
        </form>

        
      </div>
        
    </div>
    </>
  )
}

export default Register
