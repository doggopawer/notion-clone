import { useEffect, useState } from "react";
import List from "components/ui/List";
import { Document } from "types/document";
import { getDocuments } from "api";

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
      render={(document, index) => <div key={index}>{document.title}</div>}
    />
  );
};

export default DocumentList;
