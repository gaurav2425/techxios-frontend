import React, { useEffect, useState } from "react";
import "../css/Pagination.css";

function Pagination({ showPerPage, onPaginationChange, total }) {
  console.log(showPerPage);
  const [counter, setCounter] = useState(1);
  console.log(counter);
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [counter]);

  const onButtonClick = (type) => {
    //code
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="pagination_main">
      <div>
        {counter === 1 ? (
          ""
        ) : (
          <button className="btn" onClick={() => onButtonClick("prev")}>
            PREV
          </button>
        )}
      </div>
      <div
        style={{
          color: "black",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <h4 style={{ fontWeight: "normal" }}>
          Page {counter} of {Math.ceil(total / showPerPage)}
        </h4>
      </div>
      <div>
        {counter === Math.ceil(total / showPerPage) ? (
          ""
        ) : (
          <button className="btn" onClick={() => onButtonClick("next")}>
            NEXT
          </button>
        )}
      </div>
    </div>
  );
}

export default Pagination;
