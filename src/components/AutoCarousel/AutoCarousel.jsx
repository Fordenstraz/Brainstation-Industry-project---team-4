// Styling:
import "./AutoCarousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Imports:
import React, { useRef } from "react";
import Slider from "react-slick";

export default function AutoCarousel() {
	let sliderRef = useRef(null);

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnHover: true,
		adaptiveHeight: true,
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
						<div className='auto-carousel__image-container'></div>
					</article>

					<article className='auto-carousel__slide'>
						<h3 className='auto-carousel__title'>Games</h3>
						<div className='auto-carousel__image-container'></div>
					</article>

					<article className='auto-carousel__slide'>
						<h3 className='auto-carousel__title'>Cooking</h3>
						<div className='auto-carousel__image-container'></div>
					</article>

					<article className='auto-carousel__slide'>
						<h3 className='auto-carousel__title'>Wirecutter</h3>
						<div className='auto-carousel__image-container'></div>
					</article>

					<article className='auto-carousel__slide'>
						<h3 className='auto-carousel__title'>The Athletic</h3>
						<div className='auto-carousel__image-container'></div>
					</article>
				</Slider>
			</div>
		</div>
	);
}
