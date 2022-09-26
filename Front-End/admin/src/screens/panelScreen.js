// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import Header from '../components/Header'
// import { getNotes } from '../actions/notesActions'

// const PanelScreen = (props) => {
//   const dispatch = useDispatch()
//   const notes = useSelector((store) => store.notes)
//   const { error, response, loading } = notes

//   console.log(response)
//   const history = useNavigate()
//   // call this only once (when the page has loaded successfully)
//   useEffect(() => {
//     dispatch(getNotes())
//   }, [])

//   useEffect(() => {}, [error, response, loading])

// //   const onAddNote = () => {
// //     history('/add-note')
// //   }

//   return (
//     <div>
//       <Header title="Home" />
      
//     </div>
//   )
// }

// export default PanelScreen

import React from "react";
import "../App.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const PanelScreen = () => {
  const data = [
    { name: "Donor", users: 20 },
    { name: "Companies", users: 5 },
    { name: "Customers", users: 70 },
    { name: "avg", users: 5 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ShareTheMeal Data Analysis</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default PanelScreen;
