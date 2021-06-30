import React from "react";

function ArticleRightCard() {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <div
        style={{
          color: "white",
          borderBottom: "1px dotted white",
          paddingBottom: "15px",
        }}
        className="article_medium_right"
      >
        <h2
          style={{
            fontWeight: "500",
          }}
        >
          $3.7B valuation in Series F raise
        </h2>
        <h3
          style={{
            fontWeight: "300",
            fontSize: "13px",
            marginTop: "4px",
          }}
        >
          24 Aug Monday
        </h3>
      </div>
    </div>
  );
}

export default ArticleRightCard;
