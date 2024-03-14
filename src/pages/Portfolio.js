import React from 'react';
import mainStyles from "../assets/css/Main.module.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import GalleryShow from "../components/GalleryShow";

function Portfolio() {
  return (
    <>
    <Navbar />
      <div className={mainStyles.homePage}>
        <div className={mainStyles.homeContent}>
          <GalleryShow />
        </div>
      </div>
      <Footer />
      </>
  )
}

export default Portfolio;