import React from "react";
import "../css/CardLarge.css";
function CardLarge() {
  return (
    <div className="card_large">
      <div className="card_large_upper">
        <h2>
          Microsoft is open to Steam being part of its new Windows 11 app store
        </h2>
        <h3>21 | Monday |June </h3>
      </div>
      <div className="card_large_lower">
        <img src="https://techxios-bucket.s3.amazonaws.com/images/new/image1/Twitch_subscription_charges_same_for_US.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASMIQ36HBOSNMZ24I%2F20210629%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210629T083337Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=371effb288172f9f9467667c7843af6c03ef7993078405e8c5adceb656d9822b"></img>
      </div>
    </div>
  );
}

export default CardLarge;
