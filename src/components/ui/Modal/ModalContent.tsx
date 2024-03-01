import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ModalContext, ModalContextType } from "context/modalContext";

type ModalContentProps = {
  children: React.ReactNode;
};

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  border: 1.5px solid ${({ theme }) => theme.secondary};
  padding: 20px;
  border-radius: 8px;
  z-index: 200;
`;

const ModalContent = ({ children }: ModalContentProps) => {
  const { isOpen } = useContext(ModalContext) as ModalContextType;
  return <>{isOpen && <ContentContainer>{children}</ContentContainer>}</>;
};

export default ModalContent;
