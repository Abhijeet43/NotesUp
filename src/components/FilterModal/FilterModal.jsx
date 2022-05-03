import React from "react";
import "./FilterModal.css";

const FilterModal = ({ showFilterModal, setShowFilterModal }) => {
  return (
    <div className="filter">
      <button
        className="btn btn-primary no-max-width"
        onClick={() => setShowFilterModal((prevVal) => !prevVal)}
      >
        <i class="fa-solid fa-arrow-up-wide-short margin-right"></i>
        Filters
      </button>
      <div className={`filter-menu ${showFilterModal ? "filter-active" : ""}`}>
        <div className="filter-header">
          <h2 className="filter-heading">Filters</h2>
          <button className="btn btn-primary">Clear</button>
        </div>
        <div className="filter-menu-section">
          <h3 className="filter-title">By Priority</h3>
          <div className="input-group">
            <input type="radio" name="priority" id="lowToHigh" />
            <label htmlFor="lowToHigh">Low To High</label>
          </div>
          <div className="input-group">
            <input type="radio" name="priority" id="highToLow" />
            <label htmlFor="highToLow">High To Low</label>
          </div>
        </div>
        <div className="filter-menu-section">
          <h3 className="filter-title">By Time</h3>
          <div className="input-group">
            <input type="radio" id="newestFirst" name="time" />
            <label htmlFor="newestFirst">Newest First</label>
          </div>
          <div className="input-group">
            <input type="radio" id="oldestFirst" name="time" />
            <label htmlFor="oldestFirst">Oldest First</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FilterModal };
