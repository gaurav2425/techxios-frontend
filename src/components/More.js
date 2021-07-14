import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/More.css";
import { Link } from "react-router-dom";
function More() {
  const [more, setMore] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://techxios.tk/api/more/more-list`
      );

      var items = request.data;

      const shuffled = items.sort(() => 0.5 - Math.random());

      let selected = shuffled.slice(0, 6);
      console.log(selected);
      setMore(selected);

      return request;
    }
    fetchData();
  }, []);
  return (
    <div className="box">
      {/* <h1>I Am More</h1> */}
      <h1>More From Techxios</h1>
      {more.map((mores) => {
        return (
          <div>
            <a href={`/${mores.name}/${mores.id}`} className="anchor-title">
              <h4>{mores.title}</h4>
            </a>
          </div>
        );
      })}
      <br></br>

      <br></br>

      <br></br>
    </div>
  );
}

export default More;
