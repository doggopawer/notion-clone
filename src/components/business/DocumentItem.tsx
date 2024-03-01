import styled, { css } from "styled-components";
import { faFile, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Document } from "types/document";
import Modal from "components/ui/Modal/Modal";
import Portal from "components/ui/Portal";
import DeleteDocumentContent from "./DeleteDocumentContent";

const Wrapper = styled.li`
  position: relative;
  border: 1.5px solid ${(props) => props.theme.secondary};
  background: ${(props) => props.theme.primary};
  margin-bottom: 24px;
  border-radius: 10px;
`;

const Anchor = styled(Link)`
  color: ${(props) => props.theme.secondary};
  text-decoration: none;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-left: 40px;
`;
const SlideToDeleteButton = styled.div`
  width: 80px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.5s ease;
  transform: translateX(100%);

  &:hover {
    transform: translateX(0);
  }
`;
const DocumentIcon = () => {
  const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin-left: 32px;
    font-size: 24px;
  `;
  return <StyledFontAwesomeIcon icon={faFile} />;
};
const DeleteIcon = () => {
  const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
  `;
  return <StyledFontAwesomeIcon icon={faTrash} />;
};

const triggerButtonCSS = css`
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
`;

type DocumentItemProps = {
  document: Document;
};

const DocumentItem = ({ document }: DocumentItemProps) => {
  return (
    <Wrapper>
      <Anchor to={`/documents/${document.id}`}>
        <DocumentIcon />
        <Title>{document.title}</Title>
      </Anchor>
      {
        <SlideToDeleteButton>
          <Modal>
            <Modal.Trigger css={triggerButtonCSS}>
              <DeleteIcon />
            </Modal.Trigger>
            <Portal>
              <Modal.Content>
                <DeleteDocumentContent documentId={document.id} />
              </Modal.Content>
              <Modal.Backdrop />
            </Portal>
          </Modal>
        </SlideToDeleteButton>
      }
    </Wrapper>
  );
};

export default DocumentItem;
