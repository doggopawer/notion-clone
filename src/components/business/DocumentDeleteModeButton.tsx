import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
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

const DocumentDeleteModeButton = () => {
  return (
    <Wrapper>
      <TrashIcon icon={faTrash} />
    </Wrapper>
  );
};

export default DocumentDeleteModeButton;
