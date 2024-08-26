import { useState, useEffect, useMemo } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import nytLogo from "../assets/TNYT.png";
import nytGames from "../assets/TNYT Games.png";
import nytAudio from "../assets/TNYT Audio.jpg";
import nytCooking from "../assets/TNYT Cooking.jpg";
import nytAthletic from "../assets/TNYT Athletic.jpeg";
import nytWirecutter from "../assets/TNYT Wirecutter.png";
import spellingBeeLogo from "../assets/spellingbee.svg";
import wordlelogo from "../assets/wordle.svg";
import burgerRecipeImage from "../assets/Smash Burger.jpg";
import manCityLogo from "../assets/Man City.png";
import ipswichLogo from "../assets/Ipswich.png";
import manCityVsIpswichImage from "../assets/mancityVsIpswich.jpg";
import wirecutterArticleLogo from "../assets/wirecutterArticleLogo.avif";
import audioImage from "../assets/podcast.jpg";

const actions = [
	{
		icon: (
			<img
				src={nytCooking}
				alt='Cooking'
				style={{ width: 40, height: 40, borderRadius: "50%" }}
			/>
		),
		name: "Cooking",
	},
	{
		icon: (
			<img
				src={nytGames}
				alt='Games'
				style={{ width: 40, height: 40, borderRadius: "50%" }}
			/>
		),
		name: "Games",
	},
	{
		icon: (
			<img
				src={nytAudio}
				alt='Audio'
				style={{ width: 40, height: 40, borderRadius: "50%" }}
			/>
		),
		name: "Audio",
	},
	{
		icon: (
			<img
				src={nytAthletic}
				alt='Athletic'
				style={{ width: 40, height: 40, borderRadius: "50%" }}
			/>
		),
		name: "Athletic",
	},
	{
		icon: (
			<img
				src={nytWirecutter}
				alt='Wirecutter'
				style={{ width: 40, height: 40, borderRadius: "50%" }}
			/>
		),
		name: "Wirecutter",
	},
];

