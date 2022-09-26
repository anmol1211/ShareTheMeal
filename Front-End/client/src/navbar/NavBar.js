import React from "react";
import "./NavBar.css";
import letsplay from "../images/s.png";

const NavBar = () => {
  const redirectlogin = () => {
    window.location.href = "/login";
  };
  const redirectdologin = () => {
    window.location.href = "/donorlogin";
  };

  const redirectreg = () => {
    window.location.href = "/register";
  };
  return (
    <div class="navbarrr">
       <nav class="navbar navbar-expand-md  navbar-dark" style={{backgroundColor: "#072A46"}}>
  {/* <!-- Brand --> */}
  {/* <a class="navbar-brand" href="#">Players Spot</a> */}
  <img class="logo1" src={letsplay}></img>


  {/* <!-- Toggler/collapsibe Button --> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  {/* <!-- Navbar links --> */}
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">

    <li class="nav-item active">
        <a class="nav-link" onclick={redirectlogin} href="\home">Home <span class="sr-only">(current)</span></a>
      </li> 

      <li class="nav-item active">
        <a class="nav-link" onclick={redirectlogin} href="\aboutus">About Us <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" onclick={redirectlogin} href="\login">User Login<span class="sr-only">(current)</span></a>
      </li>


      {/* <li class="nav-item active">
        <a class="nav-link" onclick={redirectlogin} href="\register">Sign Up <span class="sr-only">(current)</span></a>
      </li> */}

      <li class="nav-item active">
        <a class="nav-link" onclick={redirectdologin} href="\donorlogin">Donor Login<span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" onclick={redirectdologin} href="\complogin">Company Login<span class="sr-only">(current)</span></a>
      </li>

    </ul>
  </div>
</nav>
    </div>
  );
};

export default NavBar;
