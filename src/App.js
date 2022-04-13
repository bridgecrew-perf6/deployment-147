import Home from "./pages/Index";
import Eventhandle from "./pages/event_handling/Index";
import FormReact from "./pages/react_form/Index";
import ReactHooks from "./pages/react_hook/Index";
import ReactRedux from "./pages/react_redux/Index";
import Bootstrap from "./pages/bootstrap/Index";
import Cleancode from "./pages/clean_code/Index";
import Css from "./pages/css/Index";
import VersionControl from "./pages/version_control/Index.js";
import IntroductionUIUX from "./pages/introduction_uiux/Index";
import Figma from "./pages/figma/Index";
import Html from "./pages/html/Index";
import JavascriptRs from "./pages/js_refreshment/Index";
import IntroductionReact from "./pages/introduction_react/Index";
import ReactFundamental from "./pages/react_fundamental/Index";
import Testing from "./pages/testing/Index";
import Deployment from "./pages/deployment/Index";
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
        <Route path="/" element={<Home />} />
        <Route path="/Event_handle" element={<Eventhandle />} />
        <Route path="/Form_react" element={<FormReact />} />
        <Route path="/React_hooks" element={<ReactHooks />} />
        <Route path="/React_redux" element={<ReactRedux />} />
        <Route path="/Bootstrap" element={<Bootstrap />} />
        <Route path="/Clean_code" element={<Cleancode />} />
        <Route path="/Css" element={<Css />} />
        <Route path="/Version_control" element={<VersionControl />} />
        <Route path="/Introduction_uiux" element={<IntroductionUIUX />} />
        <Route path="/Figma" element={<Figma />} />
        <Route path="/Html" element={<Html />} />
        <Route path="/Javascript_refreshment" element={<JavascriptRs />} />
        <Route path="/Introduction_react" element={<IntroductionReact />} />
        <Route path="/React_fundamental" element={<ReactFundamental />} />
        <Route path="/Testing" element={<Testing />} />
        <Route path="/Deployment" element={<Deployment />} />
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
