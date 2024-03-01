import React from "react";
import { Routes, Route } from "react-router-dom";
import DocumentMainPage from "./pages/notes/DocumentMainPage";
import DocumentEditorPage from "./pages/notes/DocumentEditorPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/documents">
          <Route index element={<DocumentMainPage />} />
          <Route path=":id" element={<DocumentEditorPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
