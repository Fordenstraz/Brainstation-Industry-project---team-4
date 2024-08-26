import "./Article.scss";

export default function Article({
  data,
  date,
  live,
  showHeader,
  watchText,
}) {
  return (
    <div className="article">
      {showHeader && (
        <div className="article__header">
          {date && (
            <img
              src={date}
              alt="Year"
              className="article__date-image"
            />
          )}
          {live && (
            <span className="article__live">
              {live}
            </span>
          )}
        </div>
      )}
      <a href={data[0].link}>
        <div className="article__image-container">
          <img
            src={data[0].image}
            alt={data[0].headline}
            className="article__image"
          />
          {watchText && (
            <button className="article__watch-button">
              <span className="article__watch-icon"></span>
              {watchText}
            </button>
          )}
        </div>
        <h1 className="article__headline">
          {data[0].headline}
        </h1>
        <p className="article__description">
          {data[0].description}
        </p>
      </a>
    </div>
  );
}
