import "../admin/viewuser.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewProfile() {
  const [UserList, setUserList] = useState([]);
  useEffect(() => {
    // if (
    //   localStorage.getItem("role") === "null" ||
    //   localStorage.getItem("role") != "3"
    // ) {
    //   window.location.href = "/login";
    // }
    getUserList();
  }, []);

  const getUserList = async () => {
    //const userid = { Cid: localStorage.getItem("Cid") };
    let id = localStorage.getItem("Cid");
   // console.log(userid);
    /* const response = await axios.get(
      "http://localhost:8081/getUserByRoleId",
      userid
    );
     setUserList(response.data);
    console.log(response.data);
    */

    axios.get(`http://localhost:8000/customers/id/${id}`).then(
      // axios.get(`http://localhost:8000/customers/id/1`).then(
      (response) => {
        console.log(response.data);
        setUserList([{ ...response.data }]);
      },
      (error) => {
        console.log(error.data);
        //toast.error("Error deleting project.. Try Again");
      }
    );
  };
  ////style={{ backgroundColor: "#7e41a5" }}
  return (
    <body class="view">
      <div className="container col-12 viewuser">
        <h1 className="text-center text-light">My Profile</h1>
        <table className="table hover">
          <thead>
            <tr className></tr>
          </thead>
          <tbody>
            {UserList.map((user) => {
              return (
                <>
                  <tr>
                    <td>Name :</td>
                    <td>{user.cname}</td>
                  </tr>
                  <tr>
                    <td>mobile :</td>
                    <td>{user.cphone}</td>
                  </tr>
                  <tr>
                    <td>Email :</td>
                    <td>{user.cemail}</td>
                  </tr>
                  <tr>
                    <td>City :</td>
                    <td>{user.citypincode}</td>
                  </tr>
                  
                </>
              );
            })}
            ;
          </tbody>
        </table>
      </div>
    </body>
  );
}

export default ViewProfile;
