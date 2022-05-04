import React from "react";
import "./Archive.css";
import { SideNav, NotesCard, Header } from "../../components";

const Archive = () => {
  return (
    <>
      <main className="main-section">
        <SideNav />
        <section className="notes-content">
          <Header />
          <section className="section-title-container">
            <h2 className="section-title">Archives</h2>
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

export { Archive };
