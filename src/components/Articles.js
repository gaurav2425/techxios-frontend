import React, { useEffect, useState } from "react";
import "../css/Articles.css";
import { Link, useParams } from "react-router-dom";
import axios from "../axios";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/core";
import Video from "../components/Video";
function Articles({ ImageSrc, fetchUrl }) {
  const params = useParams();
  const [trending, setTrending] = useState([]);
  const [title, setTitle] = useState([]);
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
          {trending.map((trending) => {
            return (
              <div className="article_main">
                <div className="article_main_left">
                  <img
                    src={`https://www.techrobot.ml${trending.thumbnail}`}
                  ></img>
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
            <BarLoader
              loading
              css={override}
              size={1114}
              color="rgb(219, 6, 130)"
              style={{ marginBottom: 10, Zindex: 111 }}
            ></BarLoader>
          </div>
        </div>
      )}
    </div>
  );
}

export default Articles;
