import React from "react";
import "../css/Loading.css";
import { css } from "@emotion/core";
import {
  BarLoader,
  ScaleLoader,
  SyncLoader,
  BeatLoader,
  BounceLoader,
  SkewLoader,
  SquareLoader,
  PuffLoader,
} from "react-spinners";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function Loading({ loading }) {
  return (
    <div>
      {loading ? (
        <div></div>
      ) : (
        <div
          className="loading_main"
          style={{
            position: "fixed",
            height: "100vh",
            width: "100vw",
            background: "black",
            top: "0px",
            overflow: "hidden",
            left: "0px",
            zIndex: "1111",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            <ScaleLoader
              loading
              css={override}
              size={11}
              color="rgb(219, 6, 130)"
              style={{ marginBottom: 10, Zindex: 111 }}
            ></ScaleLoader>
          </h1>
        </div>
      )}
    </div>
  );
}

export default Loading;
