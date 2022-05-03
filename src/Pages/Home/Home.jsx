import React from "react";
import "./Home.css";
import hero from "../../assets/hero.png";

const Home = () => {
  return (
    <main className="home-section">
      <h1 className="app-title">
        <span className="primary">Notes</span> Up
      </h1>
      <section className="home-content">
        <section className="section-content">
          <h2 className="section-content-title">Note Taking Made Simple.</h2>
          <p className="section-content-description">
            NotesUp helps you note,organize and share your thoughts really
            simple.
          </p>
          <div className="btn-container">
            <button className="btn btn-primary">Join Now</button>
            <button className="btn secondary-btn">
              Already have an account?
            </button>
          </div>
        </section>
        <section className="section-hero">
          <img className="hero-img" src={hero} alt="hero" loading="lazy" />
        </section>
      </section>
    </main>
  );
};

export { Home };
