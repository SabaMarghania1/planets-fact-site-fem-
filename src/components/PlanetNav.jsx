import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const PlanetNav = ({ planet, colors ,toggleMenu }) => {
    const planetColor = colors[planet.name.toLowerCase()];
  
    return (
      <div className="planet-nav-item">
        <div className="nav__item-left">
        <div className='circle' style={{ backgroundColor: planetColor }}></div>
        <span className='planet__nav-name'>{planet.name}</span>
        </div>
        <div className="nav__item-right">
        <NavLink to={`/planets/${planet.name.toLowerCase()}`}>
        <IoIosArrowForward color="white" onClick={toggleMenu}/>    
        </NavLink>
        </div>
      
      </div>
    );
  };
  
  export default PlanetNav;