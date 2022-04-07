import Sidebar from "./component/Sidebar";
import Eventhandle from "./pages/event_handling/Index";
import FormReact from "./pages/react_form/Index";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import axios from "axios";
// import react, { useEffect, useState } from "react";

function App() {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState("");
  // React.useEffect(() => {
  //   console.log("Fetching Data");

  //   axios
  //     .get("https://api-lk21.herokuapp.com/api/v1/genre/action")

  //     .then((res) => {
  //       console.log(res.data.data);
  //       setData(res.data.data);
  //     })

  //     .catch((err) => {
  //       console.log(err);
  //       console.log("Data not Found");
  //       setError("Data no Found");
  //     });
  // }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/Event_handle" element={<Eventhandle />} />
        <Route path="/Form_react" element={<FormReact />} />
      </Routes>
      <div>
        {/* <img src={data[0].poster}></img>
        <h3>{data[0].categories}</h3>

        <img src={data[1].poster}></img>
        <h3>{data[1].categories}</h3> */}
      </div>
    </div>
  );
}

export default App;
