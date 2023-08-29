import React from 'react';
import "./Login.css";
import { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {
  const [empId, setEmpId]= useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  let history = useNavigate();
  const handleSubmit = () => {
    fetch('http://localhost:8081/api/v1/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ empId, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token!=null) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('empId', empId);
          setError(false);
          //setIsAuthenticated(true);
           history('/events');
        } else {
          setError(true);
        }
        // history("/");
      });
    console.log(empId, password);
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-danger">
          <span className="span"><h2 className="fas fa-headphones-alt"></h2></span>
          <div className="container-fluid">
            <h3>Brillio Events</h3>
            {/* <button><h3><i class="fas fa-user bg-light"></i></h3></button> */}
          </div>
          <ul className="navbar-nav ml-auto">
                        <li className="nav-item btn-info">
                        <button className="btn btn-outline-info">
                            <Link to="/register">Register</Link>
                      </button>
                  </li>
            </ul>
        </nav>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h2 className="text-center">Login Here</h2>
            <div className="mb-4 mt-4 input-group">
              <span className="input-group-addon"><i className="fas fa-envelope fa-2x"></i></span>
              <input id="empId" type="text" onChange={(e) => setEmpId(e.target.value)} value={empId} className="form-control text-primary" placeholder="EMPLOYEE ID" />
            </div>
            <div className="mb-4 mt-4 input-group">
              <span className="input-group-addon" > <i className="fas fa-key fa-2x" /></span>
              <input id="pass" type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control text-primary" placeholder="Password" />
            </div>
            <div className="bt-2" id="btn">
              <button onClick={handleSubmit} className="btn btn-success ">Login</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="footer">
          <h4>Brillio &copy; copyright </h4>
        </div>
      </div>
    </div>
  )
}
