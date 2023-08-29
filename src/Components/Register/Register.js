import React from 'react'
import "./Register.css";
import { useState } from "react";
import {Link} from "react-router-dom";
// import "../Footer/Footer.css"

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [empId, setEmpId]= useState('');
    const [department, setDepartment]= useState('');
    const [password, setPassword] = useState('');

    function RegisterUserHandler() {
        fetch('http://localhost:8081/api/v1/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, empId, password, department })
        }).then(res => {
            if (res.status == 200) {
                alert("Registered Succesfully")

            } else {
                alert("Unsuceessfull")
            }
        });
        ;
    }
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
                            <Link to="/">LOGIN</Link>
                        </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h2 className="text-center">Register Here</h2>
                        <div className="mb-4 mt-2 input-group">
                            <span className="input-group-addon"><i className="fas fa-user-alt fa-2x"></i></span>
                            <input id="user" type="text" onChange={(e) => setUsername(e.target.value)} value={username} className="form-control text-primary" placeholder="Username" />
                        </div>
                        <div className="mb-4 mt-2 input-group">
                            <span className="input-group-addon"><i className="fas fa-envelope fa-2x"></i></span>
                            <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control text-primary" placeholder="Email" />
                        </div>
                        <div className="mb-4 mt-2 input-group">
                            <span className="input-group-addon"><i className="fas fa-user-alt fa-2x"></i></span>
                            <input id="user" type="text" onChange={(e) => setEmpId(e.target.value)} value={empId} className="form-control text-primary" placeholder="Employee ID" />
                        </div>
                        <div className="mb-4 mt-2 input-group">
                            <span className="input-group-addon" > <i className="fas fa-key fa-2x" /></span>
                            <input id="pass" type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control text-primary" placeholder="Password" />
                        </div>
                        <div className="mb-4 mt-2 input-group">
                            <span className="input-group-addon"><i className="fas fa-user-alt fa-2x"></i></span>
                            <input id="user" type="text" onChange={(e) => setDepartment(e.target.value)} value={department} className="form-control text-primary" placeholder="Department" />
                        </div>
                        <div  id="btn">
                            <button onClick={RegisterUserHandler} className="btn btn-success ">Register</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='footer'>
                    <h4>Brillio &copy; copyright </h4>
                </div>
            </div>
        </div>
    );
}
