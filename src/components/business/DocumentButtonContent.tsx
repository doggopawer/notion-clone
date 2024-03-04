import React from "react";
import styled from "styled-components";
import DocumentCreateButton from "./DocumentCreateButton";
import DocumentTreeShowButton from "./DocumentTreeShowButton";

const Wrapper = styled.div``;
const ButtonContainer = styled.div`
  margin-bottom: 10px;
`;

const DocumentButtonContent = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <DocumentCreateButton />
      </ButtonContainer>
      <DocumentTreeShowButton />
    </Wrapper>
  );
};

export default DocumentButtonContent;
