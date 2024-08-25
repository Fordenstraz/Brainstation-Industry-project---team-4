import data from "./assets/data/articles.json";

// Styling:
import React from "react";
import "./App.scss";
// import articleImage1 from "../src/assets/articleimage.png";
// import articleImage2 from "../src/assets/articleimage2.png";
// import articleImage3 from "../src/assets/articleimage3.png";
// import articleImage4 from "../src/assets/articleimage4.jpg";
import yearImage from "../src/assets/year.png";
// Components:
import Header from "./components/Header";
import HeaderSection from "./components/HeaderSection";
// import AutoCarousel from "./components/AutoCarousel/AutoCarousel";
import AutoCarouselShort from "./components/AutoCarouselShort/AutoCarouselShort";
import Article from "./components/Article";
import ArticleCard from "./components/ArticleCard/ArticleCard";
import AthleticCard from "./components/AthleticCard/AthleticCard";
import WirecutterCard from "./components/WirecutterCard/WirecutterCard";
import CookingCard from "./components/CookingCard/CookingCard";
import AudioCard from "./components/AudioCard/AudioCard";

function App() {
  return (
    <div className="App">
      <Header />

      <HeaderSection />

      <AutoCarouselShort />

      <Article
        data={data}
        date={yearImage}
        live="LIVE"
        watchText="WATCH WITH ANALYSIS"
        // updateText="See new updates 9+"
        showHeader={true}
      />
      <div className="more-news-header">
        <h2>More News</h2>
      </div>

      <ArticleCard data={data} />
      <AthleticCard />
      <AudioCard />
      <WirecutterCard />
      <CookingCard />

      {/* <Article
        headline="Economic Policies Stir Debate in Latest Election Campaigns"
        description="As the election approaches, candidates debate over economic policies that could shape the future of the nation."
        imageSrc={articleImage2}
        watchText="WATCH WITH ANALYSIS"
        updateText="See new updates 5+"
        showHeader={false}
      />

      <Article
        headline="Global Climate Summit Convenes World Leaders in Urgent Talks"
        description="World leaders gather to discuss climate change and the urgent actions needed to address this global crisis."
        imageSrc={articleImage3}
        watchText="WATCH WITH ANALYSIS"
        updateText="See new updates 7+"
        showHeader={false}
      />

      <Article
        headline="Technology Giants Face Scrutiny Over Privacy Concerns"
        description="Major tech companies are under scrutiny as privacy concerns continue to grow among the public and regulators."
        imageSrc={articleImage4}
        watchText="WATCH WITH ANALYSIS"
        updateText="See new updates 10+"
        showHeader={false}
      /> */}
    </div>
  );
}

export default App;
