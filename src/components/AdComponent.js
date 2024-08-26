import './AdComponent.scss'; 

import adImage from '../assets/adImage.png'; 

const AdComponent = () => {
  return (
    <div className="ad-container">
      <div className="ad-card">
        <img src={adImage} alt="Advertisement" className="ad-image" />
      </div>
    </div>
  );
};

export default AdComponent;