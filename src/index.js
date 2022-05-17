import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  AuthProvider,
  NotesProvider,
  ArchiveProvider,
  TrashProvider,
  LabelProvider,
  FilterProvider,
} from "./context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <LabelProvider>
        <NotesProvider>
          <TrashProvider>
            <ArchiveProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
            </ArchiveProvider>
          </TrashProvider>
        </NotesProvider>
      </LabelProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
