import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider, NotesProvider, ArchiveProvider } from "./context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ArchiveProvider>
        <NotesProvider>
          <App />
        </NotesProvider>
      </ArchiveProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
