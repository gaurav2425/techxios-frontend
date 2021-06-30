import React from "react";
import "../css/VideoLarge.css";
function VideoLarge() {
  return (
    <div className="video_large">
      <video
        width="750px"
        controls
        loop
        src="https://www.canva.com/design/DAEhhXeJp3o/fWPqVBKAaC1FaTDTja0-Cw/watch?utm_content=DAEhhXeJp3o&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
      ></video>
      <video
        width="750px"
        controls
        loop
        src="https://www.canva.com/design/DAEhhXeJp3o/fWPqVBKAaC1FaTDTja0-Cw/watch?utm_content=DAEhhXeJp3o&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
      >
        <source src="https://www.canva.com/design/DAEhhXeJp3o/fWPqVBKAaC1FaTDTja0-Cw/watch?utm_content=DAEhhXeJp3o&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"></source>
      </video>
    </div>
  );
}

export default VideoLarge;
