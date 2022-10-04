import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__copyright">
          <h1>ElVideoClu</h1>
          <h6>
            by <span>Emanuel Valente</span>
          </h6>
          <h6>&copy;2022 Created and Designed on ReactJS - Final project for Coderhouse bootcamp.</h6>
          <ul className="footer__socials">
            <li>
              <a href="https://www.linkedin.com/in/emanuel-valente/">
                <i title="emavalente.dev@gmail.com" class="fas fa-paper-plane"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/emavalente">
                <i title="Github" class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/emanuel-valente/">
                <i title="LinkedIn" class="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <nav className="footer__nav">
          <ul>
            <h4>Enlaces</h4>
            <li>
              <Link className="link" to="/category/movies">
                Peliculas
              </Link>
            </li>
            <li>
              <Link className="link" to="/category/series">
                Series
              </Link>
            </li>
            <li>
              <Link className="link" to="/category/anime">
                Anime
              </Link>
            </li>
            <li>
              <Link className="link" to="/category/estrenos">
                Estrenos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
