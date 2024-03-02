import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DocumentMainPage from "./pages/notes/DocumentMainPage";
import DocumentEditorPage from "./pages/notes/DocumentEditorPage";
import Layout from "./pages/Layout";
import DocumentHistoryProvider, {
  DocumentHistory,
} from "context/DocumentHistoryContext";

function App() {
  const [documentHistories, setDocumentHistories] = useState<DocumentHistory[]>(
    [{ id: NaN, title: "메인" }]
  );

  return (
    <DocumentHistoryProvider
      value={{ documentHistories, setDocumentHistories }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/documents">
            <Route index element={<DocumentMainPage />} />
            <Route path=":id" element={<DocumentEditorPage />} />
          </Route>
        </Route>
      </Routes>
    </DocumentHistoryProvider>
  );
}

export default App;
