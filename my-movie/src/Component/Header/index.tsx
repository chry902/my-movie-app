import React from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = (): any => {
  const navigate = useNavigate();
  const isLogged: Function = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="nav">
      <h2>Hello Heder</h2>
      <div className="navLinkWrapper">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/film">Film</Link>
          </li>
          <li>
            <Link to="/preferiri">Preferiti</Link>
          </li>
        </ul>
        <button onClick={() => isLogged()}>Log Out</button>
      </div>
    </div>
  );
};
export default Header;
