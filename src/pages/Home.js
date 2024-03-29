import React from "react";
import mainStyles from "../assets/css/Main.module.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import TypeWriter from "../components/TypeWriter";


function Home(props) {
  return (
    <>
      <Navbar />
      <div className={mainStyles.homePage}>
        <div className={mainStyles.homeContent}>
          <h2>Hello, I am Udhayavanan</h2>
          <span style={{color:"cyan"}}><TypeWriter text="Technical Lead,Scrum Master,Senior Web Developer" delay={200} /></span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
