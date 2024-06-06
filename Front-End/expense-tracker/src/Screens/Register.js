import React from 'react'
import "../styles/register.css";
import { useState } from 'react';
import { localhost_backend } from '../env';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

  let [username,setUsername] = useState("")
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let [sucessMessage,setSucessMessage] = useState("")
  let handelSubmit = (event) => {
    event.preventDefault()
    let data = JSON.stringify({
      "username":username,
      "password":password,
      "email":email
    })
    fetch(localhost_backend+'userLogin/register',{method:"POST",headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },body:data})
      .then(response => {
        if(response.status == 200){
            setSucessMessage("You have sucessfully created your account")
            setTimeout(()=>navigate("/login"),2000)
        }
      })
      
  }

  return (
    <div className="main-container">
    <div className="sec-container">
      <div className="main-box">
        <div className="img-box">
          <img src="../../register.jpg" alt="" />
        </div>

        <div className="form-box">
          <h1>
            Inventory and Expense Tracker For Small and Mid Range Businees
          </h1>

          <form onSubmit={handelSubmit}>
            <div className="d-flex flex-column">
              <label className="labels">Email</label>
              <input
                type="email"
                name="email"
                className="input-login"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="d-flex flex-column">
              <label className="labels">UserName</label>
              <input
                type="text"
                name="username"
                className="input-login"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="d-flex flex-column">
              <label className="labels">Password</label>
              <input
                type="password"
                name="password"
                className="input-login"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="button-container">
              <button
                type="submit"
                className="register-button"
                onClick={handelSubmit}
              >
                Register
              </button>

              <button className="login-button">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/login"}
                >
                  Login
                </Link>
              </button>
            </div>

            <div style={{ fontSize: "24px", marginTop:"4px", color:"green" }}>{sucessMessage}</div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}

export default Register;
