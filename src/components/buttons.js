import React from "react";

export default function boton({ name, mensaje, estilos }) {
  return (
    
    <button
      style={estilos}
      onClick={() => {
        alert(mensaje);
      }}
    >
      {name}
    </button>
  );
}
