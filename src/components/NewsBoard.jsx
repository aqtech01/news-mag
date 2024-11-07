import { useEffect, useState } from "react";
import NewsItems from "./NewsItems.jsx";

const NewsBoard = (props) => {
    const {category} = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = ` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.articles) {
            setArticles(data.articles);
            console.log(data.articles);
          } else {
            console.error("No articles found in response:", data);
          }
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        })
        .finally(() => {
          setLoading(false);
        });
  }, [category]);

  return (
      <>
        <h2 className="text-center">
            Latest <span className="badge bg-danger">News</span>
        </h2>
        {loading ? (
            <p>Loading articles...</p>
        ) : (
            articles.map((article, index) => (
                <NewsItems key={index} article={article} />
            ))
        )}
      </>
  );
};

export default NewsBoard;
