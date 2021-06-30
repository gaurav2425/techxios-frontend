import React, { useEffect, useState } from "react";
import "../css/Articles.css";
import { Link, useParams } from "react-router-dom";
import axios from "../axios";
import { css } from "@emotion/core";
import Loading from "../components/Loading";
function Articles({ ImageSrc, fetchUrl }) {
  const params = useParams();
  const [trending, setTrending] = useState([]);
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
      setTrending(request.data);
      setLoading(true);

      return request;
    }

    fetchData();
  }, [fetchUrl]);
  return (
    <div>
      {loading ? (
        <div>
          {trending.slice(0, 6).map((trending) => {
            return (
              <div className="article_main">
                <div className="article_main_left">
                  <img src={`${trending.thumbnail}`}></img>
                </div>
                <div className="article_main_right">
                  <Link
                    to={`/${trending.name}/${trending.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {trending.title.length > 80 ? (
                      <div className="txt">
                        <h2>{trending.title.slice(0, 80)}...</h2>
                      </div>
                    ) : (
                      <div className="txt">
                        <h2>{trending.title}</h2>
                      </div>
                    )}
                  </Link>
                  <h5>
                    {trending.dateint} {trending.month} | {trending.day}
                  </h5>
                </div>
              </div>
            );
          })}

          {/* {trending.slice(2, 3).map((trending) => {
            return (
              <div className="article_title">
                <Link
                  to={`/${trending.name}/${trending.id}`}
                  style={{ textDecoration: "none" }}
                >
                  {trending.title.length > 70 ? (
                    <div className="txt_title">
                      <h2>{trending.title.slice(0, 70)}...</h2>
                    </div>
                  ) : (
                    <div className="txt_title">
                      <h2>{trending.title}</h2>
                    </div>
                  )}
                </Link>
                <div className="title_trending">
                  <h1 style={{ color: "#e2127A" }}>{trending.caption}</h1>
                </div>
              </div>
            );
          })} */}

          {/* {trending.slice(3, 6).map((trending) => {
            return (
              <div className="article_main">
                <div className="article_main_left">
                  <img src={`${trending.thumbnail}`}></img>
                </div>
                <div className="article_main_right">
                  <Link
                    to={`/${trending.name}/${trending.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {trending.title.length > 70 ? (
                      <div className="txt">
                        <h2>{trending.title.slice(0, 70)}...</h2>
                      </div>
                    ) : (
                      <div className="txt">
                        <h2>{trending.title}</h2>
                      </div>
                    )}
                  </Link>
                  <h5>
                    {trending.dateint} {trending.month} | {trending.day}
                  </h5>
                </div>
              </div>
            );
          })} */}

          {/* {trending.slice(6, 7).map((trending) => {
            return (
              <div className="article_title">
                <Link
                  to={`/${trending.name}/${trending.id}`}
                  style={{ textDecoration: "none" }}
                >
                  {trending.title.length > 70 ? (
                    <div className="txt_title">
                      <h2>{trending.title.slice(0, 70)}...</h2>
                    </div>
                  ) : (
                    <div className="txt_title">
                      <h2>{trending.title}</h2>
                    </div>
                  )}
                </Link>
                <div className="title_trending">
                  <h1 style={{ color: "#e2127A" }}>
                    UPDATE WINDOWS AND YOUR ROUTER
                  </h1>
                </div>
              </div>
            );
          })} */}

          {/* {trending.slice(7, 11).map((trending) => {
            return (
              <div className="article_main">
                <div className="article_main_left">
                  <img src={`${trending.thumbnail}`}></img>
                </div>
                <div className="article_main_right">
                  <Link
                    to={`/${trending.name}/${trending.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {trending.title.length > 70 ? (
                      <div className="txt">
                        <h2>{trending.title.slice(0, 70)}...</h2>
                      </div>
                    ) : (
                      <div className="txt">
                        <h2>{trending.title}</h2>
                      </div>
                    )}
                  </Link>
                  <h5>
                    {trending.dateint} {trending.month} | {trending.day}
                  </h5>
                </div>
              </div>
            );
          })} */}

          {/* {trending.slice(11, 14).map((trending) => {
            return (
              <div className="article_title">
                <Link
                  to={`/${trending.name}/${trending.id}`}
                  style={{ textDecoration: "none" }}
                >
                  {trending.title.length > 70 ? (
                    <div className="txt_title">
                      <h2>{trending.title.slice(0, 70)}...</h2>
                    </div>
                  ) : (
                    <div className="txt_title">
                      <h2>{trending.title}</h2>
                    </div>
                  )}
                </Link>
                <div className="title_trending">
                  <h1 style={{ color: "#e2127A" }}>
                    UPDATE WINDOWS AND YOUR ROUTER
                  </h1>
                </div>
              </div>
            );
          })} */}

          {/* {trending.slice(14).map((trending) => {
            return (
              <div className="article_main">
                <div className="article_main_left">
                  <img src={`${trending.thumbnail}`}></img>
                </div>
                <div className="article_main_right">
                  <Link
                    to={`/${trending.name}/${trending.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {trending.title.length > 70 ? (
                      <div className="txt">
                        <h2>{trending.title.slice(0, 70)}...</h2>
                      </div>
                    ) : (
                      <div className="txt">
                        <h2>{trending.title}</h2>
                      </div>
                    )}
                  </Link>
                  <h5>
                    {trending.dateint} {trending.month} | {trending.day}
                  </h5>
                </div>
              </div>
            );
          })} */}
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

export default Articles;
