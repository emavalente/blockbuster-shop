import "./NavBar.css";
import branch from "../../assets/img/branch.png";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navBar">
      <div className="navBar__container">
      <Link to='/'> <img src={branch} alt="logo"></img></Link>
        <ul className="navBar__menu">
          <li>
            <Link to='/category/movies'>Peliculas</Link>
          </li>
          <li>
          <Link to='/category/series'>Series</Link>
          </li>
          <li>
          <Link to='/category/anime'>Anime</Link>
          </li>
          <li>
          <Link to='/category/estrenos'>Estrenos</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
