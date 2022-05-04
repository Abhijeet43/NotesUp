import React from "react";
import { TextEditor } from "../index";
import "./NotesModal.css";

const NotesModal = ({ showCreateModal, setShowCreateModal }) => {
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
          <input type="text" placeholder="Title..." className="note-title" />
          <TextEditor />
        </div>
        <div className="note-editor-options">
          <div className="note-editor-options-element">
            <label htmlFor="label" className="note-editor-label">
              Label
            </label>
            <select id="label">
              <option>Select Label</option>
              <option value="work">Work</option>
              <option value="meetings">Meetings</option>
            </select>
          </div>
          <div className="note-editor-options-element">
            <label className="note-editor-label" htmlFor="priority">
              Priority
            </label>
            <select id="priority">
              <option>Default</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="note-editor-options-element">
            <label className="note-editor-label" htmlFor="color">
              Color
            </label>
            <select id="color">
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
          <button className="btn btn-primary">Create Note</button>
        </div>
      </section>
    </section>
  );
};

export { NotesModal };
