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
          <span>Blog about by career built in
          <TypeWriter text=" React Js,Bootstrap" delay={200} /></span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
