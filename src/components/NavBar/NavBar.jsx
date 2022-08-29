import "./NavBar.css";
import branch from "../../assets/img/branch.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="navBar__container">
        <img src={branch}></img>
        <ul className="navBar__menu">
          <li>
            <a href="#">Peliculas</a>
          </li>
          <li>
            <a href="#">Series</a>
          </li>
          <li>
            <a href="#">Anime</a>
          </li>
          <li>
            <a href="#">Estrenos</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
