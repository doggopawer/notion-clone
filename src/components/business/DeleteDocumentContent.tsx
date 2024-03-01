import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteDocument } from "api";
import { useContext } from "react";
import Modal from "components/ui/Modal/Modal";
import styled, { css } from "styled-components";
import { DocumentContext, DocumentContextType } from "context/DocumentContext";

const Wrapper = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DeleteIconContainer = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 24px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DeleteIcon = () => {
  const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 20px;
  `;
  return <StyledFontAwesomeIcon icon={faTrash} />;
};
const ConfirmMessage = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
`;
const Button = styled.button`
  padding: 8px 48px;
  margin-bottom: 20px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.secondary};
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
`;

const closeButtonCSS = css`
  border: none;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

type DeleteDocumentContentProps = {
  documentId: number;
};

const DeleteDocumentContent = ({ documentId }: DeleteDocumentContentProps) => {
  const { documents, setDocuments } = useContext(
    DocumentContext
  ) as DocumentContextType;
  const handleDeleteDocument = async (documentId: number) => {
    await deleteDocument(documentId);
    setDocuments(documents.filter((document) => document.id !== documentId));
  };

  return (
    <Wrapper>
      <DeleteIconContainer>
        <DeleteIcon />
      </DeleteIconContainer>
      <ConfirmMessage>Are You Sure?</ConfirmMessage>
      <Button onClick={async () => handleDeleteDocument(documentId)}>
        Delete
      </Button>
      <Modal.Close css={closeButtonCSS}>cancel</Modal.Close>
    </Wrapper>
  );
};

export default DeleteDocumentContent;
