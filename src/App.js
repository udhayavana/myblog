
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './template/css/slick.css';
import './template/css/tooplate-simply-amazed.css';
import 'bootstrap/dist/js/bootstrap.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Navbar from './components/Navbar';
import ContainerBgImage from './template/images/body-bg-1.png';

const App = () => {

  return (
    <div id='outer' style={{backgroundImage:`url(${ContainerBgImage})`,backgroundSize:'cover'}}>
      <Router>
       <header className="header order-last" id="tm-header">
        <Navbar/>
       </header>
       <button className="navbar-button collapsed" type="button">
            <span className="menu_icon">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </span>
        </button>
        <main id="content-box" class="order-first">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/counter" element={<Counter />} />
      </Routes>
      </main>
    </Router>
  </div>
  );
};

export default App;
