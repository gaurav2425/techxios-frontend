import React, { useEffect, useState } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { BarLoader, ScaleLoader } from "react-spinners";
import TwitterIcon from "@material-ui/icons/Twitter";
import { css } from "@emotion/core";
import axios from "../axios";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import "../css/ArticleDetail.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function ArticleDetail({ fetchUrl }) {
  const { id, name } = useParams();
  const [articleDetail, setArticleDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [yt, setYt] = useState([]);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://techrobot.ml/api/${name}/${name}-detail/${id}/`
      );
      console.log(articleDetail);
      setArticleDetail(request.data);
      setLoading(true);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      {loading ? (
        <div className="cards">
          <div className="article_top">
            <div
              style={{
                display: "flex",
              }}
            >
              <Helmet>
                <title>{articleDetail.title}</title>
              </Helmet>
              <div
                style={{
                  borderTop: "1px solid black",
                  width: "60px",
                  justifyContent: "center",
                  borderRight: "1px solid black",
                  display: "flex",
                }}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  <h4>Home</h4>
                </Link>
              </div>

              <div
                style={{
                  borderTop: "1px solid black",
                  width: "80px",
                  borderRight: "1px solid black",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Link
                  to={`/${articleDetail.name}`}
                  style={{ textDecoration: "none" }}
                >
                  <h4>{articleDetail.name}</h4>
                </Link>
              </div>
            </div>
            <BarLoader
              loading
              size={1114}
              color="rgb(219, 6, 130)"
              style={{ marginBottom: 10 }}
            ></BarLoader>
            <h1>{articleDetail.title}</h1>

            <h3>{articleDetail.subtitle}</h3>

            <h4>March 2 2021 | {articleDetail.now} IST</h4>
            <div className="social_icons">
              <div className="icon1">
                <a href="https://www.facebook.com/Tech-Robot-102211541965232">
                  <FacebookIcon
                    className="social_icon"
                    style={{
                      fontSize: 30,
                      color: "#4267B2",
                      cursor: "pointer",
                    }}
                  ></FacebookIcon>
                </a>
              </div>

              <div className="icon2">
                <a href="https://www.instagram.com/thetechrobot/">
                  <InstagramIcon
                    className="social_icon"
                    style={{
                      fontSize: 30,
                      color: "#cd486b",
                      cursor: "pointer",
                    }}
                  ></InstagramIcon>
                </a>
              </div>

              <div className="icon3">
                <a href="https://twitter.com/thetechrobot">
                  <TwitterIcon
                    className="social_icon"
                    style={{
                      fontSize: 30,
                      color: "#00acee",
                      cursor: "pointer",
                    }}
                  ></TwitterIcon>
                </a>
              </div>

              <div className="icon3">
                <a href="https://www.linkedin.com/in/tech-robot-307a6520a/">
                  <LinkedInIcon
                    className="social_icon"
                    style={{
                      fontSize: 30,
                      color: "#0e76a8",
                      cursor: "pointer",
                    }}
                  ></LinkedInIcon>
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />

          <div className="image">
            <img src={`https://techrobot.ml${articleDetail.thumbnail}`}></img>
          </div>
          <div className="article_description">
            <h4>{articleDetail.para1}</h4>
            <h4 style={{ marginTop: 7 }}>{articleDetail.para2}</h4>
            <h4 style={{ marginTop: 7 }}>{articleDetail.para3}</h4>
            <br></br>
            <div className="ytvideo">
              <iframe
                width="100%"
                src={
                  `${articleDetail.youtubevideo}` + "?&autoplay=1&loop=1&mute=1"
                }
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h4 style={{ marginTop: 7 }}>{articleDetail.para4}</h4>
            <br></br>
            <h4 style={{ marginTop: 7 }}>{articleDetail.para5}</h4>
            <br></br>
            <div className="image1">
              <div>
                <img src={`https://techrobot.ml${articleDetail.image}`}></img>
              </div>
            </div>
            <h4 style={{ marginTop: 7 }}>{articleDetail.para6}</h4>
            <br></br>
            <h4 style={{ marginTop: 7 }}>{articleDetail.para7}</h4>
            <br></br>
            <br></br>
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
            <ScaleLoader
              loading
              css={override}
              size={1114}
              color="rgb(219, 6, 130)"
              style={{ marginBottom: 10, Zindex: 111 }}
            ></ScaleLoader>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleDetail;
