import React, { useState } from "react";
import { LabelModal } from "../index";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useAuth,
  useNotes,
  useArchive,
  useTrash,
  useLabel,
  useSideNav,
} from "../../context/";
import { toast } from "react-toastify";
import "./SideNav.css";

const SideNav = () => {
  const [showLabelModal, setShowLabelModal] = useState(false);

  const { authDispatch } = useAuth();

  const { archiveDispatch } = useArchive();

  const { trashDispatch } = useTrash();

  const { notesDispatch } = useNotes();

  const { sideNavOpen, setSideNavOpen } = useSideNav();

  const {
    labelState: { labels },
  } = useLabel();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    notesDispatch({ type: "CLEAR_NOTES" });
    archiveDispatch({ type: "CLEAR_ARCHIVES" });
    trashDispatch({ type: "CLEAR_TRASH" });
    setSideNavOpen(false);
    toast.success("Logout Successful");
  };

  return (
    <>
      <aside className={`side-nav ${sideNavOpen ? "side-nav-active" : ""}`}>
        <div className="side-nav-brand">
          <h1 onClick={() => navigate("/")}>
            <span className="primary">Notes</span>Up
          </h1>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setSideNavOpen(false)}
          ></i>
        </div>
        <div className="side-nav-items">
          <NavLink to="/notes" className="side-nav-item">
            <div className="side-nav-icon">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <div className="side-nav-text">Notes</div>
          </NavLink>

          <hr />

          <div>
            <div className="side-nav-item">
              <div className="side-nav-icon">
                <i className="fa-solid fa-tags"></i>
              </div>
              <div className="side-nav-text">Labels</div>
            </div>
            <div className="tag-labels">
              {labels &&
                labels.map((label, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(`/labels/${label}`)}
                    className="side-nav-item tag-label"
                  >
                    <i className="fa-solid fa-tag tag-menu-icon"></i>
                    {label}
                  </div>
                ))}
            </div>
            <button
              className="btn btn-primary no-max-width"
              onClick={() => setShowLabelModal(true)}
            >
              <i className="fa-solid fa-circle-plus margin-right"></i>
              Add Label
            </button>
          </div>

          <hr />

          <NavLink to="/archive" className="side-nav-item">
            <div className="side-nav-icon">
              <i className="fa-solid fa-box-archive"></i>
            </div>
            <div className="side-nav-text">Archive</div>
          </NavLink>

          <NavLink to="/trash" className="side-nav-item">
            <div className="side-nav-icon">
              <i className="fa-solid fa-trash"></i>
            </div>
            <div className="side-nav-text">Trash</div>
          </NavLink>

          <button
            onClick={logoutHandler}
            className="side-nav-item no-max-width"
          >
            <div className="side-nav-icon">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
            <div className="side-nav-text">Logout</div>
          </button>
        </div>
      </aside>
      <LabelModal
        setShowLabelModal={setShowLabelModal}
        showLabelModal={showLabelModal}
      />
    </>
  );
};

export { SideNav };
