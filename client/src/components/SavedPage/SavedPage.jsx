import React from 'react';
import axios from "axios";

const SavedPage = (props) => {

    const deleteBook = (e) => {
        const id = e.target.getAttribute("id");
        axios.delete(`/api/books/${id}`).then((res) => {
            console.log(res)
            props.loadAllBooks()
        })
    }

    const viewBook = () => {
      let path = props.link;
      window.open(path);
    };

    return (
        <div className="container text-center">
        <li className="list-group-item">
          <h2>{props.title}</h2>
          <h3>Written By: {props.authors}</h3>
          <p>{props.description}</p>
          <img src={props.image} />
          <button type="submit"  id={props.id} className="btn btn-danger mr-2" onClick={deleteBook}>Delete Book</button>
          <button type="submit" className="btn btn-secondary" onClick={viewBook}>View Book</button>
        </li>
      </div>
    );
};

export default SavedPage;