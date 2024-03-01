import { useEffect, useState } from "react";
import List from "components/ui/List";
import { Document } from "types/document";
import { getDocuments } from "api";
import DocumentItem from "components/business/DocumentItem";
import DocumentListProvider from "context/DocumentListContext";

const DocumentList = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getDocuments();
        setDocuments(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <DocumentListProvider value={{ documents, setDocuments }}>
      <List<Document>
        data={documents}
        render={(document) => (
          <DocumentItem key={document.id} document={document} />
        )}
      />
    </DocumentListProvider>
  );
};

export default DocumentList;
