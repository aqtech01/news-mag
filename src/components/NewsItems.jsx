import  news from "../assets/images/news.jpg"
const NewsItems = (props) => {
  const { article } = props;
  return (
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
        <img className="card-img-top" style={{height:"200px",width:"300px"}} src={article.urlToImage?article.urlToImage:news} alt={article.title} />
        <div className="card-body">
          <h5 className="card-title">{article.title.slice(0,50)}</h5>
          <p className="card-text">{article.description? article.description.slice(0,50):""}</p>
          <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
  );
};

export default NewsItems;
