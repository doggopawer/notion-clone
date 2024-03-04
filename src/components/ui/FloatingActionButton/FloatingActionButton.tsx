import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  right: 16px;
  bottom: calc(56px + 30px);
  width: 56px;
`;
const FabButton = styled.button`
  position: fixed;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.secondary};
  z-index: 999;

  transition: all 0.3s ease-in-out;
  transform: rotate(0deg);
  &.active {
    transform: rotate(45deg);
  }
`;

const PlusIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const Content = styled.div`
  transition: all 0.3s ease-in-out;
  opacity: 0;
  transform: translateY(0);
  z-index: 0;
  &.active {
    opacity: 1;
    transform: translateY(-56px);
  }
`;

type FloatingActionButtonProps = {
  children: React.ReactNode;
};
const FloatingActionButton = ({ children }: FloatingActionButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <FabButton className={isOpen ? "active" : ""} onClick={handleToggleModal}>
        <PlusIcon icon={faPlus} />
      </FabButton>
      <Content className={isOpen ? "active" : ""}>{children}</Content>
    </Wrapper>
  );
};

export default FloatingActionButton;
