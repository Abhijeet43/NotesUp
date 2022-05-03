import React, { useState } from "react";
import { LabelModal } from "../index";
import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  const [showLabelModal, setShowLabelModal] = useState(false);
  return (
    <>
      <aside className="side-nav">
        <div className="side-nav-brand">
          <h1>
            <span className="primary">Notes</span>Up
          </h1>
        </div>
        <div className="side-nav-items">
          <NavLink to="/notes" className="side-nav-item active">
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
              <NavLink to="/:tagName" className="side-nav-item tag-label">
                <div className="side-nav-icon">
                  <i className="fa-solid fa-tag"></i>
                </div>
                <div className="side-nav-text">Meetings</div>
                <div>
                  <i className="fa-solid fa-trash danger"></i>
                </div>
              </NavLink>

              <NavLink to="/:tagName" className="side-nav-item tag-label">
                <div className="side-nav-icon">
                  <i class="fa-solid fa-tag"></i>
                </div>
                <div className="side-nav-text">Work</div>
                <div>
                  <i className="fa-solid fa-trash danger"></i>
                </div>
              </NavLink>
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
              <i class="fa-solid fa-box-archive"></i>
            </div>
            <div className="side-nav-text">Archive</div>
          </NavLink>

          <NavLink to="/trash" className="side-nav-item">
            <div className="side-nav-icon">
              <i className="fa-solid fa-trash"></i>
            </div>
            <div className="side-nav-text">Trash</div>
          </NavLink>

          <NavLink to="/logout" className="side-nav-item">
            <div className="side-nav-icon">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
            <div className="side-nav-text">Logout</div>
          </NavLink>
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
