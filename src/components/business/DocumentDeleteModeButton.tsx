import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DeleteModeContext,
  DeleteModeContextType,
} from "context/DeleteModeContext";
import { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  border: none;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  cursor: pointer;
`;
const TrashIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;
const Dot = styled.div`
  width: 20px;
  height: 2px;
  border-radius: 50%;
  background: ${(props) => props.theme.secondary};
  transition: all 0.3s ease-in-out;
  opacity: 0;

  &.active {
    opacity: 1;
  }
`;

const DocumentDeleteModeButton = () => {
  const { isDeleteMode, handleToggleIsDeleteMode } = useContext(
    DeleteModeContext
  ) as DeleteModeContextType;
  return (
    <Wrapper onClick={handleToggleIsDeleteMode}>
      <TrashIcon icon={faTrash} />
      <Dot className={isDeleteMode ? "active" : ""} />
    </Wrapper>
  );
};

export default DocumentDeleteModeButton;
