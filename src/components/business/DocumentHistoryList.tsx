import List from "components/ui/List";

import { useContext } from "react";
import {
  DocumentHistory,
  DocumentHistoryContext,
  DocumentHistoryContextType,
} from "context/DocumentHistoryContext";
import DocumentHistoryItem from "./DocumentHistoryItem";
import styled from "styled-components";

const Wrapper = styled.ul`
  width: 50%;
  display: flex;
`;

const DocumentHistoryList = () => {
  const { documentHistories, setDocumentHistories } = useContext(
    DocumentHistoryContext
  ) as DocumentHistoryContextType;
  return (
    <Wrapper>
      <List<DocumentHistory>
        data={documentHistories}
        render={(documentHistory) => (
          <DocumentHistoryItem documentHistory={documentHistory} />
        )}
      />
    </Wrapper>
  );
};

export default DocumentHistoryList;
