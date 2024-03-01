import { useContext } from "react";
import List from "components/ui/List";
import { Document } from "types/document";

import DocumentItem from "components/business/DocumentItem";
import { DocumentContext, DocumentContextType } from "context/DocumentContext";

const DocumentList = () => {
  const { documents } = useContext(DocumentContext) as DocumentContextType;

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
