import './GameCard.scss'; 

import spellingBeeLogo from '../assets/spellingbee.svg';
import wordleLogo from '../assets/wordle.svg';
import crosswordImage from '../assets/crossword.png'; 

const GameCard = () => {
  return (
    <div className="games-card">
      <h2 className="games-title">Games</h2>

      <div className="games-grid">


        <div className="game-item">
          <div className="game-item-header spelling-bee-bg">
            <img src={spellingBeeLogo} alt="Spelling Bee" className="game-icon" />
            <h3 className="game-name">Spelling Bee</h3>
          </div>
          <div className="game-buttons">
            <button 
              className="game-button"
              onClick={() => window.open('https://www.nytimes.com/puzzles/spelling-bee', '_blank')}
            >
              Play
            </button>
            <button 
              className="game-button"
              onClick={() => window.open('https://www.nytimes.com/puzzles/spelling-bee/archive', '_blank')}
            >
              Past Puzzles
            </button>
          </div>
        </div>


        <div className="game-item">
          <div className="game-item-header wordle-bg">
            <img src={wordleLogo} alt="Wordle" className="game-icon" />
            <h3 className="game-name">Wordle</h3>
          </div>
          <div className="game-buttons">
            <button 
              className="game-button"
              onClick={() => window.open('https://www.nytimes.com/games/wordle/index.html', '_blank')}
            >
              Play
            </button>
            <button 
              className="game-button"
              onClick={() => window.open('https://www.nytimes.com/games/wordle/archive', '_blank')}
            >
              Archive
            </button>
          </div>
        </div>
      </div>


      <div className="crossword-section">
        <div className="crossword-content">
          <h3>How to Solve The New York Times Crossword</h3>
          <p>With patience and practice, anyone can learn to solve crosswords.</p>
        </div>
        <img src={crosswordImage} alt="Crossword" className="crossword-image" />
      </div>
    </div>
  );
};

export default GameCard;