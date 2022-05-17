import React from "react";
import { useSideNav } from "../../context/";
import "./Header.css";
import { useAuth } from "../../context/";

const Header = () => {
  const {
    authState: { user },
  } = useAuth();

  const { setSideNavOpen } = useSideNav();

  return (
    <header className="section-header">
      <div onClick={() => setSideNavOpen(true)}>
        <i class="fa-solid fa-bars"></i>{" "}
      </div>
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
      <div className="user-greet">Hi, {user.firstName}</div>
    </header>
  );
};

export { Header };
