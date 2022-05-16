import React from "react";
import "./Archive.css";
import { useAuth, useArchive } from "../../context/";
import { SideNav, NotesCard, Header } from "../../components";

const Archive = () => {
  const { authState: token } = useAuth();

  const {
    archiveState: { archives },
    archiveDispatch,
  } = useArchive();

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
            {archives
              ? archives.map((note) => <NotesCard key={note._id} note={note} />)
              : null}
            {}
          </section>
        </section>
      </main>
    </>
  );
};

export { Archive };
