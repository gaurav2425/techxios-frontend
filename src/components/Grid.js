import React, { useState, useEffect } from "react";
import "../css/Grid.css";
import axios from "../axios";
function Grid() {
  const [grid, setGrid] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:3000/api/trending/1");
      console.log(request.data);
      setGrid(request.data);

      return request;
    }

    fetchData();
  }, []);

  return (
    <div>
      {grid.map((grid) => {
        return (
          <div className="grid">
            <main className="grid_main">
              <div className="div1">
                <div className="divfirst"></div>
                <div className="divsecond">
                  Cyberpunk 2077 discs are $30 today for PS4,PS5,Xbox One and
                  Xbox Series X
                </div>

                {/* <div className="div1_up"></div>
          <div className="div1_bottom">
            Cyberpunk 2077 discs are $30 today for PS4,PS5,Xbox One and Xbox
            Series X
          </div> */}
              </div>
              <div className="div2">
                <h5>Samsung On The Charge To fraud of Games</h5>
              </div>
              <div className="div3">div3</div>
              <div className="div4">div4</div>
              <div className="div5">div5</div>
              <div className="div6">div6</div>
              <div className="div7">div7</div>
              <div className="div8">
                <div className="div8_left">
                  <h2>Covid-19 Vaccine Arrives Read More About This</h2>
                </div>
                <div className="div8_right">
                  <h2>Vaccine</h2>
                </div>
              </div>
              {/* <div className="div9">div9</div> */}
            </main>
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
