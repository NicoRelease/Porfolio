import "../css/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Links from "./links.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="HeaderContainer">
          <Links></Links>
      </div>
    </header>
  );
}
