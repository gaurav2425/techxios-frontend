import React, { useEffect, useState } from "react";
import axios from "../axios";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import "../css/WhiteLarge.css";

function WhiteLarge({ fetchUrl }) {
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
    <div className="whitelarge_main_container">
      {hot.slice(2).map((hot) => {
        return (
          <div className="whitelarge_main">
            <div className="whitelarge_main_left">
              <Link
                to={`/${hot.name}/${hot.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <h5>{hot.title}</h5>
              </Link>
            </div>
            <div className="whitelarge_main_middle">
              {hot.description.length < 250 ? (
                <h5>{hot.description}</h5>
              ) : (
                <h5>{hot.description.slice(0, 250)}..</h5>
              )}
            </div>
            <div className="whitelarge_main_right">
              <img src={`${hot.thumbnail}`}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WhiteLarge;

// {loading ? (
//   <div>
//     {hot.slice(0, 1).map((hot) => {
//       return (
//         <div className="article_large">
//           <div className="articel_large_bottom">
//             <div className="articel_large_bottom_card">
//               <Link
//                 to={`/${hot.name}/${hot.id}`}
//                 style={{ textDecoration: "none", color: "white" }}
//               >
//                 {hot.title.length < 62 ? (
//                   <h5>{hot.title}</h5>
//                 ) : (
//                   <h5>{hot.title.slice(0, 62)}...</h5>
//                 )}
//               </Link>

//               {hot.description.length < 180 ? (
//                 <h6>{hot.description}</h6>
//               ) : (
//                 <h6>{hot.description.slice(0, 180)}...</h6>
//               )}
//               <div className="whitelarge_main_right">
//                 <img src={`${hot.thumbnail}`}></img>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// ) : (
//   <div
//     style={{
//       height: "90vh",
//       display: "flex",
//       justifyContent: "center",
//       flexDirection: "column",
//     }}
//   >
//     <div>
//       <Loading loading={loading}></Loading>
//     </div>
//   </div>
// )}
