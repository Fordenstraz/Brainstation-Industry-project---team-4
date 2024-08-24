import menuIcon from '../assets/svg.svg';
import nytLogo from '../assets/link-new-york-times-homepage-svg.svg';
import userIcon from '../assets/svg.png';
import './Header.scss'; 

export default function Header() {
  return (
    <header className="header">
      <div className="header__toolbar">
        <button className="header__icon-button">
          <img src={menuIcon} alt="menu" className="header__icon" />
        </button>
        <img src={nytLogo} alt="The New York Times" className="header__logo" />
        <button className="header__icon-button">
          <img src={userIcon} alt="User" className="header__icon" />
        </button>
      </div>
    </header>
  );
}