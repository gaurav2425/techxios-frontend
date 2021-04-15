import "../css/Article_large.css";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";
function Article_large({ fetchUrl }) {
  const [hot, setHot] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data);
      setHot(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      {hot.map((hot) => {
        return (
          <div className="article_large">
            <div className="articel_large_top">
              <img src={`https://techrobot.ml${hot.thumbnail}`}></img>
            </div>
            <div className="articel_large_bottom">
              <div className="articel_large_bottom_card">
                <Link
                  to={`/${hot.name}/${hot.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {hot.title.length < 62 ? (
                    <h5>{hot.title}</h5>
                  ) : (
                    <h5>{hot.title.slice(0, 62)}...</h5>
                  )}
                  {/* {hot.title}-{hot.title.length} */}
                </Link>

                {/* <h5>{hot.title}</h5> */}
                {hot.description.length < 180 ? (
                  <h6>{hot.description}</h6>
                ) : (
                  <h6>{hot.description.slice(0, 180)}...</h6>
                )}
                {/* {hot.description} */}
                <br></br>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Article_large;
