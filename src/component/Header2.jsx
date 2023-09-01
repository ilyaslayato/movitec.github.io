import React, { useState } from "react";
import "../style/Header.css";

import logo from "../img/My Website.png";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });



  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo" onClick={() => (window.location.href = "/")}>
            <img src={logo} alt="" />
          </div>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="/">Accueil</a>
              </li>
              



              <li>
                <a href="/demand">demande devie</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="material-icons close home-btn">
                  <b>.</b>
                </i>
              ) : (
                <i className="material-icons open">&#9776;</i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;