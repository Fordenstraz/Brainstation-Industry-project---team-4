import './Article.scss'; 

export default function Article({ headline, date, live, description, imageSrc, watchText, updateText, showHeader }) {
  return (
    <div className="article">
      {showHeader && (
        <div className="article__header">
          {date && <img src={date} alt="Year" className="article__date-image" />}
          {live && <span className="article__live">{live}</span>}
        </div>
      )}
      <h1 className="article__headline">{headline}</h1>
      <p className="article__description">{description}</p>
      <p className="article__updates">{updateText}</p>
      <div className="article__image-container">
        <img src={imageSrc} alt={headline} className="article__image" />
        {watchText && (
          <button className="article__watch-button">
            <span className="article__watch-icon"></span>
            {watchText}
          </button>
        )}
      </div>
      <p className="article__credits">Haiyun Jiang for The New York Times</p>
    </div>
  );
}