import "../css/Article_large.css";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
function Article_large({ fetchUrl }) {
  const [hot, setHot] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data);
      setHot(request.data);
      setLoading(true);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      {loading ? (
        <div>
          {hot.slice(0, 2).map((hot) => {
            return (
              <div className="article_large">
                <div className="articel_large_top">
                  <img src={`${hot.thumbnail}`}></img>
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
                    </Link>

                    {hot.description.length < 180 ? (
                      <h6>{hot.description}</h6>
                    ) : (
                      <h6>{hot.description.slice(0, 180)}...</h6>
                    )}
                    <br></br>
                  </div>
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

export default Article_large;

{
  /* <BarLoader
loading
css={override}
size={1114}
color="rgb(219, 6, 130)"
style={{ marginBottom: 10, Zindex: 111 }}
></BarLoader> */
}
