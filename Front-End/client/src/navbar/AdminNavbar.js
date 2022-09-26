


import React from "react";
import "./NavBar.css";
import letsplay from "../images/s.png";

const AdminNavBar = () => {
  
  const redirectlogin = () => {
    window.location.href = "/complogin";
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
          class="navbar-toggler my-toggler bg-light "
          type="button"
          data-toggle="collapse"
          data-target="#navbar-custom"
          aria-controls="navbar-custom"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-light"></span>
        </button>

        <div
          class="collapse navbar-collapse navbar-custom m-0 p-0 "
          id="navbar-custom"
        >
          <ul class="navbar-nav  ml-auto linktab ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/adminhome">
                Home
              </a>
            </li>

            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/viewuser">
                View Users
              </a>
            </li> */}
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/viewowner">
                View Owners
              </a>
            </li> */}
            {/* <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/viewground_admin"
              >
                View Grounds
              </a>
            </li> */}


<li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/viewbooking_admin"
              >
                Available Foods 
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/viewbookingss"
              >
                Add Prodcuts 
              </a>
            </li>

            {/* <li class="nav-item active">
              <a
                class="btn navbtn navBtnReg"
                onclick={redirectlogin}
                href="\login"
              >
                Log Out
              </a>{" "}
            </li> */}
          </ul>

          <form class="d-flex">
            <a href="/complogin">
            <button
              class=""  style={{backgroundColor: "#072A46"}}
              type="submit"
              onClick="/complogin"
            >
              Log Out
            </button>
            </a>
          </form>
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
