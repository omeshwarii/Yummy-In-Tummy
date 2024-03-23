import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Register.css';
import { Navigate } from 'react-router-dom';
function Register(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('Authtoken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
    const [emessage,setemessage] = useState("");
    function Signup(){
         const firstname = document.getElementById('firstname').value;
         const lastname = document.getElementById('lastname').value;
         const email = document.getElementById('email').value;
         const dob = document.getElementById('dob').value;
         const gender = document.getElementById('gender').value;
         const password = document.getElementById('password').value;
         const confirmpassword = document.getElementById('confirmpassword').value;
         if(firstname===""||lastname===""||email===""||dob===""||gender===""||password===""||confirmpassword===""){
            setemessage("All feilds are required");
         }else{
            if(password===confirmpassword){
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(emailRegex.test(email)){
                    const data = {
                        "email":email,
                        "firstname":firstname,
                        "lastname":lastname,
                        "password":password,
                        "dob":dob,
                        "gender":gender
                     };
  axios.put('http://localhost:2000/user/signup', data)
    .then(response => {
        
        window.location.href = '/login';
        setemessage(response.data.message);
    })
    .catch(error => {
        setemessage(error.response.data.message);
    });
                }else{
                    setemessage("Invalid emails");
                }
            }else{
                setemessage("Passwords dont match");
            }
         }
    }
    if (isAuthenticated) {
        return <Navigate to="/menu" />;
      } else {
    return (
        <div className='LoginSection'>
            <div  className={emessage===""?"hide":"EMessage"}><p>{emessage}</p></div>
          <h3>Create an Account</h3>
          <section> 
           
              <label htmlFor="firstname">First Name:</label><br></br>
                <input type="text" id="firstname" name="firstname" placeholder="firstname"  /><br></br>
                <label htmlFor="lastname">Last Name:</label><br></br>
                <input type="text" id="lastname" name="lastname" placeholder="lastname"  /><br></br>
                <label htmlFor="email">Email:</label><br></br>
                <input type="text" id="email" name="email" placeholder="email"  /><br></br>
                <label htmlFor="dob">DOB:</label><br></br>
                <input type="date" id="dob" name="dob"  /><br></br>
                <label htmlFor="gender">Gender:</label><br></br>
                <select id="gender">
                    <option value={1} selected>Male</option>
                    <option value={0}>Female</option>
                </select><br></br>
              <label htmlFor="Password">Password:</label><br></br>
                <input type="password" id="password" name="Password" placeholder="Password" /><br></br>
                <label htmlFor="Confirm Password">Confirm Password:</label><br></br>
                <input type="password" id="confirmpassword" name="ConfirmPassword" placeholder="Re-Type Password" /><br></br>
              <button onClick={Signup}>Register</button><br></br>
            
          </section><br></br><br></br>
        </div>
      );
    }
}

export default Register;