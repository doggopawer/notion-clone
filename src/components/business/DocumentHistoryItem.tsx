import { DocumentHistory } from "context/DocumentHistoryContext";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 20px;
  white-space: nowrap; /* 텍스트가 넘칠 때 줄 바꿈 방지 */
`;
const BreadcrumbItem = styled.div`
  text-overflow: ellipsis; /* 넘친 텍스트 생략 기호(...)로 대체 */
  cursor: pointer; /* 클릭 가능한 커서 스타일 */
`;
const Slash = styled.div`
  margin: 0 7px;
`;

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
      <BreadcrumbItem onClick={handleClick}>{title}</BreadcrumbItem>
      <Slash>/</Slash>
    </Wrapper>
  );
};

export default DocumentHistoryItem;
