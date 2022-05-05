import React from "react";
import ReactHtmlParser from "react-html-parser";
import { getDate, getTime } from "../../functions/";
import "./NotesCard.css";

const NotesCard = ({
  note: { title, text, date },
  setEditModel,
  setShowCreateModal,
}) => {
  const editNoteHandler = () => {
    setEditModel(note);
    setShowCreateModal(true);
  };

  return (
    <div className="notes-card">
      <div className="notes-card-header">
        <h3 className="notes-card-title">{title}</h3>
        <button title="Pin" className="notes-card-action">
          <i className="fa-solid fa-thumbtack"></i>
        </button>
      </div>
      <div className="notes-card-text">{ReactHtmlParser(text)}</div>
      <div className="notes-card-footer">
        <div className="notes-creation-details">
          <p>
            {getDate(date)} | {getTime(date)}
          </p>
        </div>
        <div className="notes-card-footer-actions">
          <button title="Delete" className="notes-card-action">
            <i className="fa-solid fa-trash"></i>
          </button>
          <button
            title="Edit"
            className="notes-card-action"
            onClick={() => editNoteHandler}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button title="Archive" className="notes-card-action">
            <i className="fa-solid fa-box-archive"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export { NotesCard };
