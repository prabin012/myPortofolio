import {  useContext, useRef, useState } from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import { apiColl } from '../apiColl'
import { AppContext } from '../context/AppContext'


const Login = () => {
  const { dispatch} = useContext(AppContext);

  const email = useRef();

  const password = useRef();

    //fetching data
    const ClickHandle =async(e)=>{
      e.preventDefault();
     
        // const respose =await axios.post('http://localhost:5550/login', formdata)
        // // const eduRes =await axios.get(`http://localhost:5550/education/${UID}`)
        // Login(respose.data)
        apiColl({email:email.current.value, password:password.current.value }, dispatch);

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

            <input className='textareas'
             type="text"
             name='email'
             placeholder='example@gmail.com'
             ref={email}
              />
             
              <input className='textareas'
             type="password"
             name='password'
             placeholder='Password'

             ref={password}
              />

              <button type='submit' className='textareas'> Register</button>
              <span className="alreadyUser">Didn't Have Account !<Link to='/register'> login here!</Link></span>
        </form>

        
      </div>
        
    </div>
    </>
  )
}

export default Login
