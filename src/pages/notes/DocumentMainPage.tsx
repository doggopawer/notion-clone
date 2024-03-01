import DocumentList from "components/business/DocumentList";
import DocumentProvider from "context/DocumentContext";
import { useState, useEffect } from "react";
import { getDocuments } from "api";
import { Document } from "types/document";

const NoteMainPage = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    (async () => {
      try {
        // TODO: getDocuments 삭제 후, getDocumentById로 교체하고 useParams로 id 전달하기
        const data = await getDocuments();
        setDocuments(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <DocumentProvider value={{ documents, setDocuments }}>
      <DocumentList />
    </DocumentProvider>
  );
};
export default NoteMainPage;
