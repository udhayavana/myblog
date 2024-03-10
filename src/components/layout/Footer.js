import React from "react";
import footerStyles from "../../assets/css/Footer.module.css";
function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.footerLinks} style={{visibility:"hidden"}}>
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
        <li>Contact Us</li>
      </ul>
      <p className={footerStyles.footerText} style={{float:"right"}}>
        © {year} My Blog.
      </p>
    </footer>
  );
}

export default Footer;
