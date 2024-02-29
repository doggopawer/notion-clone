import { useEffect, useState } from "react";
import List from "components/ui/List";
import { Document } from "types/document";
import { getDocuments } from "api";
import DocumentItem from "components/business/DocumentItem";

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
    <List<Document>
      data={documents}
      render={(document) => (
        <DocumentItem key={document.id} document={document} />
      )}
    />
  );
};

export default DocumentList;
