import React from "react";
import PropTypes from "prop-types";

// choose number of rows to display

export default function Entries({ value, handleChange }) {
  return (
    <>
      <div className="table-show">
        <label htmlFor="choose-entries">{`Show: `}</label>
        <select
          name="choose-entries"
          id="choose-entries"
          value={value}
          onChange={(evt) => handleChange(evt)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </>
  );
}

Entries.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
