import { Outlet, Link } from "react-router";
import logo from '../img/my-profile-img.jpg';
import { useEffect, useState } from "react";

const getDeviceType = (width) => {
  if (width < 768) return 'Mobile';
  if (width >= 768 && width < 1024) return 'Tablet';
  return 'Desktop';
};


const Default = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [deviceType, setDeviceType] = useState(getDeviceType(window.innerWidth));

  const handleToggle = () => {
    setIsOpen(prev => !prev);
    const width = window.innerWidth;
    setWindowWidth(width);
    setDeviceType(getDeviceType(width));
  };
  
  useEffect(() => {
    
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setDeviceType(getDeviceType(width));
      if(deviceType!=="Desktop"){
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header id="header" className={`header dark-background d-flex flex-column ${ (deviceType==="Desktop"|| isOpen) ? 'header-show':''}`}>
        <i  onClick={handleToggle} className={`header-toggle d-xl-none bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
        <div className="profile-img">
          <img src={logo} alt="" className="img-fluid square" />
        </div>
        <Link to="/" className="logo d-flex align-items-center justify-content-center">
          <img src="assets/img/logo.png" alt="" />
          <h1 className="sitename">Udhayavanan Sambath</h1>
        </Link>

        <div className="social-links text-center">
          <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
        
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link className="" to='/'><i className="bi bi-house navicon" />Home</Link></li>
            <li><Link to='/about'><i className="bi bi-person navicon"></i>About</Link></li>
            <li><Link to='/profile'><i className="bi bi-file-earmark-text navicon"></i>Profile</Link></li>
            <li><Link to='/to-do'><i className="bi bi-images navicon"></i>To do</Link></li>
            <li><Link to='/weather'><i className="bi bi-images navicon"></i>Weather App</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default Default;