import React from 'react'
//import {Link} from "react-router-dom";
//import './Header.css'
export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark text-danger">
                <span className="span"><h2 className="fas fa-headphones-alt"></h2></span>
                <div className="container-fluid">
                    <h3>Brillio Events</h3>
                    <button><h3><i class="fas fa-user bg-light"></i></h3></button>
                </div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                       <Link to="/register" className="nav-link"> <button className=" btn btn-outline-info">Register</button></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/login" className="nav-link">  <button className=" btn btn-outline-info">Login</button></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}