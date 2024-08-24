import { useState, useEffect } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import Carousel from 'react-material-ui-carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import nytLogo from '../assets/TNYT.png';
import nytGames from '../assets/TNYT Games.png';
import nytAudio from '../assets/TNYT Audio.jpg';
import nytCooking from '../assets/TNYT Cooking.jpg';
import nytAthletic from '../assets/TNYT Athletic.jpeg';
import nytWirecutter from '../assets/TNYT Wirecutter.png';
import manCityLogo from '../assets/Man City.png';
import ipswichLogo from '../assets/Ipswich.png';
import BurgerRecipie from '../assets/Smash Burger.jpg';

const actions = [
  { icon: <img src={nytCooking} alt="Cooking" style={{ width: 40, height: 40, borderRadius: '50%' }} />, name: 'Cooking' },
  { icon: <img src={nytGames} alt="Games" style={{ width: 40, height: 40, borderRadius: '50%' }} />, name: 'Games', url: 'https://www.nytimes.com/crosswords' },
  { icon: <img src={nytAudio} alt="Audio" style={{ width: 40, height: 40, borderRadius: '50%' }} />, name: 'Audio', url: 'https://www.nytimes.com/audio' },
  { icon: <img src={nytAthletic} alt="Athletic" style={{ width: 40, height: 40, borderRadius: '50%' }} />, name: 'Athletic' },
  { icon: <img src={nytWirecutter} alt="Wirecutter" style={{ width: 40, height: 40, borderRadius: '50%' }} />, name: 'Wirecutter', url: 'https://www.nytimes.com/wirecutter' },
];

export default function SpeedDialNav() {
  const [openModal, setOpenModal] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(nytLogo);
  const [animationActive, setAnimationActive] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');
  const [latestScores, setLatestScores] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [contentType, setContentType] = useState(''); 
  const icons = [nytLogo, nytCooking, nytGames, nytAudio];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIcon((prevIcon) => {
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

  const fetchLatestScores = () => {
    setLatestScores([
      { team1: 'Man City', team2: 'Ipswich', score: '3 - 1', status: 'FT', logo1: manCityLogo, logo2: ipswichLogo },
      { team1: 'Team C', team2: 'Team D', score: '2 - 2', status: 'FT', logo1: manCityLogo, logo2: ipswichLogo },
    ]);
  };

  const fetchRecipes = () => {
    setRecipes([
      {
        image: BurgerRecipie,
        title: 'Smash Burgers',
        author: 'Farideh Sadeghin',
        rating: 4.5,
        reviews: 52,
        time: '45 minutes',
        difficulty: 'Easy',
      },
    
    ]);
  };

  const handleNavigation = (name, url) => {
    if (name === 'Athletic') {
      fetchLatestScores();
      setContentType('scores'); 
      setCurrentUrl(''); 
      setOpenModal(true);
    } else if (name === 'Cooking') {
      fetchRecipes();
      setContentType('recipes'); 
      setCurrentUrl(''); 
      setOpenModal(true);
    } else if (url) {
      setCurrentUrl(url);
      setContentType('url'); 
      setOpenModal(true);
    } else {
      setCurrentUrl('');
      setContentType(''); 
    }
  };

  return (
    <>
      <SpeedDial
        ariaLabel="NYT Navigation"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          '& .MuiSpeedDial-fab': {
            animation: animationActive ? 'pulse 2s infinite' : 'none',
          },
        }}
        icon={
          <img
            src={currentIcon}
            alt="NYT Logo"
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
              animation: animationActive ? 'bounce 2s infinite, glow 1.5s infinite alternate' : 'none',
            }}
          />
        }
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleNavigation(action.name, action.url)}
          />
        ))}
      </SpeedDial>


      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="lg"
        fullWidth
        TransitionComponent={Slide}
        TransitionProps={{ direction: 'up' }}
      >
        <DialogTitle>
          {currentUrl ? `Explore ${new URL(currentUrl).hostname}` : contentType === 'recipes' ? 'Recipes' : 'Latest Scores'}
        </DialogTitle>
        <DialogContent>
          {contentType === 'url' && currentUrl ? (
            <iframe
              src={currentUrl}
              title="NYT Product"
              width="100%"
              height="500px"
              style={{ border: 'none' }}
            ></iframe>
          ) : contentType === 'recipes' ? (
            <Carousel
              autoPlay={true}
              interval={5000}
              indicators={true}
              navButtonsAlwaysInvisible={true}
              animation="slide"
            >
              {recipes.map((recipe, index) => (
                <Card key={index} sx={{ maxWidth: 345, margin: 'auto' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={recipe.image}
                    alt={recipe.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {recipe.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {recipe.author}
                    </Typography>
                    <Rating
                      name="recipe-rating"
                      value={recipe.rating}
                      readOnly
                      precision={0.5}
                      size="small"
                      sx={{ marginY: 1 }}
                    />
                    <Typography variant="caption" color="text.secondary" display="block">
                      {recipe.reviews} reviews
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      {recipe.time}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="outlined"
                    startIcon={<BookmarkBorderIcon />}
                    sx={{
                      width: '100%',
                      color: '#000',
                      border: '1px solid #000',
                      '&:hover': {
                        backgroundColor: '#000',
                        color: '#fff',
                      },
                    }}
                    onClick={() => window.open('https://cooking.nytimes.com/', '_blank')}
                  >
                    View More on NYT Cooking
                  </Button>
                </Card>
              ))}
            </Carousel>
          ) : contentType === 'scores' ? (
            <Carousel
              autoPlay={true}
              interval={5000}
              indicators={true}
              navButtonsAlwaysInvisible={true}
              animation="slide"
            >
              {latestScores.map((score, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                  <Typography variant="h6">{`${score.team1} vs ${score.team2}`}</Typography>
                  <Typography variant="body1">{score.score}</Typography>
                  <Typography variant="body2" color="text.secondary">{score.status}</Typography>
                </div>
              ))}
            </Carousel>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No content to display.
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <style jsx="true">{`
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
           0%, 20%, 50%, 80%, 100% {
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