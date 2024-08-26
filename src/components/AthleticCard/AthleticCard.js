import "./AthleticCard.scss";
import img from "../../assets/images/athletic.avif";

export default function AthleticCard() {
  return (
    <>
      <div>
        <a
          className="athletic-card"
          href="https://www.nytimes.com/athletic/5721572/2024/08/25/florida-state-playoff-hopes-georgia-tech-loss/"
        >
          <h2 className="athletic-card__header">
            The Athletic
          </h2>
          <img
            className="athletic-card__img"
            src={img}
            alt="athletic"
          />
          <h3 className="athletic-card__headline">
            Loss to Georgia Tech stings,
            but Florida State is very
            much alive in 12-team
            College Football Playoff
          </h3>
          <span>
            Florida State has a loss
            after falling to Georgia
            Tech, but the Seminoles
            aren't out of the hunt
            because of the{" "}
          </span>
        </a>
      </div>
    </>
  );
}
