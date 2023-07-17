import React, { useState, useEffect } from "react";
// import { Form } from "react-bootstrap";
// import Employees from "../shared/Employees";

function News() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  const [date, setDate] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setImage(localStorage.getItem("image"));
    setStatus(localStorage.getItem("status"));
    setDescription(localStorage.getItem("description"));
    setDate(localStorage.getItem("date"));
  }, []);

  return (
    <> 
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-3 mb-3 mt-3">
          <h1> Detail </h1>

          <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h5 className="card-title">{date}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">{status}</p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default News;
