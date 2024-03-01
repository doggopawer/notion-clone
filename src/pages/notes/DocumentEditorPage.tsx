import DocumentEditor from "components/business/DocumentEditor";
import DocumentProvider from "context/DocumentContext";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDocumentById } from "api";
import { Document } from "types/document";
import DocumentList from "components/business/DocumentList";

const NoteEditorPage = () => {
  const [document, setDocument] = useState<Document>({} as Document);
  const [documents, setDocuments] = useState<Document[]>([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await getDocumentById(parseInt(id as string));
        setDocument(data);
        setDocuments(data.documents);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);
  return (
    <DocumentProvider value={{ documents, setDocuments }}>
      <DocumentEditor />
      <DocumentList documents={documents} />
    </DocumentProvider>
  );
};
export default NoteEditorPage;
