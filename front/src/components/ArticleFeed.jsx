//@ts-check

/**
 *
 * @param {{ article: import('../remotes').Article }} props
 * @returns
 */
function ArticleFeed({ article }) {
  const {
    author,
    createdAt,
    description,
    favoritesCount,
    slug,
    title,
    updatedAt,
  } = article;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src={`${author.image}`} />
        </a>
        <div className="info">
          <a href="" className="author">
            {author.username}
          </a>
          <span className="date">{createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {favoritesCount}
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
      </a>
    </div>
  );
}

export default ArticleFeed;
