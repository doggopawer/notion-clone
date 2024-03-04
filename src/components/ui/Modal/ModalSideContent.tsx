import { ModalContext, ModalContextType } from "context/ModalContext";
import React, { useContext } from "react";
import styled from "styled-components";

type ModalSideContentProps = {
  children: React.ReactNode;
};

const ContentContainer = styled.div`
  height: 100vh;
  width: 80%;
  position: fixed;
  top: 0;
  right: 0;

  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};

  padding: 20px;
  z-index: 999;
`;

const ModalSideContent: React.FC<ModalSideContentProps> = ({ children }) => {
  const { isOpen } = useContext(ModalContext) as ModalContextType;
  return <>{isOpen && <ContentContainer>{children}</ContentContainer>}</>;
};

export default ModalSideContent;
