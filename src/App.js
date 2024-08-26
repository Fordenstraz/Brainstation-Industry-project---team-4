import data from "./assets/data/articles.json";

// Styling:
import React from "react";
import "./App.scss";
import yearImage from "../src/assets/year.png";
import forwardChevron from "../src/assets/forwardChevron.svg"; // Import the Chevron icon

// Components:
import Header from "./components/Header";
import HeaderSection from "./components/HeaderSection";
import AutoCarouselShort from "./components/AutoCarouselShort/AutoCarouselShort";
import Article from "./components/Article";
import ArticleCard from "./components/ArticleCard/ArticleCard";
import AthleticCard from "./components/AthleticCard/AthleticCard";
import WirecutterCard from "./components/WirecutterCard/WirecutterCard";
import CookingCard from "./components/CookingCard/CookingCard";
import AudioCard from "./components/AudioCard/AudioCard";
import SpeedDialNav from "./components/SpeedDialNav";
import GameCard from "./components/GameCard";
import AdComponent from "./components/AdComponent";

function App() {
  return (
    <div className="App">
      <Header />

      <HeaderSection />

      <AutoCarouselShort />

      {/* Top News Section */}
      <div className="top-news-section">
        <h2 className="top-news-title">Top News</h2>
        <img src={forwardChevron} alt="forward chevron" className="forward-chevron" />
      </div>

      <Article
        data={data}
        date={yearImage}
        live="LIVE"
        watchText="WATCH WITH ANALYSIS"
        showHeader={true}
      />
	  <AdComponent />

      <div className="more-news-header">
        <h2>More News</h2>
      </div>

      <ArticleCard data={data} />
      <AthleticCard />
      <AudioCard />
      <WirecutterCard />
      <CookingCard />
	  <GameCard />

      <SpeedDialNav />
    </div>
  );
}

export default App;