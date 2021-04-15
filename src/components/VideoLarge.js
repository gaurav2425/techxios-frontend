import React from "react";
import "../css/VideoLarge.css";
function VideoLarge() {
  return (
    <div className="video_large">
      <video width="550px" controls loop>
        <source src="https://player.vimeo.com/external/357563488.sd.mp4?s=b1cfbc7c4eb11d8a10dc5dfe36ed63466cb3da61&profile_id=139&oauth2_token_id=57447761"></source>
      </video>
    </div>
  );
}

export default VideoLarge;
