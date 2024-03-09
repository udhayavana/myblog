import React from 'react'
import mainStyles from "../assets/css/Main.module.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const Contact = (props) => {
  return (
     <>
      <Navbar route={props.route} setRoute={props.setRoute} />
      <div>
        <div className={mainStyles.homePage}>
          <h1>Welcome to My Website</h1>
          <p>
            This is the contact page of my website
          </p>
        </div>
      </div>
      <Footer />
      </>
  )
}

export default Contact;