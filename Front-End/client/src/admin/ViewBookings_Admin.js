import "../admin/viewuser.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewBookingsAdmin() {
  const [groundList, setGroundList] = useState([]);
  useEffect(() => {
    // if (
    //   localStorage.getItem("role") === "null" ||
    //   localStorage.getItem("role") != "1"
    // ) {
    //   window.location.href = "/login";
    // }
    getAllGrounds();
  }, []);

  const getAllGrounds = async () => {
    //const user = { ownerId: localStorage.getItem("userid") };
    const response = await axios.get("http://localhost:8000/donors/food");
    setGroundList(response.data);
    console.log(response.data);
  };

  //   const myfun = async (userEmail) => {
  //     console.log(userEmail);
  //     const user = { email: userEmail };
  //     const res = await axios.post("http://localhost:8081/getUserByEmail", user);
  //     console.log(res.data);
  //     if (res.data.status === "Active") {
  //       const user1 = {
  //         user_id: res.data.user_id,
  //         name: res.data.name,
  //         email: res.data.email,
  //         mobile: res.data.mobile,
  //         city: res.data.city,
  //         password: res.data.password,
  //         roleId: res.data.roleId,
  //         status: "InActive",
  //       };

  //   const user2 = await axios.post("http://localhost:8081/updateUser", user1);
  // } else {
  //   const user1 = {
  //     user_id: res.data.user_id,
  //     name: res.data.name,
  //     email: res.data.email,
  //     mobile: res.data.mobile,
  //     city: res.data.city,
  //     password: res.data.password,
  //     roleId: res.data.roleId,
  //     status: "Active",
  //   };
  //   const user2 = await axios.post("http://localhost:8081/updateUser", user1);
  // }

  //     getAllGrounds();
  //   };

  return (
    <body class="view">
      <div className="container col-12 viewuser">
        <h1 className="text-center text-light">Available Foods</h1>
        <table className="table table-striped">
          <thead>
            <tr className="text-light" style={{backgroundColor: "#072A46"}}>
              <td>Food Type</td>
              <td>Donor-Details</td>
              
            </tr>
          </thead>
          <tbody>
            {groundList.map((user) => {
              return (
                <tr className="text-light">
                  <td>{user.fqty}</td>
                  <div>
                  {user.donor.rname}
                  <br/>
                  {user.donor.raddr}
                  <br/>
                  {user.donor.rphone}
                  </div>
                  
                  
                </tr>
              );
            })}
            ;
          </tbody>
        </table>
      </div>
    </body>
  );
}

export default ViewBookingsAdmin;

// import React from 'react'
// // import "./Products.css"

// const ViewBookingsAdmin = () => {
//   return (
//     <div className="container ">
//       <div className='row'>
//       <div className='col'>
//         <img src='./img/catfeed.jpg'/><br></br>
//         <label>Name = Cat Feed</label><br>
//         </br>
//         <label>Price = 300Rs</label><br></br>
//         <label>Quantity = 10kg</label><br></br>
//         <button className='btn btn-primary'>Add to cart</button>
//       </div>
//       <div className='col'>
//         <img src='./img/dogfeed.jpg'/><br></br>
//         <label>Name = Dog Feed</label><br>
//         </br>
//         <label>Price = 400Rs</label><br></br>
//         <label>Quantity = 10kg</label><br></br>
//         <button class='btn btn-primary'>Add to cart</button>
//       </div>
//       </div><hr></hr>
//       <div className='row'>
//       <div className='col'>
//         <img src='./img/cowfeed.jpg'/><br></br>
//         <label>Name = Cow Feed</label><br>
//         </br>
//         <label>Price = 200Rs</label><br></br>
//         <label>Quantity = 10kg</label><br></br>
//         <button className='btn btn-primary'>Add to cart</button>
//       </div>
//       <div className='col'>
//         <img src='./img/rabitfeed.jpg'/><br></br>
//         <label>Name = Rabit Feed</label><br>
//         </br>
//         <label>Price = 350Rs</label><br></br>
//         <label>Quantity = 5kg</label><br></br>
//         <button class='btn btn-primary'>Add to cart</button>
//       </div>
//       </div><hr></hr>
//       <div className='row'>
//       <div className='col'>
//         <img src='./img/chickenfeed.jpg'/><br></br>
//         <label>Name = Chicken Feed</label><br>
//         </br>
//         <label>Price = 250Rs</label><br></br>
//         <label>Quantity = 10kg</label><br></br>
//         <button className='btn btn-primary'>Add to cart</button>
//       </div>
//       <div className='col'>
//         <img src='./img/cowfeed1.jpg'/><br></br>
//         <label>Name = Cow Feed</label><br>
//         </br>
//         <label>Price = 600Rs</label><br></br>
//         <label>Quantity = 20kg</label><br></br>
//         <button class='btn btn-primary'>Add to cart</button>
//       </div>
//       </div><hr></hr>
//           </div>
//   )
// }

// export default ViewBookingsAdmin

