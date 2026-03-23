import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h2 className="logo">Lua de Jade</h2>
        <img src="/imagens/logoMinimalista.png"/>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/vitrine">Vitrine</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  );
}

export default Navbar;