import React from "react";
import footerStyles from "../../assets/css/Footer.module.css";
function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.footerLinks}>
        <li>
          <a>Privacy Policy</a>
        </li>
        <li>
          <a>Terms of Use</a>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
      </ul>
      <p className={footerStyles.footerText}>© 2023 My Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