export default function SpeedDialNav() {
	const [openModal, setOpenModal] = useState(false);
	const [currentIcon, setCurrentIcon] = useState(nytLogo);
	const [animationActive, setAnimationActive] = useState(true);
	const [currentContent, setCurrentContent] = useState("");
	const icons = useMemo(() => [nytLogo, nytCooking, nytGames, nytAudio], []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIcon(prevIcon => {
				const currentIndex = icons.indexOf(prevIcon);
				const nextIndex = (currentIndex + 1) % icons.length;
				return icons[nextIndex];
			});
		}, 5000);

		const stopAnimations = () => {
			clearInterval(intervalId);
			setAnimationActive(false);
		};

		const timeoutId = setTimeout(stopAnimations, 5000);

		return () => {
			clearInterval(intervalId);
			clearTimeout(timeoutId);
		};
	}, [icons]);

	const handleNavigation = name => {
		if (name === "Cooking") {
			setCurrentContent("cooking");
			setOpenModal(true);
		} else if (name === "Games") {
			setCurrentContent("games");
			setOpenModal(true);
		} else if (name === "Athletic") {
			setCurrentContent("athletic");
			setOpenModal(true);
		} else if (name === "Wirecutter") {
			setCurrentContent("wirecutter");
			setOpenModal(true);
		} else if (name === "Audio") {
			setCurrentContent("audio");
			setOpenModal(true);
		} else {
			alert(`Navigating to ${name}`);
		}
	};

	return (
		<>
			<SpeedDial
				ariaLabel='NYT Navigation'
				sx={{
					position: "fixed",
					bottom: 16,
					right: 16,
					"& .MuiSpeedDial-fab": {
						animation: animationActive
							? "pulse 2s infinite"
							: "none",
					},
				}}
				icon={
					<img
						src={currentIcon}
						alt='NYT Logo'
						style={{
							width: 56,
							height: 56,
							borderRadius: "50%",
							transition:
								"opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
							animation: animationActive
								? "bounce 2s infinite, glow 1.5s infinite alternate"
								: "none",
						}}
					/>
				}>
				{actions.map(action => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						onClick={() => handleNavigation(action.name)}
					/>
				))}
			</SpeedDial>

			{/* Modals */}
			<Dialog
				open={openModal}
				onClose={() => setOpenModal(false)}
				maxWidth='md'
				fullWidth
				TransitionComponent={Slide}
				TransitionProps={{ direction: "up" }}>
				<DialogTitle>
					{currentContent.charAt(0).toUpperCase() +
						currentContent.slice(1)}
				</DialogTitle>
				<DialogContent>
					{/* Cooking Modal */}
					{currentContent === "cooking" && (
						<>
							<Typography
								variant='h5'
								align='center'
								gutterBottom>
								Featured Recipe
							</Typography>
							<Card
								sx={{
									maxWidth: "600px",
									margin: "0 auto",
									textAlign: "center",
									boxShadow: "none",
								}}>
								<CardMedia
									component='img'
									image={burgerRecipeImage}
									alt='Burger Recipe'
									sx={{
										borderRadius: "4px",
										marginBottom: 2,
									}}
								/>
								<CardContent>
									<Typography
										variant='h6'
										sx={{ fontWeight: "bold" }}>
										Smash Burgers
									</Typography>
									<Typography
										variant='body2'
										color='text.secondary'
										sx={{ marginBottom: 2 }}>
										Discover the deliciousness of our smash
										burgers, featuring a crispy exterior and
										juicy interior. Perfect for any
										occasion!
									</Typography>
									<Button
										variant='outlined'
										sx={{
											backgroundColor: "#f5f5f5",
											border: "1px solid #ccc",
											color: "#333",
											"&:hover": {
												backgroundColor: "#e0e0e0",
											},
											padding: "10px 20px",
											borderRadius: "20px",
										}}
										onClick={() =>
											window.open(
												"https://cooking.nytimes.com/",
												"_blank"
											)
										}>
										View more on NYT cooking
									</Button>
								</CardContent>
							</Card>
						</>
					)}

					{/* Games Modal */}
					{currentContent === "games" && (
						<>
							<Typography
								variant='h5'
								align='center'
								gutterBottom>
								Today's Puzzle
							</Typography>
							<Grid
								container
								spacing={2}
								justifyContent='center'>
								{/* Spelling Bee */}
								<Grid
									item
									xs={12}
									sm={6}
									md={6}>
									<Card
										sx={{
											backgroundColor: "#F7DA21",
											textAlign: "center",
										}}>
										<CardMedia
											component='img'
											image={spellingBeeLogo}
											alt='Spelling Bee'
											sx={{
												width: 60,
												height: 60,
												margin: "20px auto",
											}}
										/>
										<Typography
											variant='h6'
											sx={{ fontWeight: "bold" }}>
											Spelling Bee
										</Typography>
										<Box
											sx={{
												backgroundColor: "#FFFFFF",
												width: "100%",
												height: "140.8px",
												padding: "20px 0 20px 0",
												display: "flex",
												flexDirection: "column",
												justifyContent: "space-between",
												alignItems: "center",
												margin: "auto",
											}}>
											<Button
												variant='contained'
												sx={{
													width: "238.67px",
													height: "44px",
													padding: "10.69px 0",
													borderRadius: "22px",
													border: "1px solid #CCCCCC",
													backgroundColor: "#FFFFFF",
													color: "#000",
													"&:hover": {
														backgroundColor:
															"#f5f5f5",
													},
													marginBottom: "8px",
												}}
												onClick={() =>
													window.open(
														"https://www.nytimes.com/puzzles/spelling-bee",
														"_blank"
													)
												}>
												Play
											</Button>
											<Button
												variant='outlined'
												sx={{
													width: "238.67px",
													height: "44px",
													padding: "10.69px 0",
													borderRadius: "22px",
													border: "1px solid #CCCCCC",
													backgroundColor: "#FFFFFF",
													color: "#000",
													"&:hover": {
														backgroundColor:
															"#f5f5f5",
													},
												}}
												onClick={() =>
													window.open(
														"https://www.nytimes.com/puzzles/spelling-bee/archive",
														"_blank"
													)
												}>
												Past Puzzles
											</Button>
										</Box>
									</Card>
								</Grid>

								{/* Wordle */}
								<Grid
									item
									xs={12}
									sm={6}
									md={6}>
									<Card
										sx={{
											backgroundColor: "#E3E3E1",
											textAlign: "center",
										}}>
										<CardMedia
											component='img'
											image={wordlelogo}
											alt='Wordle'
											sx={{
												width: 60,
												height: 60,
												margin: "20px auto",
											}}
										/>
										<Typography
											variant='h6'
											sx={{ fontWeight: "bold" }}>
											Wordle
										</Typography>
										<Box
											sx={{
												backgroundColor: "#FFFFFF",
												width: "100%",
												height: "140.8px",
												padding: "20px 0 20px 0",
												display: "flex",
												flexDirection: "column",
												justifyContent: "space-between",
												alignItems: "center",
												margin: "auto",
											}}>
											<Button
												variant='contained'
												sx={{
													width: "238.67px",
													height: "44px",
													padding: "10.69px 0",
													borderRadius: "22px",
													border: "1px solid #CCCCCC",
													backgroundColor: "#FFFFFF",
													color: "#000",
													"&:hover": {
														backgroundColor:
															"#f5f5f5",
													},
													marginBottom: "8px",
												}}
												onClick={() =>
													window.open(
														"https://www.nytimes.com/games/wordle/index.html",
														"_blank"
													)
												}>
												Play
											</Button>
											<Button
												variant='outlined'
												sx={{
													width: "238.67px",
													height: "44px",
													padding: "10.69px 0",
													borderRadius: "22px",
													border: "1px solid #CCCCCC",
													backgroundColor: "#FFFFFF",
													color: "#000",
													"&:hover": {
														backgroundColor:
															"#f5f5f5",
													},
												}}
												onClick={() =>
													window.open(
														"https://www.nytimes.com/games/wordle/archive",
														"_blank"
													)
												}>
												Archive
											</Button>
										</Box>
									</Card>
								</Grid>
							</Grid>

							<Button
								variant='outlined'
								sx={{
									marginTop: 3,
									display: "block",
									marginLeft: "auto",
									marginRight: "auto",
									borderRadius: "22px",
								}}
								onClick={() =>
									window.open(
										"https://www.nytimes.com/crosswords",
										"_blank"
									)
								}>
								Read about today’s crossword
							</Button>
						</>
					)}

					{/* Wirecutter Modal  */}
					{currentContent === "wirecutter" && (
						<>
							<Typography
								variant='h5'
								align='center'
								gutterBottom>
								Top Reviews
							</Typography>
							<Card
								sx={{
									maxWidth: "600px",
									margin: "0 auto",
									textAlign: "center",
									boxShadow: "none",
								}}>
								<CardContent>
									<Typography
										variant='h6'
										sx={{ fontWeight: "bold" }}>
										Wirecutter's Best Picks
									</Typography>
									<Typography
										variant='body2'
										color='text.secondary'
										sx={{ marginBottom: 2 }}>
										Discover the best products as reviewed
										by our experts. Stay informed with the
										latest trends and reviews.
									</Typography>
									<CardMedia
										component='img'
										image={wirecutterArticleLogo}
										alt='Wirecutter'
										sx={{
											borderRadius: "4px",
											marginBottom: 2,
										}}
									/>
									<Button
										variant='outlined'
										sx={{
											backgroundColor: "#f5f5f5",
											border: "1px solid #ccc",
											color: "#333",
											"&:hover": {
												backgroundColor: "#e0e0e0",
											},
											padding: "10px 20px",
											borderRadius: "20px",
										}}
										onClick={() =>
											window.open(
												"https://www.nytimes.com/wirecutter",
												"_blank"
											)
										}>
										View more on Wirecutter
									</Button>
								</CardContent>
							</Card>
						</>
					)}

					{/* Athletic Modal */}
					{currentContent === "athletic" && (
						<>
							<Typography
								variant='h5'
								align='center'
								gutterBottom>
								Match Overview
							</Typography>
							<Grid
								container
								spacing={2}
								alignItems='center'
								justifyContent='center'>
								<Grid
									item
									xs={12}
									sm={6}>
									<Typography
										variant='h7'
										sx={{
											fontWeight: "bold",
											marginBottom: 2,
										}}>
										Man City dominates Ipswich in a
										thrilling 3-1 victory at the Etihad
										Stadium. A masterclass performance by
										Kevin De Bruyne and Raheem Sterling, who
										both played pivotal roles in securing
										the win.
									</Typography>
								</Grid>
								<Grid
									item
									xs={12}
									sm={6}>
									<CardMedia
										component='img'
										image={manCityVsIpswichImage}
										alt='Man City vs Ipswich'
										sx={{
											width: "100%",
											borderRadius: "4px",
										}}
									/>
								</Grid>
							</Grid>

							<Box
								textAlign='center'
								sx={{ marginTop: 3 }}>
								<Typography
									variant='h6'
									sx={{ fontWeight: "bold" }}>
									Man City vs Ipswich City
								</Typography>
								<Typography
									variant='h6'
									sx={{ marginTop: 1 }}>
									<img
										src={manCityLogo}
										alt='Man City'
										style={{
											width: "40px",
											verticalAlign: "middle",
											marginRight: "10px",
										}}
									/>
									3 - 1
									<img
										src={ipswichLogo}
										alt='Ipswich'
										style={{
											width: "40px",
											verticalAlign: "middle",
											marginLeft: "10px",
										}}
									/>
								</Typography>
								<Typography
									variant='h6'
									sx={{ marginTop: 1 }}>
									FT
								</Typography>
							</Box>

							<Button
								variant='outlined'
								sx={{
									marginTop: 3,
									display: "block",
									marginLeft: "auto",
									marginRight: "auto",
									borderRadius: "22px",
								}}
								onClick={() =>
									window.open(
										"https://theathletic.com/",
										"_blank"
									)
								}>
								View more stories
							</Button>
						</>
					)}

					{/* Audio Modal */}
					{currentContent === "audio" && (
						<>
							<Typography
								variant='h5'
								align='center'
								gutterBottom>
								NYT Audio
							</Typography>
							<Card
								sx={{
									maxWidth: "600px",
									margin: "0 auto",
									textAlign: "center",
									boxShadow: "none",
								}}>
								<CardMedia
									component='img'
									image={audioImage}
									alt='NYT Audio'
									sx={{
										borderRadius: "4px",
										marginBottom: 2,
									}}
								/>
								<CardContent>
									<Typography
										variant='h6'
										sx={{ fontWeight: "bold" }}>
										Listen to the Latest Episodes
									</Typography>
									<Typography
										variant='body2'
										color='text.secondary'
										sx={{ marginBottom: 2 }}>
										Stay updated with the latest news,
										stories, and features from The New York
										Times audio series. Enjoy curated
										content anytime, anywhere.
									</Typography>
									<Button
										variant='outlined'
										sx={{
											backgroundColor: "#f5f5f5",
											border: "1px solid #ccc",
											color: "#333",
											"&:hover": {
												backgroundColor: "#e0e0e0",
											},
											padding: "10px 20px",
											borderRadius: "20px",
										}}
										onClick={() =>
											window.open(
												"https://www.nytimes.com/audio",
												"_blank"
											)
										}>
										Listen on NYT Audio
									</Button>
								</CardContent>
							</Card>
						</>
					)}
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpenModal(false)}>Close</Button>
				</DialogActions>
			</Dialog>

			<style jsx='true'>{`
				@keyframes pulse {
					0% {
						transform: scale(1);
					}
					50% {
						transform: scale(1.1);
					}
					100% {
						transform: scale(1);
					}
				}

				@keyframes bounce {
					0%,
					20%,
					50%,
					80%,
					100% {
						transform: translateY(0);
					}
					40% {
						transform: translateY(-10px);
					}
					60% {
						transform: translateY(-5px);
					}
				}

				@keyframes glow {
					0% {
						box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
					}
					100% {
						box-shadow: 0 0 20px rgba(255, 255, 255, 1);
					}
				}
			`}</style>
		</>
	);
}
