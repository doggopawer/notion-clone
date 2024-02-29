import { useEffect, useState } from "react";
import axios from "api/axios";
import List from "components/ui/List";
import { Document } from "types/document";

const DocumentList = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/documents");
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
