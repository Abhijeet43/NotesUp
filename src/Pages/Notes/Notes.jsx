import React, { useState } from "react";
import {
  NotesCard,
  SideNav,
  FilterModal,
  NotesModal,
  Header,
} from "../../components/";
import "./Notes.css";
import { useNotes, useAuth } from "../../context";

const Notes = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editMode, setEditMode] = useState(null);

  const {
    authState: { token },
  } = useAuth();

  const {
    notesState: { notes },
    notesDispatch,
  } = useNotes();

  return (
    <main className="main-section">
      <SideNav />
      <section className="notes-content">
        <Header />
        <section className="notes-section-title">
          <div className="notes-title-text">
            <h2 className="notes-page-title">Notes</h2>
            <span className="notes-subtitle">(6)</span>
          </div>
        </section>

        <hr />

        <section className="notes-page-actions">
          <FilterModal
            setShowFilterModal={setShowFilterModal}
            showFilterModal={showFilterModal}
          />
          <div className="new-notes">
            <button
              className="btn btn-primary no-max-width"
              onClick={() => setShowCreateModal(true)}
            >
              <i className="fa-solid fa-plus margin-right"></i>
              Add New Note
            </button>
            <NotesModal
              showCreateModal={showCreateModal}
              setShowCreateModal={setShowCreateModal}
              editMode={editMode}
              setEditMode={setEditMode}
            />
          </div>
        </section>

        <hr />
        <section className="cards-container">
          {notes.map((note) => {
            return (
              <NotesCard
                key={note._id}
                note={note}
                setEditMode={setEditMode}
                setShowCreateModal={setShowCreateModal}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
};

export { Notes };
