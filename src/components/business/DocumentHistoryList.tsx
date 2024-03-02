import List from "components/ui/List";

import { useContext } from "react";
import {
  DocumentHistory,
  DocumentHistoryContext,
  DocumentHistoryContextType,
} from "context/DocumentHistoryContext";
import DocumentHistoryItem from "./DocumentHistoryItem";

const DocumentHistoryList = () => {
  const { documentHistories, setDocumentHistories } = useContext(
    DocumentHistoryContext
  ) as DocumentHistoryContextType;
  return (
    <List<DocumentHistory>
      data={documentHistories}
      render={(documentHistory) => (
        <DocumentHistoryItem documentHistory={documentHistory} />
      )}
    />
  );
};

export default DocumentHistoryList;
