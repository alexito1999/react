import React from "react";
import logo from "../assets/img/banner.jpg";

export default function Header() {
  return (
    <div className="header-background">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="titulo">
        <h1>Tienda de libros</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Best Sellers</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
