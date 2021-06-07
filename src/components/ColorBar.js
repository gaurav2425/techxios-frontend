import React from "react";
import "../css/ColorBar.css";
function ColorBar() {
  const colorbar = {
    height: "300px",
    width: "90%",
    // marginBottom: "30px",
  };
  return (
    <div style={colorbar} className="color_bar">
      <h1>I am ColorBar</h1>
    </div>
  );
}

export default ColorBar;
