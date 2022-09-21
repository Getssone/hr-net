import "./Footer.css";
import logo from "../../../assets/FooterWealthHealth.png";

/** Footer
 * @function
 * @name Footer
 * @return {HTML} the Footer page 
 */

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <p className="footer-text">Copyright 2022 Wealth Health</p>{" "}
        <img className="footer-logo" src={logo} alt="logo de WealthHealth" />
      </div>
    </footer>
  );
}
