import { useState } from 'react';
import '../AppNav.css';
import PlanetNav from './PlanetNav';

const AppNav = ({planets}) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const colors = {
    mercury: "#DEF4FC",
    venus: "#F7CC7F",
    earth: "#545BFE",
    mars: "#FF6A45",
    jupiter: "#ECAD7A",
    saturn: "#FCCB6B",
    uranus: "#65F0D5",
    neptune: "#497EFA"
  };

  return (
    <nav className="app-nav">
      <div className={`app-nav__menu ${isOpen ? 'open' : ''}`}>
        {planets.map(planet=>  <PlanetNav key={planet.name} colors={colors} planet={planet} toggleMenu={toggleMenu} />)}
      </div>
      <div className="app-nav__hamburger" onClick={toggleMenu}>
        <div className="app-nav__bar"></div>
        <div className="app-nav__bar"></div>
        <div className="app-nav__bar"></div>
      </div>
    </nav>
  );
};

export default AppNav;