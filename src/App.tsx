import React from "react";
import { Routes, Route } from "react-router-dom";
import NoteMainPage from "./pages/notes/NoteMainPage";
import NoteEditorPage from "./pages/notes/NoteEditorPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/notes">
          <Route index element={<NoteMainPage />} />
          <Route path=":id" element={<NoteEditorPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
