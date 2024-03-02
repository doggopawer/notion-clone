import { DocumentHistory } from "context/DocumentHistoryContext";
import styled from "styled-components";

const Wrapper = styled.div``;

type DocumentHistoryItemProps = {
  documentHistory: DocumentHistory;
};

const DocumentHistoryItem = ({ documentHistory }: DocumentHistoryItemProps) => {
  const { id, title } = documentHistory;

  const handleClick = () => {
    console.log(id);
  };

  return (
    <Wrapper>
      <button onClick={handleClick}>{title}</button>
    </Wrapper>
  );
};

export default DocumentHistoryItem;
