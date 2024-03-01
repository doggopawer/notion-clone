import { ChangeEventHandler, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Document } from "types/document";
import useContentEditablePlaceholder from "hooks/useContentEditablePlaceholder";

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
  const [handleTitleFocus, handleTitleBlur] =
    useContentEditablePlaceholder("제목이 없습니다");
  const [handleContentFocus, handleContentBlur] =
    useContentEditablePlaceholder("내용이 없습니다");

  useEffect(() => {
    setTitle(document.title);
    setContent(document.content as string);
  }, [setTitle, setContent, document]);

  const handleTitleChange: ChangeEventHandler<HTMLDivElement> = (e) => {
    setTitle(e.currentTarget.textContent as string);
  };
  const handleContentChange: ChangeEventHandler<HTMLDivElement> = (e) => {
    setContent(e.currentTarget.textContent as string);
  };

  return (
    <Wrapper>
      <Title
        contentEditable={true}
        onChange={handleTitleChange}
        onFocus={handleTitleFocus}
        onBlur={handleTitleBlur}
      >
        {title}
      </Title>
      <Content
        contentEditable={true}
        onChange={handleContentChange}
        onFocus={handleContentFocus}
        onBlur={handleContentBlur}
      >
        {content}
      </Content>
    </Wrapper>
  );
};

export default DocumentEditor;
