import { useState } from "react";
import sweetalert from "sweetalert";
import axios from "axios";
import "../home/bg.css";

import "bootstrap/dist/js/bootstrap.min.js";
function donorReg() {
  const [Name, setName] = useState("");
  const [Mobile, SetMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPassword] = useState("");
  const [City, setCity] = useState("");
  const [Password, setPass] = useState("");
  const [Citypin, setCitypin] = useState("");
  //const status = "Active";
  //const [Role, setRole] = useState("");

  // const validate = () => {
  //   var regEx = /^[a-zA-Z\s]+$/;
  //   var pattern =  /^[0-9]\d{9}$/gi;
  //   if (Name === "") {
  //     sweetalert("Error", "Please enter Name", "error");
  //     return false;
  //     // } else if (!isNaN(Name)) {
  //     //   sweetalert("Error", "Please enter valid Name", "error");
  //     //   return false;
  //   } else if (!regEx.test(Name)) {
  //     sweetalert("Error", "Please enter characters and space only", "error");
  //     return false;
  //   } else if (Mobile === "") {
  //     sweetalert("Error", "Please enter Mobile number", "error");
  //     return false;
  //   } else if (
  //     !pattern.test(Mobile) ||
  //     isNaN(Mobile) ||
  //     Mobile.length <= 9 ||
  //     Mobile.length >= 11
  //   ) {
  //     sweetalert("Error", "Please enter valid Mobile number", "error");
  //     return false;
  //   } else if (Email === "") {
  //     sweetalert("Error", "Please enter email", "error");
  //     return false;
  //   } else if (Email.indexOf("@") <= 0) {
  //     sweetalert("Error", "Please enter valid email", "error");
  //     return false;
  //   } else if (
  //     Email.charAt(Email.length - 4) !== "." &&
  //     Email.charAt(Email.length - 3) !== "."
  //   ) {
  //     sweetalert("Error", "Please enter valid email", "error");
  //     return false;
  //   } else if (Pass === "") {
  //     sweetalert("Error", "Please enter password", "error");
  //     return false;
  //   } else if (Pass.length <= 5 || Pass.length > Pass) {
  //     // sweetalert("Error", "Please enter Strong password", "error");
  //     sweetalert("Error", "Password must be atleast 6 character", "error");

  //     return false;
  //   } else if (City === "") {
  //     sweetalert("Error", "Please enter city", "error");
  //     return false;
  //   } else if (!isNaN(City)) {
  //     sweetalert("Error", "Please enter valid city", "error");
  //     return false;
  //   } else if (Role === "") {
  //     sweetalert("Error", "Please select role", "error");
  //     return false;
  //   }
  //   finduser();
  // };

  const addNewUser = async () => {
    const newuser = {
      rid: Name,
      rname: Mobile,
      raddr: Email,
      rphone: Pass,
      remail: City,
      rpassword: Password,
      citypincode: Citypin,
    };

    let url = "http://localhost:8000/donors/registerUser";
    await axios.post(url, newuser);
    sweetalert("success", "You have register successfully...", "success");
    window.location.href = "/login";
  };

  const finduser = async () => {
    console.log("method call");
    const user = { email: Email };
    const response = await axios.post("http://localhost:8081/checkEmail", user);
    console.log(response.data);
    if (response.data === null || response.data === "") {
      //alert("Invalid Credential");
      addNewUser();
    } else {
      sweetalert("Error", "Email already used", "error");
    }
  };

  const redirectlogin = () => {
    window.location.href = "/login";
  };

  const redirectreg = () => {
    window.location.href = "/Reg";
  };

  return (
   <section className="text-center">
  {/* <!-- Background image --> */}
  <div
       className="p-5 bg-image"
       style={{
              backgroundColor: "rgb(0, 21, 38)",
              height: "300px"}}
           
              
       ></div>
  {/* <!-- Background image --> */}

  <div
       className="card mx-4 mx-md-5 shadow-5-strong"
       style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)"}}
              
       >
    <div className="card-body py-5 px-md-5">

      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h2 className="fw-bold mb-5">Sign up For Donor</h2>
          <form>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  
                <input
                        type="text"
                        class="form-control"
                        
                        placeholder="Enter your Id"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />

                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  
                <input
                        type="text"
                        class="form-control"
                        
                        placeholder="Enter Name"
                        onChange={(e) => {
                          SetMobile(e.target.value);
                        }}
                      />
                </div>
              </div>
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
            <input
                        type="text"
                        class="form-control"
                        
                        placeholder="Enter Address"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
            <input
                        type="text"
                        class="form-control"
                        
                        placeholder="Enter Phone"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
 </div>

                <div className="form-outline mb-4">
                      <input
                        type="text"
                        class="form-control"
                       
                        placeholder="Enter Email"
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      />
            </div>

            <div className="form-outline mb-4">
                      <input
                        type="text"
                        class="form-control"
                       
                        placeholder="Enter Password"
                        onChange={(e) => {
                          setPass(e.target.value);
                        }}
                      />
            </div>

            <div className="form-outline mb-4">
                      <input
                        type="text"
                        class="form-control"
                        
                        placeholder="Enter City PinCode"
                        onChange={(e) => {
                          setCitypin(e.target.value);
                        }}
                      />
            </div>



            {/* <div className="form-outline mb-4">
<input
                        className="rdo"
                        type="radio"
                        value="2"
                        name="role"
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                      />{" "}
                       Owner

                       <input
                        className="rdo"
                        type="radio"
                        value="3"
                        name="role"
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                      />{" "}
                      User
                      </div> */}

            

            

            {/* <!-- Checkbox --> */}
            {/* <div className="form-check d-flex justify-content-center mb-4">
              <input
                     className="form-check-input me-2"
                     type="checkbox"
                     value=""
                     id="form2Example33"
                     checked
                     />
              <label className="form-check-label" for="form2Example33">
                Subscribe to our newsletter
              </label>
            </div> */}

            {/* <!-- Submit button --> */}
            {/* <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                    onClick={validate}
                    >
              Sign up
            </button> */}

                    <a
                        class="btn mb-3 text-light navBtnLogin   fw-bold"  style={{backgroundColor: "#002746"}}
                        type="button"
                        onClick={addNewUser}
                      >
                         Sign Up
                      </a>

           
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

   
  );
}
export default donorReg;
