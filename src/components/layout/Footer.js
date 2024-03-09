import React from "react";
import footerStyles from "../../assets/css/Footer.module.css";
function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.footerLinks}>
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
        <li>Contact Us</li>
      </ul>
      <p className={footerStyles.footerText}>
        © 2023 My Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
