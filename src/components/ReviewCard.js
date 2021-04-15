import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../css/ReviewCard.css";

function ReviewCard({ fetchUrl, start, end, showPerPage }) {
  const [review, setReview] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data);
      setReview(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="review_card_medium_body">
      {review.slice(start, showPerPage).map((review) => {
        return (
          <div className="review_card_medium">
            <div className="review_card_top">
              <img src={`http://127.0.0.1:8000${review.thumbnail}`}></img>
            </div>
            <div className="review_card_bottom">
              <h5>{review.title}</h5>

              <h6>Monday|16 January</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewCard;
