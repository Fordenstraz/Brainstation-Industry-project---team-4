// Styling:
import "./AutoCarousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Imports:
import React, { useRef } from "react";
import Slider from "react-slick";
import audioPage from "../../assets/images/audio_page.png";
import gamePage from "../../assets/images/game_page.png";
import cookingPage from "../../assets/images/cooking_page.png";
import wirecutterPage from "../../assets/images/wirecutter_page.png";
import athleticPage from "../../assets/images/athletic_page.png";

export default function AutoCarousel() {
	let sliderRef = useRef(null);

	const settings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnHover: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1070,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 740,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	return (
		<div className='auto-carousel'>
			<div className='slider-container'>
				<h2>Auto Play Carousel Demo</h2>

				<Slider
					ref={slider => (sliderRef = slider)}
					{...settings}>
					<article className='auto-carousel__slide'>
						<h3 className='auto-carousel__title'>Audio</h3>
						<div className='auto-carousel__image-container'>
							<a href='https://www.nytimes.com/spotlight/podcasts'>
								<img
									src={audioPage}
									alt='A sign that reads vote here.'
									className='auto-carousel__image'
								/>
							</a>
						</div>
					</article>

					<article className='auto-carousel__slide'>
						<h3 className='auto-carousel__title'>Games</h3>
						<div className='auto-carousel__image-container'>
							<a href='https://www.nytimes.com/crosswords'>
								<img
									src={gamePage}
									alt='Various games offered by the New York Times.'
									className='auto-carousel__image'
								/>
							</a>
						</div>
					</article>

					<article className='auto-carousel__slide'>
						<h3 className='auto-carousel__title'>Cooking</h3>
						<div className='auto-carousel__image-container'>
							<a href='https://cooking.nytimes.com/'>
								<img
									src={cookingPage}
									alt='A cucumber salad topped with thinly sliced red onion.'
									className='auto-carousel__image'
								/>
							</a>
						</div>
					</article>

					<article className='auto-carousel__slide'>
						<h3 className='auto-carousel__title'>Wirecutter</h3>
						<div className='auto-carousel__image-container'>
							<a href='https://www.nytimes.com/wirecutter/'>
								<img
									src={wirecutterPage}
									alt='A sphere filled with smoke.'
									className='auto-carousel__image'
								/>
							</a>
						</div>
					</article>

					<article className='auto-carousel__slide'>
						<h3 className='auto-carousel__title'>The Athletic</h3>
						<div className='auto-carousel__image-container'>
							<a href='https://www.nytimes.com/athletic/'>
								<img
									src={athleticPage}
									alt="Manager of the Seattle Mariner's baseball team, Jerry Dipoto."
									className='auto-carousel__image'
								/>
							</a>
						</div>
					</article>
				</Slider>
			</div>
		</div>
	);
}
