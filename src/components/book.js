import React from "react";
import Boton from "./buttons";

export default function Libros({ books }) {
  return (
    <div className="items">
      <div className="card-img">
        <img src={books.img} alt={books.title}></img>
      </div>
      <div className="card-body">
        <h3>{books.title}</h3>
        <p>{books.summary}</p>
        
        <div className="botones">
          <Boton
            name="Avisar"
            mensaje="Me ha gustado"
            estilos={{ backgroundColor: "Green" }}
          ></Boton>
          { books.units > 0 &&(
            <Boton
            name="Reservar"
            mensaje={`Se ha reservado el libro de ${books.title}`}
            estilos={{ backgroundColor: "Red" }}
            ></Boton>
            )
          }
        </div>
      </div>
    </div>
  );
}
