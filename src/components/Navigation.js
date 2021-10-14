import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const triggerToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <NavLink exact to="/" activeClassName="nav-active">
            <img src="./../img/logo.png" alt="logo" className="logo" />
          </NavLink>
          <button className="nav-toggle" onClick={triggerToggle}>
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div className={`links-container ${toggle ? "show-links" : ""}`}>
          <ul className="links">
            <li>
              <NavLink exact to="/" activeClassName="nav-active">
                ilovethistrack.com
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/gallerie" activeClassName="nav-active">
                Gallerie
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/connexion" activeClassName="nav-active">
                Connexion
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
