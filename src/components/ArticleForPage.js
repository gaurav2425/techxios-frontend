import React, { useEffect, useState } from "react";
import "../css/ArticleForPage.css";
import axios from "../axios";
import { BarLoader } from "react-spinners";
import { Link, useParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import ArticleDetail from "../components/ArticleDetail";
function ArticleForPage({ fetchUrl }) {
  const params = useParams();
  console.log(params);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPerPage, setShowPerPage] = useState(12);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setArticles(request.data);
      setLoading(true);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(articles);

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div className="cards">
      {loading ? (
        <div>
          {articles.slice(pagination.start, pagination.end).map((article) => (
            <div className="card_main">
              <div className="card_main_left">
                <img src={`${article.thumbnail}`}></img>
              </div>
              <div className="card_main_right">
                <Link
                  to={`/${article.name}/${article.id}`}
                  style={{ textDecoration: "none" }}
                  params={article.id}
                >
                  {article.title.length < 90 ? (
                    <h2>{article.title}</h2>
                  ) : (
                    <h2>{article.title.slice(0, 90)}...</h2>
                  )}
                </Link>
                <h5>
                  {article.dateint} {article.month} | {article.day}
                </h5>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <BarLoader
            loading
            size={1114}
            color="rgb(219, 6, 130)"
            style={{ marginBottom: 10 }}
          ></BarLoader>
        </div>
      )}
      <br></br>
      {articles.length == 0 ? (
        <div style={{ height: "150px" }}>
          <h2 style={{ fontWeight: "500", color: "rgb(219, 6, 130)" }}>
            No Content Available
          </h2>
        </div>
      ) : (
        <div className="pagination">
          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={articles.length}
          ></Pagination>
        </div>
      )}

      <br></br>
    </div>
  );
}

export default ArticleForPage;
