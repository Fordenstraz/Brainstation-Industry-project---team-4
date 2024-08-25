import "./WirecutterCard.scss";

export default function WirecutterCard() {
  return (
    <>
      <div>
        <a
          className="wirecutter-card"
          href="https://www.nytimes.com/wirecutter/money/rei-labor-day-sale-2024/"
        >
          <h2 className="wirecutter-card__header">
            Wirecutter
          </h2>
          <img
            className="wirecutter-card__img"
            src="https://cdn.thewirecutter.com/wp-content/media/2024/08/rei-sale-2048px-2x1-1.jpg?width=1024&quality=75&crop=2:1&auto=webp"
            alt="wirecutter"
          />
          <h3 className="wirecutter-card__headline">
            I’m an Outdoor Expert at
            Wirecutter. Here Are My
            Favorite REI Labor Day Sale
            Deals.
          </h3>
          <span>
            REI’s annual Labor Day sale
            is here. These are the best
            deals we’ve seen on
            Wirecutter-approved camping,
            hiking, and other outdoor
            gear.
          </span>
        </a>
      </div>
    </>
  );
}
