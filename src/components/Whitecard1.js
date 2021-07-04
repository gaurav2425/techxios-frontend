import { Link, useParams } from "react-router-dom";
import { css } from "@emotion/core";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../css/WhiteCard1.css";
import Loading from "../components/Loading";

function Whitecard1({ fetchUrl }) {
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
          {newone.slice(5).map((newone) => {
            return (
              <div className="article_medium article_medium_white">
                <div className="article_top">
                  <img src={`${newone.thumbnail}`}></img>
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

export default Whitecard1;
