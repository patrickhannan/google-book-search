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
              <div className="card" key={book._id}>
                <div className="card-body">
                  <button
                    className="float-right btn btn-outline-success save"
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
                  <h4>{book.title}</h4>
                  <p>Written by: {book.authors.join(", ")}</p>
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={book.image} alt="Book" />
                    </div>
                    <div className="col-sm-10">
                      <p className="float-left">{book.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default SavedPage;