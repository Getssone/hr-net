import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../../assets/WealthHealth.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header-img">
        <Link to="/">
          <img className="logo" src={logo} alt="logo de WealthHealth" />
        </Link>
      </div>
      <h1>
        <span className="name">IntraNetwork</span>
      </h1>
    </div>
  );
}
