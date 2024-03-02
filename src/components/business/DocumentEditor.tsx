import { ChangeEventHandler, useEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";
import { Document } from "types/document";
import useContentEditablePlaceholder from "hooks/useContentEditablePlaceholder";
import { putDocument } from "api";
import debounce from "lodash.debounce"; // lodash에서 debounce 함수 import

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
  const titleRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [handleTitleFocus, handleTitleBlur] =
    useContentEditablePlaceholder("제목이 없습니다");
  const [handleContentFocus, handleContentBlur] =
    useContentEditablePlaceholder("내용이 없습니다");

  useEffect(() => {
    const titleEl = titleRef.current as HTMLDivElement;
    const contentEl = contentRef.current as HTMLDivElement;
    titleEl.textContent = document.title;
    contentEl.textContent = document.content as string;
    contentEl.focus();

    const selection = window.getSelection();
    if (selection) {
      const range = window.document.createRange();
      range.selectNodeContents(contentEl);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, [document]);

  const debouncedPutDocument = debounce((title: string, content: string) => {
    putDocument(document.id, { title, content });
  }, 2000);

  const handleTitleChange: ChangeEventHandler<HTMLDivElement> = (e) => {
    const contentEl = contentRef.current as HTMLDivElement;
    debouncedPutDocument(
      e.currentTarget.textContent as string,
      contentEl.textContent as string
    );
  };

  const handleContentChange: ChangeEventHandler<HTMLDivElement> = (e) => {
    const titleEl = titleRef.current as HTMLDivElement;
    debouncedPutDocument(
      titleEl.textContent as string,
      e.currentTarget.textContent as string
    );
  };

  return (
    <Wrapper>
      <Title
        ref={titleRef}
        contentEditable={true}
        onInput={handleTitleChange}
        onFocus={handleTitleFocus}
        onBlur={handleTitleBlur}
      ></Title>
      <Content
        ref={contentRef}
        contentEditable={true}
        onInput={handleContentChange}
        onFocus={handleContentFocus}
        onBlur={handleContentBlur}
      ></Content>
    </Wrapper>
  );
};

export default DocumentEditor;
