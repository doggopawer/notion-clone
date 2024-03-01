import List from "components/ui/List";
import { Document } from "types/document";

import DocumentItem from "components/business/DocumentItem";

type DocumentListProps = {
  documents: Document[];
};

const DocumentList = ({ documents }: DocumentListProps) => {
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
