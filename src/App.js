// Styling:
import React from "react";
import articleImage1 from "../src/assets/articleimage.png";
import articleImage2 from "../src/assets/articleimage2.png";
import articleImage3 from "../src/assets/articleimage3.png";
import articleImage4 from "../src/assets/articleimage4.jpg";
import yearImage from "../src/assets/year.png";
// Components:
import Header from "./components/Header";
import HeaderSection from "./components/HeaderSection";
import AutoCarousel from "./components/AutoCarousel/AutoCarousel";
import Article from "./components/Article";

function App() {
	return (
		<div className='App'>
			<Header />
			<HeaderSection />
			<AutoCarousel />
			<Article
				headline='At Convention, Democrats Celebrate Harris as Nominee in Ceremonial Vote'
				date={yearImage}
				live='LIVE'
				description='The vote came ahead of scheduled speeches by Barack and Michelle Obama, and Bernie Sanders. Meanwhile, Kamala Harris and Tim Walz will hold a rally in Wisconsin.'
				imageSrc={articleImage1}
				watchText='WATCH WITH ANALYSIS'
				updateText='See new updates 9+'
				showHeader={true}
			/>

			<Article
				headline='Economic Policies Stir Debate in Latest Election Campaigns'
				description='As the election approaches, candidates debate over economic policies that could shape the future of the nation.'
				imageSrc={articleImage2}
				watchText='WATCH WITH ANALYSIS'
				updateText='See new updates 5+'
				showHeader={false}
			/>

			<Article
				headline='Global Climate Summit Convenes World Leaders in Urgent Talks'
				description='World leaders gather to discuss climate change and the urgent actions needed to address this global crisis.'
				imageSrc={articleImage3}
				watchText='WATCH WITH ANALYSIS'
				updateText='See new updates 7+'
				showHeader={false}
			/>

			<Article
				headline='Technology Giants Face Scrutiny Over Privacy Concerns'
				description='Major tech companies are under scrutiny as privacy concerns continue to grow among the public and regulators.'
				imageSrc={articleImage4}
				watchText='WATCH WITH ANALYSIS'
				updateText='See new updates 10+'
				showHeader={false}
			/>
		</div>
	);
}

export default App;
