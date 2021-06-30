import React, { useEffect, useState } from "react";
import Whitecard from "../components/Whitecard";
import Whitecard1 from "../components/Whitecard1";
import "../css/Whitepart.css";

function Whitepart({ fetchUrl, fetchUrl1 }) {
  const wholepart = {
    paddingBottom: "40px",
    // width: "90%",
    background: "white",
    display: "flex",
    justifyContent: "space-evenly",
  };

  return (
    <div style={wholepart} className="whitepart_main">
      <div className="whitepart_main_top">
        <Whitecard fetchUrl={fetchUrl}></Whitecard>
      </div>

      <div className="whitepart_main_bottom">
        <Whitecard1 fetchUrl={fetchUrl1}></Whitecard1>
      </div>
    </div>
  );
}

export default Whitepart;
