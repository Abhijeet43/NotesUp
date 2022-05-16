import React from "react";
import "./Trash.css";
import { SideNav, NotesCard, Header } from "../../components";
import { useAuth, useTrash } from "../../context/";

const Trash = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    trashState: { trash },
    trashDispatch,
  } = useTrash();
  return (
    <>
      <main className="main-section">
        <SideNav />
        <section className="notes-content">
          <Header />
          <section className="section-title-container">
            <h2 className="section-heading">Trash</h2>
          </section>
          <section className="cards-container">
            {trash
              ? trash.map((note) => <NotesCard key={note._id} note={note} />)
              : null}
          </section>
        </section>
      </main>
    </>
  );
};

export { Trash };
