import { ChangeEventHandler, KeyboardEventHandler, useEffect } from "react";
import styled from "styled-components";
import { useState, useCallback, useRef } from "react";
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

  // lodash의 debounce 함수를 사용하여 디바운스 적용
  const debouncedPutDocument = useCallback(
    debounce((title: string, content: string) => {
      putDocument(document.id, { title, content });
    }, 2000), // 500ms 딜레이로 디바운스 적용
    [document.id]
  );

  const handleTitleChange: KeyboardEventHandler<HTMLDivElement> = async (e) => {
    // 변경된 title과 content를 디바운스 적용한 함수에 전달
    // debouncedPutDocument(e.currentTarget.textContent as string, content);
    // setTitle(e.currentTarget.textContent as string);

    console.log(e.nativeEvent.isComposing);
    // const selection = window.getSelection();
    // if (selection) {
    //   const range = window.document.createRange();
    //   range.selectNodeContents(e.currentTarget);
    //   range.collapse(false); // 커서를 끝으로 이동
    //   selection.removeAllRanges();
    //   selection.addRange(range);
    // }

    debouncedPutDocument(content, e.currentTarget.textContent as string);
  };

  const handleContentChange: ChangeEventHandler<HTMLDivElement> = (e) => {
    // setContent(e.currentTarget.textContent as string);
    // 변경된 title과 content를 디바운스 적용한 함수에 전달

    // const selection = window.getSelection();
    // if (selection) {
    //   const range = window.document.createRange();
    //   range.selectNodeContents(e.currentTarget);
    //   range.collapse(false); // 커서를 끝으로 이동
    //   selection.removeAllRanges();
    //   selection.addRange(range);
    // }

    debouncedPutDocument(title, e.currentTarget.textContent as string);
  };

  return (
    <Wrapper>
      <Title
        ref={titleRef}
        contentEditable={true}
        onKeyDown={handleTitleChange}
        onFocus={handleTitleFocus}
        onBlur={handleTitleBlur}
      >
        {title}
      </Title>
      <Content
        contentEditable={true}
        onInput={handleContentChange}
        onFocus={handleContentFocus}
        onBlur={handleContentBlur}
      >
        {content}
      </Content>
    </Wrapper>
  );
};

export default DocumentEditor;
