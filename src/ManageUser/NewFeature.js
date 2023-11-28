import axios from "axios";

import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function NewFeature(props) {
  let [features, setFeatures] = useState({});

  let url =
    "https://featuremarketplacewebapiforcrud.azurewebsites.net/api/Feature/AddFeature";

  // console.log(features);

  let Navigate = useNavigate();

  const handleChange = (evt) => {
    console.log(evt.target);

    let { id, value } = evt.target;
    setFeatures({ ...features, [id]: value });
  };

  // console.log("Testing"+features);

  const handleClick = () => {
    axios
      .post(url, features)
      .then((resp) => {
        // console.log(resp.data);
      })
      .catch((error) => {
        // console.error(error);
      });

    Navigate("/");
  };

  return (
    <>
    <Header></Header>
      <div className="h4 m-4">Add New Feature</div>
      <div className="container display">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <div className="form-group">
              <label htmlFor="entityName">Entity Name</label>
              <input
                type="text"
                className="form-control"
                id="entityName"
                maxLength="50"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Entity Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                maxLength="200"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="featureName">Feature Name</label>
              <input
                type="text"
                className="form-control"
                id="featureName"
                maxLength="50"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="featureDataType">Feature Type</label>
              <input
                type="text"
                className="form-control"
                id="featureDataType"
                maxLength="50"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="value">Feature Value</label>
              <input
                type="text"
                className="form-control"
                id="value"
                maxLength="50"
                onChange={handleChange}
              />
            </div>
            <div className="row mt-4 mb-4 m-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Add Feature
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
