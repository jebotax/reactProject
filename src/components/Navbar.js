import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
    <Link className="navbar-brand" to="/"> <img className="mylogo" src={logo} alt="company logo"></img> </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="ml-auto navbar-nav">
        <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/shop">Shop</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/Login">Login</Link>
        </li>
        </ul>
    </div>
    </div>
    </nav>

    );
}

export default Navbar
