import React from "react";
import Whitecard from "../components/Whitecard";
function Whitepart({ fetchUrl }) {
  const wholepart = {
    height: "800px",
    width: "90%",
    background: "white",
  };
  return (
    <div style={wholepart}>
      <h1>I AM White Part</h1>
      <Whitecard></Whitecard>
    </div>
  );
}

export default Whitepart;
