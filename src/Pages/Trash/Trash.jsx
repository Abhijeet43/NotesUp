import React from "react";
import "./Trash.css";
import { SideNav, NotesCard, Header } from "../../components";

const Trash = () => {
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
            <NotesCard />
            <NotesCard />
            <NotesCard />
          </section>
        </section>
      </main>
    </>
  );
};

export { Trash };
