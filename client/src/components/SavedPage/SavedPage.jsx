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

  const handleDelete = (event) => {
    axios
      .delete(`/api/books/${event.target.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        if (err) throw err;
      });
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Saved</h5>
        {savedBooks.map((book) => {
          return (
            <>
            <div className="container text-center">
              <li className="list-group-item">
                <h2>{book.title}</h2>
                <h3>{book.authors}</h3>
                <p>{book.description}</p>
                <img src={book.image} alt="book"/>
                <p>{book.link}</p>
                <button
                    type="submit"
                    className="btn btn-secondary"
                    id={book._id}
                    onClick={handleDelete}
                  >
                    DELETE
                  </button>
                  <a href={book.link} target="_blank">
                    <button className="float-right mr-2 btn btn-outline-success save">
                      VIEW
                    </button>
                  </a>
              </li>
            </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default SavedPage;