import React from "react";
import "./Header.css";
import { useAuth, useSideNav, useFilter } from "../../context/";

const Header = () => {
  const {
    authState: { user },
  } = useAuth();

  const { setSideNavOpen } = useSideNav();

  const {
    filterState: { search },
    filterDispatch,
  } = useFilter();

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
          value={search}
          onChange={(e) =>
            filterDispatch({
              type: "SEARCH",
              payload: { search: e.target.value },
            })
          }
        />
      </div>
      <div className="user-greet">Hi, {user.firstName}</div>
    </header>
  );
};

export { Header };
