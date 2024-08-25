import "./AudioCard.scss";

export default function AudioCard() {
  return (
    <>
      <div className="audio">
        <h2 className="audio__header">
          Audio Podcasts
        </h2>
        <div>
          <a
            className="audio__card"
            href="https://www.nytimes.com/2024/08/22/podcasts/the-daily/georgia-election-board.html"
          >
            <img
              className="audio__image"
              src="https://static01.nyt.com/images/2024/08/22/multimedia/22Daily-GA-elecitons-fpwt/22Daily-GA-elecitons-fpwt-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
              alt="The Republican Plan to Challenge a Harris Victory"
            />
            <div className="audio__details">
              <span>
                The Republican Plan to
                Challenge a Harris
                Victory
              </span>
              <span className="audio__time">
                15 min listen
              </span>
            </div>
          </a>
        </div>
        <div>
          <a
            className="audio__card"
            href="https://www.nytimes.com/2024/08/22/podcasts/rfk-drop-out-waltz-speech.html"
          >
            <img
              className="audio__image"
              src="https://static01.nyt.com/images/2024/08/22/multimedia/22headlines-wlhf/22headlines-wlhf-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
              alt="Kennedy Is Expected to Drop Out, and Revised Data Shows Job Market Cracks"
            />
            <div className="audio__details">
              <span>
                Kennedy Is Expected to
                Drop Out, and Revised
                Data Shows Job Market
                Cracks
              </span>
              <span className="audio__time">
                15 min listen
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
