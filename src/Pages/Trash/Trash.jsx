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
          {trash.length > 0 ? (
            <section className="cards-container">
              {trash.map((note) => (
                <NotesCard key={note._id} note={note} />
              ))}
            </section>
          ) : (
            <section className="empty-container">
              <h3 className="empty-text">Trash donot have any notes.</h3>
            </section>
          )}
        </section>
      </main>
    </>
  );
};

export { Trash };
