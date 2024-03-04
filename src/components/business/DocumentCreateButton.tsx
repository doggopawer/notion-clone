import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.secondary};
`;
const PenIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const DocumentCreateButton = () => {
  return (
    <Button>
      <PenIcon icon={faPen} />
    </Button>
  );
};

export default DocumentCreateButton;
