import React, { useEffect, useState } from "react";
import axios from "axios";
import sweetalert from "sweetalert";
import { useSearchParams } from "react-router-dom";

function Payment() {
  const [loading, setLoading] = useState(false);
  const searchParams = new URLSearchParams(window.location.search);

  const redirect = searchParams.get("redirect");
  const [orderAmount, setOrderAmount] = useState(
    new Number(searchParams.get("amount"))
  );

  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "3"
    ) {
      window.location.href = "/login";
    }
    //  getAllGrounds();
  }, []);

  /*const [orders, setOrders] = useState([]);

  async function fetchOrders() {
    const { data } = await axios.get("/list-orders");
    setOrders(data);
  }
  useEffect(() => {
    fetchOrders();
  }, []);*/

  function loadRazorpay() {
    console.log("Inside");

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        setLoading(true);
        const result = await axios.post("http://localhost:8081/create_order", {
          amount: orderAmount,
          userid: localStorage.getItem("userid"),
        });
        console.log("result");
        console.log(result);
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get("http://localhost:8081/get-razorpay-key");

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: "example name",
          description: "example transaction",
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post("http://localhost:8081/pay-order", {
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });
            // if(result.data.stat)
            console.log(result);

            //  console.log(localStorage.getItem("userid"));
            sweetalert(
              "success",
              "Your Payment has been successfully done..",
              "success"
            );

            //fetchOrders();
            window.location.href = "/" + redirect;
          },

          prefill: {
            name: "example name",
            email: "email@example.com",
            contact: "111111",
          },
          notes: {
            address: "example address",
          },
          theme: {
            color: "#80c0f0",
          },
        };

        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  }

  return (
    <div class="mt-5">
      <div>
        <div>
          <h2> Pay Order</h2>
        </div>

        <div>
          <label>
            <input
              placeholder="INR"
              type="text"
              value={orderAmount}
              readOnly
              onChange={(e) => setOrderAmount(e.target.value)}
            ></input>
          </label>
        </div>

        <button
          className="btn btn-primary"
          disabled={loading}
          onClick={loadRazorpay}
        >
          Pay
        </button>

        {loading && <div>Loading...</div>}
      </div>
      {/* <div className="list-orders">
        <h2>List Orders</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>AMOUNT</th>
              <th>ISPAID</th>
              <th>RAZORPAY</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((x) => (
              <tr key={x._id}>
                <td>{x._id}</td>
                <td>{x.amount / 100}</td>
                <td>{x.isPaid ? "YES" : "NO"}</td>
                <td>{x.razorpay.paymentId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

export default Payment;
