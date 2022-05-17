import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { useLocation } from "react-router-dom";
import { getDate, getTime } from "../../functions/";
import { NotesModal } from "../NotesModal/NotesModal";
import { useAuth, useArchive, useNotes, useTrash } from "../../context/";
import {
  addToArchiveHandler,
  restoreArchivesHandler,
  deleteFromArchivesHandler,
  deleteNoteHandler,
  restoreFromTrashHandler,
  removeFromTrashHandler,
} from "../../functions/";
import "./NotesCard.css";

const NotesCard = ({ note }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const {
    authState: { token },
  } = useAuth();

  const {
    archiveState: { archives },
    archiveDispatch,
  } = useArchive();

  const {
    trashState: { trash },
    trashDispatch,
  } = useTrash();

  const {
    notesState: { notes },
    notesDispatch,
  } = useNotes();

  const { pathname } = useLocation();

  const restoreFromTrash = () => {
    restoreFromTrashHandler(
      token,
      note,
      notes,
      trash,
      trashDispatch,
      notesDispatch
    );
  };

  const addToTrash = () => {
    if (pathname === "/notes" || pathname.includes("labels")) {
      deleteNoteHandler(token, note, notesDispatch, trashDispatch);
    } else if (pathname === "/archive") {
      deleteFromArchivesHandler(token, note, archiveDispatch, trashDispatch);
    } else {
      removeFromTrashHandler(token, note, trashDispatch);
    }
  };

  const addToArchive = () =>
    addToArchiveHandler(token, note, archiveDispatch, notesDispatch);

  const restoreFromArchive = () =>
    restoreArchivesHandler(
      token,
      note,
      notes,
      archives,
      archiveDispatch,
      notesDispatch
    );

  const editModalHandler = () => {
    setShowCreateModal(true);
  };
  return (
    <>
      {console.log(note)}
      <div className={`notes-card ${note.color.toLowerCase()}`}>
        <div className="notes-card-header">
          <h3 className="notes-card-title">{note.title}</h3>
          <div className="notes-card-header-side">
            {note.priority !== "Default" ? (
              <div className="priority">{note.priority}</div>
            ) : null}
            <button title="Pin" className="notes-card-action">
              <i className="fa-solid fa-thumbtack"></i>
            </button>
          </div>
        </div>
        <div className="notes-card-text">{ReactHtmlParser(note.text)}</div>
        {note.label !== "" ? <div className="label">{note.label}</div> : null}
        <div className="notes-card-footer">
          <div className="notes-creation-details">
            <p>
              {getDate(note.date)} | {getTime(note.date)}
            </p>
          </div>
          <div className="notes-card-footer-actions">
            <button
              title="Delete"
              className="notes-card-action"
              onClick={addToTrash}
            >
              <i className="fa-solid fa-trash"></i>
            </button>

            {pathname === "/trash" ? (
              <button
                title="Restore"
                className="notes-card-action"
                onClick={restoreFromTrash}
              >
                <i className="icon fa-solid fa-trash-arrow-up"></i>
              </button>
            ) : null}

            {pathname === "/notes" || pathname.includes("labels") ? (
              <button
                title="Edit"
                className="notes-card-action"
                onClick={editModalHandler}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            ) : null}

            {pathname === "/trash" ? null : pathname !== "/archive" ? (
              <button
                title="Archive"
                className="notes-card-action"
                onClick={addToArchive}
              >
                <i className="fa-solid fa-box-archive"></i>
              </button>
            ) : (
              <button
                title="Unarchive"
                className="notes-card-action"
                onClick={restoreFromArchive}
              >
                <i className="fa-solid fa-box-archive"></i>
              </button>
            )}
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
