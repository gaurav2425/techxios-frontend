import { Link, useParams } from "react-router-dom";
import { css } from "@emotion/core";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../css/ArticleMedium.css";
import Loading from "../components/Loading";

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
        <div className="article_medium_body article_medium_body_top">
          <div className="article_medium_body_1">
            {newone.slice(0, 4).map((newone) => {
              return (
                <div style={{ paddingBottom: "20px" }}>
                  <div
                    style={{
                      color: "white",
                      borderBottom: "1px dotted white",
                      paddingBottom: "15px",
                    }}
                    className="article_medium_right"
                    id="article_medium_right"
                  >
                    <Link
                      to={`/${newone.name}/${newone.id}/`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      <h2
                        style={{
                          fontWeight: "500",
                        }}
                      >
                        {newone.title}
                      </h2>
                    </Link>

                    <h3
                      style={{
                        fontWeight: "300",
                        fontSize: "13px",
                        marginTop: "4px",
                      }}
                    >
                      {newone.dateint} {newone.month} | {newone.day}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="article_medium_body_2">
            {newone.slice(4, 5).map((newone) => {
              return (
                <div className="article_medium">
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
