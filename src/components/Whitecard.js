import React, { useEffect, useState } from "react";
import "../css/Whitecard.css";
import { Link, useParams } from "react-router-dom";
import axios from "../axios";
import { css } from "@emotion/core";
import Loading from "../components/Loading";
import CardLarge from "./CardLarge";
import "../css/Whitecard.css";
function Whitecard({ ImageSrc, fetchUrl }) {
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
    <div className="article_main_white">
      {loading ? (
        <div>
          {trending.slice(6, 9).map((trending) => {
            return (
              <div className="article_main_whitecard article_main_white_card">
                <div className="article_main_left_whitecard">
                  <img src={`${trending.thumbnail}`}></img>
                </div>
                <div className="article_main_right_whitecard">
                  <Link
                    to={`/${trending.name}/${trending.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {trending.title.length > 80 ? (
                      <div className="txt_white">
                        <h2>{trending.title.slice(0, 80)}...</h2>
                      </div>
                    ) : (
                      <div className="txt_white">
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

          {trending.slice(9, 10).map((trending) => {
            return (
              <div className="card_large">
                <div className="card_large_upper">
                  <Link
                    to={`/${trending.name}/${trending.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h2>{trending.title}</h2>
                  </Link>
                  <h3>
                    {trending.dateint} {trending.month} | {trending.day}
                  </h3>
                </div>
                <div className="card_large_lower">
                  <img src={`${trending.thumbnail}`}></img>
                </div>
              </div>
            );
          })}

          {trending.slice(10).map((trending) => {
            return (
              <div className="article_main_whitecard article_main_white_card">
                <div className="article_main_left_whitecard">
                  <img src={`${trending.thumbnail}`}></img>
                </div>
                <div className="article_main_right_whitecard">
                  <Link
                    to={`/${trending.name}/${trending.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {trending.title.length > 80 ? (
                      <div className="txt_white">
                        <h2>{trending.title.slice(0, 80)}...</h2>
                      </div>
                    ) : (
                      <div className="txt_white">
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
      {/* <CardLarge></CardLarge> */}
    </div>
  );
}

export default Whitecard;
