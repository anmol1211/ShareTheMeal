


import React from "react";
import "./NavBar.css";
import letsplay from "../images/s.png";

const AdminNavBar = () => {
  const redirectlogin = () => {
    window.location.href = "/login";
    localStorage.setItem("role", null);
  };

  return (
    <div className="m-0 p-0">
        <nav class="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "#072A46"}}>
        {/* <a class="navbar-brand" href="/#">
          Lets Play
        </a> */}
        <img class="logo1" src={letsplay}></img>

        <button
          class="navbar-toggler my-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-custom"
          aria-controls="navbar-custom"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse navbar-custom m-0 p-0"
          id="navbar-custom"
        >
          <ul class="navbar-nav  ml-auto linktab">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/userhome">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/vewground">
                View Products
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/viewbookings_user"
              >
                My Cart
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/ViewProfile_user"
              >
                View Profile
              </a>
            </li>


           
            {/* <li class="nav-item active">
              <button
                class="btn navbtn navBtnReg"
                onclick={redirectlogin}
                // href="\login"
              >
                Log Out
              </button>{" "}
            </li> */}
          </ul>

          <form class="d-flex">
            <a href="/"></a>
            <button
               class=""  style={{backgroundColor: "#072A46"}}
              
              href="/"
            >
              Log Out
            </button>
            <a/>
          </form>
          {/* <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/"
              >
                <button
              class="btn navbtn navBtnReg"
              
              href="/"
            >
              Log Out
            </button>
               
              </a>
            </li> */}
        </div>
      </nav>

      {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button
                class="btn btn-outline-success navBtnReg"
                type="button"
                // onClick={redirectreg}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default AdminNavBar;

