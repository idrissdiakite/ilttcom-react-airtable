import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <p>
            ilovethistrack.com - îlot de qualité sonore dans un océan
            d'indigences phoniques ©
          </p>
          <ul>
            <li>
              <a href="https://www.facebook.com/ilttcom">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ilttcom">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/ilttcom">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/user/ilovethistrack.com?si=153a9d0a068a4c14">
                <i className="fab fa-spotify"></i>
              </a>
            </li>
            <li>
              <a href="https://www.soundcloud.com/ilttcom">
                <i className="fab fa-soundcloud"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
