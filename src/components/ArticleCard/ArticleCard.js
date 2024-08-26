import "./ArticleCard.scss";

export default function ArticleCard(
  props
) {
  return (
    <>
      <ul className="article-card__list">
        {props.data.map((article) => (
          <li key={article.id}>
            <a
              className="article-card"
              href={article.link}
            >
              <div className="article-card__container"></div>
              <p className="article-card__details">
                {article.headline}
              </p>
              <img
                className="article-card__img"
                src={article.image}
                alt={
                  article.description
                }
              ></img>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
