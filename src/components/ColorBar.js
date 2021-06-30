import { Link } from "@material-ui/icons";
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
      <div className="colorbar_image"></div>
      <div className="game_text">
        <h1>Play The Game</h1>

        <div>
          <h2>Just One More Game...</h2>
        </div>
      </div>
    </div>
  );
}

export default ColorBar;
