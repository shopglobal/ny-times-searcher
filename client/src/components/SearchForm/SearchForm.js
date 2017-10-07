// Import dependencies
import React from "react";
import "./SearchForm.css";

// Search Form component
const SearchForm = props =>
  <form className="searchForm">
    <input
      value={ props.search }
      onChange={ props.handleInputChange }
      name="search"
      placeholder="Enter in topic"
      id="search"
      required
    />
    <label htmlFor="search">Search Topic</label>

    <input
      value={ props.start }
      onChange={ props.handleInputChange }
      name="start"
      id="start"
      placeholder="Enter Start Date"
      required
    />
    <label htmlFor="start">Start Date</label>

    <input
      value={ props.end }
      onChange={ props.handleInputChange }
      name="end"
      id="end"
      placeholder="Enter End Date"
      required
    />
    <label htmlFor="end">End Date</label>

    <br />
    <br />

    <button
      type="submit"
      onClick={ props.handleFormSubmit }
      className="btn waves-effect waves-light submit-btn"
    >
      Search
      <i className="material-icons right">send</i>
    </button>
  </form>;

export default SearchForm;
