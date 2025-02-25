import React from "react";
import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <>
         <div className="container-fluid nav-bg">
          <div className="row">
 <div className="">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid nav-bg">
    <NavLink className="navbar-brand" to="/">SHEIKH</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
        className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">ContactUs</NavLink>
        </li>
       </ul>
    </div>
  </div>
</nav>
</div>      
</div>
 </div>
        </>

    )
}export default Navbar;