import React from "react";
import axios from "axios";

const SearchBooks = ({ data, props }) => {
  const saveBooks = (event) => {
    const needsToSave = data.filter((saveBook) => {
      return saveBook.etag === event.target.id;
    });
    const bookData = {
      title: needsToSave[0].volumeInfo.title,
      authors: needsToSave[0].volumeInfo.authors,
      description: needsToSave[0].volumeInfo.description,
      image: needsToSave[0].volumeInfo.imageLinks.thumbnail,
      link: needsToSave[0].volumeInfo.infoLink,
    };
    axios
      .post("/api/books", bookData)
      .then(() => {
        alert("Book successfully saved!");
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  const viewBook = () => {
    let path = book.link;
    window.open(path);
  }

  return (
    <div className="container text-center">
      <li className="list-group-item">
        <h2>{props.title}</h2>
        <h3>{props.authors}</h3>
        <p>{props.description}</p>
        <img src={props.image} alt="book"/>
        <p>{props.link}</p>
        <button type="submit" className="btn btn-success mr-2" onClick={saveBooks}>Save Book</button>
        <button type="submit" className="btn btn-secondary" onClick={viewBook}>View Book</button>
      </li>
    </div>
  );
};

export default SearchBooks;