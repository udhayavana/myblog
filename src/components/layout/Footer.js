import React from "react";
import footerStyles from "../../assets/css/Footer.module.css";
function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.footerLinks}>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <p className={footerStyles.footerText}>
        © 2023 My Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
