import React from "react";
import Book from "./book";
import { useEffect, useState } from "react";

import G from "../assets/img/gatsby.jpg";
import D from "../assets/img/1984.jpg";
import Q from "../assets/img/quijote.jpg";
import P from "../assets/img/prejuicio.jpg";
import H from "../assets/img/harry.jpg";
import S from "../assets/img/soledad.jpg";

export default function Library() {

  const [libraryB, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/books")
      .then((response) => {
        return response.json();
      })
      .then((books) => {
        setBooks(books);
      })
      .catch(() => console.log("Algo falló"));
  }, []);

  return (
    <div className="section-book">
      <h1>Best seller</h1>
      <h1>Library</h1>
      <div className="container-card">
        {libraryB.map((element, index) => {
          return <Book books={element} key={index}></Book>;
        })}
      </div>
    </div>
  );
}
