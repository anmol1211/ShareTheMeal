import { useEffect, useState } from "react";
import axios from "axios";

function ViewGround() {
  const [groundList, setGroundList] = useState([]);

  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "2"
    ) {
      window.location.href = "/login";
    }
    getAllGrounds();
  }, []);

  const getAllGrounds = async () => {
    const ground = { owner_id: localStorage.getItem("userid") };
    const response = await axios.post(
      "http://localhost:8081/getGroundByOwnerId",
      ground
    );
    setGroundList(response.data);
    console.log(response.data);
  };
  const Edit = async (groundid) => {
    console.log(">>>>" + groundid);
    localStorage.setItem("groundid", groundid);
    window.location.href = "/editground";
  };

  const deletes = async (groundid) => {
    console.log(">>>>" + groundid);
    const ground1 = { ground_id: groundid };
    const res = await axios.post(
      "http://localhost:8081/findByGroundId",
      ground1
    );
    console.log(res.data);
    console.log(res.data.amount);

    const ground = {
      ground_id: groundid,
      loction: res.data.loction,
      amount: res.data.amount,
      city: res.data.city,
      ground_image: res.data.ground_image,
      ground_name: res.data.ground_name,
      owner_id: res.data.owner_id,
      sports_name: res.data.sports_name,
      timeslots: {
        ground_id: res.data.timeslots.ground_id,
        slot_id: res.data.timeslots.slot_id,
        status: res.data.timeslots.status,
        time_slot: res.data.timeslots.time_slot,
      },
    };
    const response = await axios.get(
      "http://localhost:8081/deleteGroundByGroundId",
      { params: { groundId: ground.ground_id } }
    );
    getAllGrounds();
    alert(response.data);
    //  localStorage.setItem("groundid", groundid);
    // window.location.href = "/editground";
  };

  return (
    <div class=" row  viewGround" style={{ backgroundColor: "black" }}>
      {groundList.map((item) => {
        const timeslot = item.timeslots;
        return (
          <div class="mt-5">
            <div
              class="mx-auto my-2 col-10 p-3 text-light rounded row mt-5"
              style={{ backgroundColor: "#233746" }}
            >
              <div class="col-12">
                <img
                  class="w-100 my-auto "
                  src={item.ground_image}
                  style={{ borderRadius: "10px", height: "400px" }}
                />
              </div>
              <div class="col-12 row">
                <div class="form-group">
                  {/* <input
                    type="date"
                    class="form-control"
                    id="dateOfBirth"
                    name="date"
                  /> */}
                </div>

                <p class="mt-3 h1 col-12">{item.ground_name}</p>
                <p class="col-5 h5 mt-3">Address : {item.loction}</p>
                <p class="col-4 h5 mt-3 ">City : {item.city}</p>

                <p class="col-3 h5 mt-3">Rent per time slots:{item.amount}</p>

                <h4 class="col-4 mt-2 mx-auto"> Time slots</h4>
                <div class="col-10 mx-auto ml-5 row">
                  {item.timeslots.map((time) => {
                    return (
                      <h6
                        type="lable"
                        class="col-3 ml-2 mt-1 mx-auto"
                        name="time"
                        value={time.time_slotid}
                        onClick={() => {
                          timeSlot(time.slot_id);
                        }}
                      >
                        {time.time_slot}
                      </h6>
                    );
                  })}
                </div>

                <div>
                  <button
                    class="btn  btn-outline-success navBtnLogin mt-3 "
                    type="button"
                    //value={}
                    onClick={() => {
                      Edit(item.ground_id);
                    }}
                  >
                    Update
                  </button>
                </div>

                {/* <button
                  class="btn col-5 h5 ml-5 mt-3 btn-outline-success navBtnLogin mt-3 "
                  type="button"
                  // value={view}
                  onClick={() => {
                    deletes(item.ground_id);
                  }}
                >
                  Delete
                </button> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ViewGround;

function timeSlot(time) {
  //alert(time);
  localStorage.setItem("tslots", time);
  //const [timeslot, time] = useState("");
}
