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
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Saved</h5>
        {savedBooks.map((props) => {
          return (
            <>
            <div className="container text-center">
              <li className="list-group-item">
                <h2>{props.title}</h2>
                <h3>{props.authors}</h3>
                <p>{props.description}</p>
                <img src={props.image} alt="book"/>
                <p>{props.link}</p>
                <button
                    type="submit"
                    className="btn btn-secondary"
                    id={props._id}
                    onClick={deleteBook}
                  >
                    DELETE
                  </button>
                  <a href={props.link} target="_blank">
                    <button className="btn btn-secondary">
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

//I can't figure out how to properly save the information to my database. I get it to populate but it does not save correctly so my save page does not show results.