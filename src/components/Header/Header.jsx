import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="section-header">
      <div className="search-box">
        <button className="search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          className="notes-search"
          type="search"
          placeholder="Search Notes..."
        />
      </div>
      <button className="btn btn-primary">Logout</button>
    </header>
  );
};

export { Header };
