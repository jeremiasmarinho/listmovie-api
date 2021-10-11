import { Link } from "react-router-dom";

export const MainMenu = () => (
  <ul className="nav justify-content-center">
    <li className="navi-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="navi-item">
      <Link className="nav-link" to="/favorites">Favorites</Link>
    </li>
  </ul>
)