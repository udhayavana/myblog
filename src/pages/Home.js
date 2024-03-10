import React from "react";
import mainStyles from "../assets/css/Main.module.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

function Home(props) {
  return (
    <>
      <Navbar />
      <div className={mainStyles.homePage}>
        <div className={mainStyles.homeContent}>
          <h1>Welcome to my website</h1>
          <p>
            This is the home page of my website
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
