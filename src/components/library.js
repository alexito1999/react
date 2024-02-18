import React from "react";
import Book from "./book";
import G from "../assets/img/gatsby.jpg";
import D from "../assets/img/1984.jpg";
import Q from "../assets/img/quijote.jpg";
import P from "../assets/img/prejuicio.jpg";
import H from "../assets/img/harry.jpg";
import S from "../assets/img/soledad.jpg";

export default function Library() {
  const booksArray = [
    {
      title: "El Gran Gatsby",
      author: "F. Scott Fitzgerald",
      img: "https://www.alianzaeditorial.es/imagenes/libros/grande/9788411483001-el-gran-gatsby.jpg",
      genre: "Novela",
      year: 1925,
      summary:
        "El Gran Gatsby es una novela que retrata la vida en la década de 1920 en Estados Unidos. Sigue la historia de Jay Gatsby, un enigmático millonario obsesionado con su amor de juventud, Daisy Buchanan. La novela explora temas de riqueza, amor y decadencia en la era del jazz.",
    },
    {
      title: "1984",
      author: "George Orwell",
      img: "https://images.cdn2.buscalibre.com/fit-in/360x360/85/64/8564963be6e21ee55d0bd7b532c3a9bb.jpg",
      genre: "Distopía",
      year: 1949,
      summary:
        "1984 es una novela distópica que se desarrolla en un futuro totalitario. La historia sigue a Winston Smith, un hombre atrapado en un mundo de vigilancia constante y manipulación del gobierno. La novela explora temas de control, propaganda y resistencia.",
    },
    {
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      img: "https://m.media-amazon.com/images/I/81+HL6c94oL._AC_UF1000,1000_QL80_.jpg",
      genre: "Novela",
      year: 1605,
      summary:
        "Don Quijote de la Mancha es una novela clásica que narra las aventuras de un caballero enloquecido, Don Quijote, y su fiel escudero, Sancho Panza. La obra es una sátira de los ideales caballerescos y aborda temas como la realidad y la fantasía, la locura y la cordura.",
    },
    {
      title: "Orgullo y prejuicio",
      author: "Jane Austen",
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/12/orgullo-prejuicio-zombies.jpg?tf=1200x",
      genre: "Novela romántica",
      year: 1813,
      summary:
        "Orgullo y prejuicio es una novela romántica que sigue la historia de Elizabeth Bennet y su relación con el apuesto pero orgulloso Fitzwilliam Darcy. La obra de Jane Austen examina las convenciones sociales, el amor y los prejuicios en la Inglaterra del siglo XIX.",
    },
    {
      title: "Harry Potter y la piedra filosofal",
      author: "J.K. Rowling",
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/12/harry-potter-piedra-filosofal.jpg?tf=2048x",
      genre: "Fantasía",
      year: 1997,
      summary:
        "Harry Potter y la piedra filosofal es el primer libro de la serie de Harry Potter. Sigue las aventuras del joven mago Harry Potter mientras descubre el mundo de la magia y enfrenta al malvado Lord Voldemort. La novela combina elementos de fantasía, amistad y valentía.",
    },
    {
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      img: "https://m.media-amazon.com/images/I/A1lNJP8sC6L._AC_UF894,1000_QL80_.jpg",
      genre: "Realismo mágico",
      year: 1967,
      summary:
        "Cien años de soledad es una obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de varias generaciones. La novela explora temas como la soledad, el amor, la guerra y la identidad latinoamericana.",
    },
  ];
  return (
    <div className="section-book">
      <h1>Best seller</h1>
      <h1>Library</h1>
      <div className="container-card">
        {booksArray.map((element, index) => {
          return <Book books={element} key={index}></Book>;
        })}
      </div>
    </div>
  );
}
