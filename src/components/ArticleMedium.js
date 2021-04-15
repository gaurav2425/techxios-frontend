import { Link, useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../css/ArticleMedium.css";

function ArticleMedium({ fetchUrl }) {
  const params = useParams();
  const [newone, setNewone] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data);
      setNewone(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <div className="article_medium_body">
        {newone.map((newone) => {
          return (
            <div className="article_medium">
              <div className="article_top">
                <img src={`https://techrobot.ml${newone.thumbnail}`}></img>
              </div>
              <div className="article_bottom">
                <Link
                  to={`/${newone.name}/${newone.id}/`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {newone.title.length < 75 ? (
                    <h5>{newone.title}</h5>
                  ) : (
                    <h5>{newone.title.slice(0, 75)}...</h5>
                  )}
                </Link>
                <h6>
                  {newone.dateint} {newone.month} | {newone.day}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArticleMedium;
