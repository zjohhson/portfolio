import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function BackHomeNavbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav>
      <div>
        {/* <img src="./img/logo.svg" alt="Logoipsum" /> */}
      </div>
      <a
        className={`nav__hamburger`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items`} style={{display: 'flex', justifyContent: 'left', marginRight: 'auto', marginLeft: '0', float: 'left'}}>
        <ul>
          <li>
            <div style={{display: 'grid', placeItems: 'center', justifyContent: 'center', marginRight: 'auto', marginLeft: '0', float: 'left'}}>
            <a href='/'>
                <ArrowBackIosIcon style = {{fontSize: 'small', justifyContent: 'center'}}/>
              Back to Homepage
            </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BackHomeNavbar;
