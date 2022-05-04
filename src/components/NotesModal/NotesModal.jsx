import React, { useState } from "react";
import { formatDate } from "../../backend/utils/authUtils";
import { TextEditor } from "../index";
import { toast } from "react-toastify";
import { useNotes, useAuth } from "../../context/";
import { addNoteHandler } from "../../functions/";
import "./NotesModal.css";

const NotesModal = ({
  showCreateModal,
  setShowCreateModal,
  editMode,
  setEditMode,
}) => {
  const { notesDispatch } = useNotes();

  const {
    authState: { token },
  } = useAuth();

  const [newNote, setNewNote] = useState(
    editMode ?? {
      title: "",
      text: "",
      label: "",
      priority: "",
      color: "",
      isPinned: false,
      tags: [],
      date: formatDate(),
    }
  );

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNewNote((prev) => ({ ...prev, [name]: value }));
  };

  const checkInputs = () => {
    if (newNote.title === "") {
      toast.warning("Note Title is required");
      return false;
    } else if (newNote.text === "") {
      toast.warning("Note Content is required");
      return false;
    } else {
      return true;
    }
  };

  const createNoteHandler = () => {
    if (checkInputs()) {
      addNoteHandler(token, newNote, notesDispatch);
      setShowCreateModal(false);
    }
  };

  return (
    <section
      className={`note-editor-wrapper ${showCreateModal ? "modal-active" : ""}`}
    >
      <section className="note-editor">
        <div className="note-editor-header">
          <h2 className="note-editor-title">Create Note</h2>
          <button onClick={() => setShowCreateModal(false)}>
            <i className="fa-solid fa-xmark close-btn"></i>
          </button>
        </div>
        <div className="note-editor-content">
          <input
            type="text"
            name="title"
            placeholder="Title..."
            className="note-title"
            value={newNote.title}
            onChange={inputHandler}
          />
          <TextEditor newNote={newNote} setNewNote={setNewNote} />
        </div>
        <div className="note-editor-options">
          <div className="note-editor-options-element">
            <label htmlFor="label" className="note-editor-label">
              Label
            </label>
            <select
              id="label"
              name="label"
              value={newNote.label}
              onChange={inputHandler}
            >
              <option>Select Label</option>
              <option value="work">Work</option>
              <option value="meetings">Meetings</option>
            </select>
          </div>
          <div className="note-editor-options-element">
            <label className="note-editor-label" htmlFor="priority">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={newNote.priority}
              onChange={inputHandler}
            >
              <option>Default</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="note-editor-options-element">
            <label className="note-editor-label" htmlFor="color">
              Color
            </label>
            <select
              id="color"
              name="color"
              value={newNote.color}
              onChange={inputHandler}
            >
              <option value="white">White</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="orange">Orange</option>
            </select>
          </div>
        </div>
        <div className="note-editor-footer">
          <button onClick={createNoteHandler} className="btn btn-primary">
            Create Note
          </button>
        </div>
      </section>
    </section>
  );
};

export { NotesModal };
