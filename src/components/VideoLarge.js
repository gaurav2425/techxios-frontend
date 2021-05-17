import React from "react";
import "../css/VideoLarge.css";
function VideoLarge() {
  return (
    <div className="video_large">
      <video width="750px" controls loop>
        <source src="https://media.gettyimages.com/videos/futuristic-prosthetic-robot-arm-by-a-teenage-girl-development-in-a-video-id1157357244"></source>
      </video>
    </div>
  );
}

export default VideoLarge;
