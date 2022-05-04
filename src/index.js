import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider, NotesProvider } from "./context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <NotesProvider>
        <App />
      </NotesProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
