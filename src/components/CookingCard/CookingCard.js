import "./CookingCard.scss";

export default function CookingCard() {
  return (
    <>
      <div>
        <a
          className="cooking-card"
          href="https://cooking.nytimes.com/recipes/1025528-eggplant-lasagna"
        >
          <h2 className="cooking-card__header">
            Cooking
          </h2>
          <img
            className="cooking-card__img"
            src="https://static01.nyt.com/images/2024/08/13/multimedia/LH-Eggplant-Lasagnarex-kbmh/LH-Eggplant-Lasagnarex-kbmh-threeByTwoMediumAt2X.jpg?width=16&quality=75&auto=webp"
            alt="cooking"
          />
          <h3 className="cooking-card__headline">
            Eggplant Lasagna
          </h3>
          <span>
            Roasted eggplant takes the
            place of pasta in this
            veggie-heavy riff on
            traditional lasagna.
          </span>
        </a>
      </div>
    </>
  );
}
