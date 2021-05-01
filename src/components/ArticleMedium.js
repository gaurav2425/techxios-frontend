import { Link, useParams } from "react-router-dom";
import { css } from "@emotion/core";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../css/ArticleMedium.css";
import Loading from "../components/Loading";
import { BarLoader } from "react-spinners";

function ArticleMedium({ fetchUrl }) {
  const params = useParams();
  const [newone, setNewone] = useState([]);
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data);
      setNewone(request.data);
      setLoading(true);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      {loading ? (
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
      ) : (
        <div
          style={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <Loading loading={loading}></Loading>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleMedium;
