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
          {newone.slice(0, 3).map((newone) => {
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

          {newone.slice(3, 4).map((newone) => {
            return (
              <div className="article_medium_title">
                <br></br>
                <marquee>
                  <Link
                    to={`/${newone.name}/${newone.id}/`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {newone.title.length < 75 ? (
                      <h5 style={{ color: "#e2127A" }}>{newone.title}</h5>
                    ) : (
                      <h5>{newone.title.slice(0, 75)}...</h5>
                    )}
                  </Link>
                </marquee>
                <br></br>
                {/* <h6>
                  {newone.dateint} {newone.month} | {newone.day}
                </h6> */}
              </div>
            );
          })}

          {newone.slice(4, 6).map((newone) => {
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

          {newone.slice(6, 9).map((newone) => {
            return (
              <div className="article_medium_title">
                <br></br>
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
                <br></br>
                {/* <h6>
                  {newone.dateint} {newone.month} | {newone.day}
                </h6> */}
              </div>
            );
          })}

          {newone.slice(9, 13).map((newone) => {
            return (
              <div className="article_medium">
                <div className="article_top">
                  <img src={`http://127.0.0.1:8000${newone.thumbnail}`}></img>
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

          {newone.slice(13).map((newone) => {
            return (
              <div className="article_medium_title">
                <br></br>
                <marquee>
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
                </marquee>
                <br></br>
                {/* <h6>
                  {newone.dateint} {newone.month} | {newone.day}
                </h6> */}
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
