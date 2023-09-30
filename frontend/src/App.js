
import Body from "./component/body/Body";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Blogs from "./component/blogs/Blogs";
import './app.css'
import Register from "./auth/Register";
import Login from "./auth/Login";
import Dashboard from "./component/dashbord/Dashboard";
import EditProfiles from "./component/dashbord/dashbordItem/EditProfile";
import EditAbout from "./component/dashbord/dashbordItem/EditAbout";
import EditEducation from "./component/dashbord/dashbordItem/EditEducation";
import EditProjects from "./component/dashbord/dashbordItem/EditProjects";
import EditCertificate from "./component/dashbord/dashbordItem/EditCertificte";
import EditSkills from "./component/dashbord/dashbordItem/EditSkills";
import { useContext } from "react";
import {AppContext } from "./context/AppContext";


function App() {
  const { userdata } =useContext(AppContext);
 
  return (

    <BrowserRouter>
  <Navbar/>
      <Routes>
      <Route path="/" element={userdata ? <Body/> : <Login />} />
      <Route path="/blog" element={userdata ? <Blogs/>: <Navigate to="/" />}></Route>
      <Route path="/login" element={userdata ?  <Navigate to="/" />: <Navigate to="/" />}></Route>
      <Route path="/register" element={userdata ?  <Navigate to="/" /> : <Register />}></Route>
      <Route exact path="profile/" element={userdata? <Dashboard/> : <Navigate to="/" />}  >
        <Route path="profileedits" element={<EditProfiles/>}></Route>
        <Route path="educationedits" element={<EditEducation/>}></Route>
        <Route path="skillsedits" element={<EditSkills/>}></Route>
        <Route path="certificateedits" element={<EditCertificate/>}></Route>
        <Route path="projectedits" element={<EditProjects/>}></Route>
        <Route path="aboutedits" element={<EditAbout/>}></Route>
      </Route>
      </Routes> 

    </BrowserRouter>
    
  );
}

export default App;
