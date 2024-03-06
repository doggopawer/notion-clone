import {
  DeleteModeContext,
  DeleteModeContextType,
} from "context/DeleteModeContext";

import { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const DocumentDeleteButton = () => {
  const { deleteIdList, handleDeleteDocumentList } = useContext(
    DeleteModeContext
  ) as DeleteModeContextType;

  return (
    <Wrapper onClick={() => handleDeleteDocumentList(deleteIdList)}>
      <Text>{deleteIdList.length} 개의 노트를 삭제</Text>
    </Wrapper>
  );
};

export default DocumentDeleteButton;
