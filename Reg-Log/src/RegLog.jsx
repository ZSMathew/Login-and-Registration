import React, { useState } from 'react';
import './RegLog.css' ;
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import user_icon from './assets/person.jpg';
import email_icon from './assets/email.jpg';
import password_icon from './assets/password.jpg';


const RegLog = () => {


  const navigate = useNavigate();
   const [action,setAction] = useState("Login");

   const[form, setForm] = useState({
    name:"",
    email:"",
    password:""
   });
      // HANDLE INPUT
   const handleChange = (e)=>{
    setForm({...form,
       [e.target.placeholder.toLowerCase()]: 
       e.target.value});
   };

   // SUBMIT FUNCTION 
    const handleSubmit = async () => {

      //VALDATION
      if (!form.email || !form.password){
        alert("Please fill all fields");
        return;
      }

      // REQUEST FOR SIGN UP
      if (action === "Sign Up" && !form.name) {
        alert("Please fill all fields");
        return;
      }

      try {

        // SELECTING API ENDPOINT BASED ON ACTION
        if (action ==="Sign Up") {
          const res = await axios.post("http://localhost/login-and-registration/Reg-Log/src/register.php", form);
          console.log(res.data);
          if(res.data.status ==="success"){
            alert("Registration Successfully")

            setForm({
              name:"",
              email: "",
              password: ""
            });
          }
        }else {
          const res = await axios.post("http://localhost/login-and-registration/Reg-Log/src/login.php", form);
          console.log(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    };


  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
          {action==="Login"?<div></div>: <div className="input"> 
             <img src={user_icon} alt='' /> 

             <input 
             type='text'
              placeholder='Name' 
              value={form.name}
               onChange={handleChange} />  
            </div>}
            
            <div className="input"> 
             <img src={email_icon} alt='' /> 
             <input 
             type='email' 
             placeholder='Email' 
             value={form.email} 
             onChange={handleChange} /> 

            </div>
            <div className="input"> 
             <img src={password_icon} alt='' /> 
             <input type='password' placeholder='Password' value={form.password} onChange={handleChange} />  
            </div>
        </div>

        {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password! <span>Click Here!</span></div>}
        
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"}
           onClick={() => {
            if (action === "Sign Up") {
              handleSubmit();
            } else {
              setAction("Sign Up")
            }
           }} >Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} 
          onClick={()=> {
            if (action === "Login") {
              handleSubmit();
            }else {
             setAction("Login");
          }
          }}>Login</div>
        </div>
    </div>
  );
}

export default RegLog