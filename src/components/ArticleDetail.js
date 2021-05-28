import React, { useEffect, useState } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { ScaleLoader } from "react-spinners";
import TwitterIcon from "@material-ui/icons/Twitter";
import { css } from "@emotion/core";
import axios from "../axios";
import { Tweet } from "react-twitter-widgets";
import VideoLarge from "../components/VideoLarge";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import "../css/ArticleDetail.css";
import More from "../components/More";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function ArticleDetail({ fetchUrl }) {
  const { id, name } = useParams();
  const [articleDetail, setArticleDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const tweetdesign = {
    width: "500px",
    height: "500px",
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://www.techxios.tk/api/${name}/${name}-detail/${id}/`
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
                <meta
                  id="meta-description"
                  name="description"
                  content={`${articleDetail.para1}`}
                />
              </Helmet>
              <div
                style={{
                  borderTop: "1.5px solid black",

                  padding: "1px",
                  justifyContent: "center",
                  borderRight: "1.5px solid black",
                  alignItems: "center",
                  height: "20px",
                  display: "flex",
                  paddingRight: "5px",
                  paddingLeft: "2px",
                  paddingTop: "2px",
                }}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  <h7 style={{ fontWeight: "normal", color: "black" }}>Home</h7>
                </Link>
              </div>

              <div
                style={{
                  borderTop: "1.5px solid black",
                  height: "20px",
                  alignItems: "center",
                  paddingRight: "5px",
                  paddingLeft: "5px",
                  borderRight: "1.5px solid black",
                  justifyContent: "center",
                  display: "flex",
                  paddingTop: "1px",
                }}
              >
                <Link
                  to={`/${articleDetail.name}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <h7 style={{ fontWeight: "normal" }}>{articleDetail.name}</h7>
                </Link>
              </div>
            </div>

            <h1>{articleDetail.title}</h1>

            <h3>{articleDetail.subtitle}</h3>

            <h4 style={{ fontWeight: "400" }}>
              {articleDetail.month} {articleDetail.dateint} {articleDetail.date}{" "}
              | {articleDetail.now} EST
            </h4>

            <div className="social_icons">
              <div className="icon1">
                <a href="https://www.facebook.com/Tech-Robot-102211541965232">
                  <FacebookIcon
                    className="social_icon"
                    style={{
                      fontSize: 30,
                      color: "#4267B2",
                      // background: "red",
                      borderRadius: "50%",

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

                      // background: "red",
                      borderRadius: "50%",
                      // color: "black",
                      cursor: "pointer",
                    }}
                  ></InstagramIcon>
                </a>
              </div>

              <div className="icon3">
                <a href="https://twitter.com/techxios">
                  <TwitterIcon
                    className="social_icon"
                    style={{
                      fontSize: 30,
                      color: "#00acee",
                      // background: "#00acee",
                      borderRadius: "50%",
                      // color: "black",
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
                      // color: "black",
                      // color: "white",
                      // background: "#0e76a8",
                      borderRadius: "50%",
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
            <img src={`${articleDetail.thumbnail}`}></img>
            <h4
              style={{
                textAlign: "start",
                color: "#646464",
                fontWeight: 300,
                fontSize: "15px",
              }}
            >
              {articleDetail.thumbnailcredit}
            </h4>
          </div>
          <div className="article_description">
            <h4 className="para1">{articleDetail.para1}</h4>
            <div className="para2_quote1">
              <h4 style={{ marginTop: 7 }}>{articleDetail.para2}</h4>
              {/* <br></br> */}
              <h2>{articleDetail.quote1}</h2>
              {/* <br></br> */}
            </div>
            {articleDetail.para3 == "" ? (
              <div></div>
            ) : (
              <h4 style={{ marginTop: 7 }}>{articleDetail.para3}</h4>
            )}

            {articleDetail.youtubevideo == "" ? (
              <div></div>
            ) : (
              <div className="ytvideo">
                <iframe
                  width="100%"
                  src={
                    `${articleDetail.youtubevideo}` +
                    "?&autoplay=1&loop=1&mute=1"
                  }
                  frameborder="0"
                  allow="accelerometer; autoplay; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h4
                  style={{
                    textAlign: "start",
                    color: "#646464",
                    fontWeight: 400,
                    fontSize: "15px",
                  }}
                >
                  {articleDetail.youtubevideocredit}
                </h4>
              </div>
            )}

            {articleDetail.para4 == "" ? (
              <div></div>
            ) : (
              <h4 style={{ marginTop: 7 }}>{articleDetail.para4}</h4>
            )}

            <h4 style={{ marginTop: 7 }}>{articleDetail.para5}</h4>
          </div>

          <div
            className="image1"
            style={
              {
                // background: "red",
              }
            }
          >
            <img src={`${articleDetail.image}`}></img>
            <h4>{articleDetail.imagecredit}</h4>
          </div>

          <div className="article_description article_description2 ">
            <h4>{articleDetail.para6}</h4>

            <h4>{articleDetail.para7}</h4>

            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div className="tweet_container">
                <Tweet
                  tweetId={`${articleDetail.tweetid}`}
                  style={tweetdesign}
                ></Tweet>
              </div>
            </div>
            <h4 style={{ marginTop: 7 }}>{articleDetail.para8}</h4>

            <h4 style={{ marginTop: 7 }}>{articleDetail.para9}</h4>
            {articleDetail.videosrc === "" ? (
              <div></div>
            ) : (
              <VideoLarge></VideoLarge>
            )}
            {articleDetail.para10 === "" ? (
              <div></div>
            ) : (
              <h4 style={{ marginTop: 7 }}>{articleDetail.para10}</h4>
            )}

            {articleDetail.quote2 === "" ? (
              <div></div>
            ) : (
              <h2 style={{ marginTop: "25px", marginBottom: "25px" }}>
                {articleDetail.quote2}
              </h2>
            )}

            {articleDetail.para11 === "" ? (
              <div></div>
            ) : (
              <h4 style={{ marginTop: 7 }}>{articleDetail.para11}</h4>
            )}
            <br></br>
          </div>

          <More></More>
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
