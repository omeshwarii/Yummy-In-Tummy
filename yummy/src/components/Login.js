import './Login.css'
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import React, { useEffect,useState } from 'react';
function Login(){
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('Authtoken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  const [emessage,setemessage] = useState("");
  function Signin(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("Password").value;
    var data = {
      "email":email,
      "password":password
    };
    axios.post('http://localhost:2000/user/login', data)
    .then(response => {
      localStorage.setItem('Authtoken', response.data.token);
      setIsAuthenticated(true);
      window.location.reload();
    })
    .catch(error => {
        setemessage(error.response.data.message);
    });
  }
  if (isAuthenticated) {
    return <Navigate to="/menu" />;
  } else {
    return (
      <div className='LoginSection'>
        <div  className={emessage==""?"hide":"EMessage"}><p>{emessage}</p></div>
        <h3>SIGN IN</h3>
        <section> 
            <label htmlFor="Username"></label><br></br>
              <input type="text" id="username" name="Username" placeholder="Username"  /><br></br>
            <label htmlFor="Password"></label><br></br>
              <input type="password" id="Password" name="Password" placeholder="Password" /><br></br>
            <button onClick={Signin}>Login</button>
            <p>Do not have an account? <Link to ="/Register">click here</Link> to register</p>
          
        </section>
      </div>
    );
  }
    
}

export default Login;