import React from "react";
import styled, { RuleSet } from "styled-components";
import { useContext } from "react";
import { ModalContext, ModalContextType } from "context/ModalContext";

type ModalCloseProps = {
  children?: React.ReactNode;
  css?: RuleSet<object>;
};
type WrapperProps = {
  css?: RuleSet<object>;
};

const Wrapper = styled.button<WrapperProps>`
  ${({ css }) => css}
`;

const ModalClose = ({ children, css }: ModalCloseProps) => {
  const { handleCloseModal } = useContext(ModalContext) as ModalContextType;
  return (
    <Wrapper css={css} onClick={handleCloseModal}>
      {children}
    </Wrapper>
  );
};

export default ModalClose;
