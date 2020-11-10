import axios from "axios";
import React, { useEffect, useState } from "react";

const SavedPage = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/books")
      .then((response) => {
        setSavedBooks(response.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  });

  const deleteBook = (event) => {
    axios
      .delete(`/api/books/${event.target.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  const viewBook = () => {
    let path = book.link;
    window.open(path);
  };

  return (
    <div className="container text-center">
        <li className="list-group-item">
          <h2>{props.title}</h2>
          <h3>By: {props.authors}</h3>
          <p>{props.description}</p>
          <img src={props.image} />
          <button type="submit"  id={props.id} className="btn btn-danger mr-2" onClick={deleteBook}>Delete Book</button>
          <button type="submit" className="btn btn-secondary" onClick={viewBook}>View Book</button>
        </li>
      </div>
  );
};
export default SavedPage;