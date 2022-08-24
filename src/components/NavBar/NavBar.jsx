import "./NavBar.css";
import branch from "../../assets/img/branch.png";

function NavBar() {
  return (
    <nav>
      <img src={branch}></img>
      <ul>
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
    </nav>
  );
}

export default NavBar;
