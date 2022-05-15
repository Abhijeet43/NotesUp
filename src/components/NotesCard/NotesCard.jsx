import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { getDate, getTime } from "../../functions/";
import { NotesModal } from "../NotesModal/NotesModal";
import "./NotesCard.css";

const NotesCard = ({ note }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const editModalHandler = () => {
    setShowCreateModal(true);
  };
  return (
    <>
      <div className="notes-card">
        <div className="notes-card-header">
          <h3 className="notes-card-title">{note.title}</h3>
          <button title="Pin" className="notes-card-action">
            <i className="fa-so lid fa-thumbtack"></i>
          </button>
        </div>
        <div className="notes-card-text">{ReactHtmlParser(note.text)}</div>
        <div className="notes-card-footer">
          <div className="notes-creation-details">
            <p>
              {getDate(note.date)} | {getTime(note.date)}
            </p>
          </div>
          <div className="notes-card-footer-actions">
            <button title="Delete" className="notes-card-action">
              <i className="fa-solid fa-trash"></i>
            </button>
            <button
              title="Edit"
              className="notes-card-action"
              onClick={editModalHandler}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button title="Archive" className="notes-card-action">
              <i className="fa-solid fa-box-archive"></i>
            </button>
          </div>
        </div>
      </div>
      {showCreateModal ? (
        <NotesModal
          setShowCreateModal={setShowCreateModal}
          noteData={note}
          editData={true}
        />
      ) : null}
    </>
  );
};
export { NotesCard };
