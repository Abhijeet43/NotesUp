import React from "react";
import "./NotesCard.css";

const NotesCard = () => {
  return (
    <div className="notes-card">
      <div className="notes-card-header">
        <h3 className="notes-card-title">Card Title</h3>
        <button title="Pin" className="notes-card-action">
          <i class="fa-solid fa-thumbtack"></i>
        </button>
      </div>
      <div className="notes-card-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        harum rerum magni quam perspiciatis similique, quos laudantium qui
        corrupti natus.
      </div>
      <div className="notes-card-footer">
        <div className="notes-creation-details">
          <p>03/04/2022 | 18:20</p>
        </div>
        <div className="notes-card-footer-actions">
          <button title="Delete" className="notes-card-action">
            <i className="fa-solid fa-trash"></i>
          </button>
          <button title="Edit" className="notes-card-action">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button title="Archive" className="notes-card-action">
            <i class="fa-solid fa-box-archive"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export { NotesCard };
