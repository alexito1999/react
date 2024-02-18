import React from "react";

export default function Libros({ books }) {
  return (
    <div className="items">
      <div className="card-img">
        <img src={books.img} alt={books.title}></img>
      </div>
      <div className="card-body">
        <h3>{books.title}</h3>
        <p>{books.summary}</p>
      </div>
    </div>
  );
}
