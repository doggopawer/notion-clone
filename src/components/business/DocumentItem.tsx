import styled from "styled-components";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Document } from "types/document";
import { useContext } from "react";
import {
  DeleteModeContext,
  DeleteModeContextType,
} from "context/DeleteModeContext";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.li`
  position: relative;
  border: 1.5px solid ${(props) => props.theme.secondary};
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  margin-bottom: 24px;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: rotateX(0);
  &.active {
    transform: rotateX(360deg);
    border: 1.5px solid ${(props) => props.theme.primary};
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-left: 40px;
`;

const DocumentIcon = () => {
  const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin-left: 32px;
    font-size: 24px;
  `;
  return <StyledFontAwesomeIcon icon={faFile} />;
};

type DocumentItemProps = {
  document: Document;
};

const DocumentItem = ({ document }: DocumentItemProps) => {
  const { id } = document;
  const navigate = useNavigate();
  const { deleteIdList, handlePushDeleteId, isDeleteMode } = useContext(
    DeleteModeContext
  ) as DeleteModeContextType;

  const isDeleted = deleteIdList.includes(id);

  const handleNavigateToDocument = () => {
    navigate(`/documents/${id}`);
  };

  return (
    <Wrapper
      className={isDeleted ? "active" : ""}
      onClick={
        isDeleteMode ? () => handlePushDeleteId(id) : handleNavigateToDocument
      }
    >
      <DocumentIcon />
      <Title>{document.title}</Title>
    </Wrapper>
  );
};

export default DocumentItem;
