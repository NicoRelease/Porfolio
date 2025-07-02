import { Link } from "react-router-dom";
import "../css/links.css";

function Links() {
  return (
    <ul className="nav-list">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/experiencia">Experiencia</Link>
            </li>
            <li>
              <Link to="/proyectos">Proyectos</Link>
            </li>
            <li>
              <Link to="/sobremi">Sobre Mi</Link>
            </li>
    </ul>

        );
        }

export default Links;