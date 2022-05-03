import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Notes, Archive } from "./Pages/";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
