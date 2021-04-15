import React from "react";
import "../css/Video.css";
function Video({ source }) {
  return (
    <div className="video_container">
      <video height="450px" controls loop key={source}>
        <source src="https://youtu.be/SQIbeAk-bFA/"></source>
      </video>
    </div>
  );
}

export default Video;
