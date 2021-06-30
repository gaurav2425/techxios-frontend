import React from "react";

function Coin({ name, image, symbols, price, markecaptrank }) {
  return (
    <div style={{ background: "white" }}>
      <div className="coin-row">
        <div className="coin">
          <img
            src={image}
            alt="crypto"
            style={{ width: "40px", height: "40px" }}
          ></img>
          <h1>{name}</h1>
          <p>{symbols}</p>
        </div>
        <div className="coin-data">
          <h1>{markecaptrank}</h1>
          <h1>${price}</h1>
        </div>
      </div>
    </div>
  );
}

export default Coin;
