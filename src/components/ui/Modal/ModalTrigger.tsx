import React from "react";
import styled, { RuleSet } from "styled-components";
import { useContext } from "react";
import { ModalContext, ModalContextType } from "context/ModalContext";

type ModalTriggerProps = {
  children?: React.ReactNode;
  css?: RuleSet<object>;
};
type WrapperProps = {
  css?: RuleSet<object>;
};

const Wrapper = styled.button<WrapperProps>`
  ${({ css }) => css}
`;

const ModalTrigger = ({ children, css }: ModalTriggerProps) => {
  const { handleOpenModal } = useContext(ModalContext) as ModalContextType;
  return (
    <Wrapper css={css} onClick={handleOpenModal}>
      {children}
    </Wrapper>
  );
};

export default ModalTrigger;
