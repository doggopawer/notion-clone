import { ModalContextType, ModalContext } from "context/ModalContext";
import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 투명한 검은색 배경 */
  z-index: 99; /* 모달보다 더 위에 위치하도록 설정 */
`;

const ModalBackdrop = () => {
  const { isOpen } = React.useContext(ModalContext) as ModalContextType;
  return <>{isOpen && <Backdrop />}</>;
};

export default ModalBackdrop;
