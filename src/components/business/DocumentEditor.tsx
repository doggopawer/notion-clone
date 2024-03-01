import { ChangeEventHandler, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Document } from "types/document";

const Wrapper = styled.div``;
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  word-spacing: 2px;
  letter-spacing: 1px;
  margin-bottom: 28px;
  &:focus {
    outline: none;
  }
`;
const Content = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  word-spacing: 2px;
  letter-spacing: 1px;
  margin-bottom: 28px;
  &:focus {
    outline: none;
  }
`;

type DocumentEditorProps = {
  document: Document;
};

const DocumentEditor = ({ document }: DocumentEditorProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setTitle(document.title);
    setContent(document.content as string);
  }, [setTitle, setContent, document]);

  const handleTitleChange: ChangeEventHandler<HTMLDivElement> = (event) => {
    setTitle(event.target.textContent as string);
  };
  const handleContentChange: ChangeEventHandler<HTMLDivElement> = (event) => {
    setContent(event.target.textContent as string);
  };

  return (
    <Wrapper>
      <Title contentEditable={true} onChange={handleTitleChange}>
        {title}
      </Title>
      <Content contentEditable={true} onChange={handleContentChange}>
        {content}
      </Content>
    </Wrapper>
  );
};

export default DocumentEditor;
