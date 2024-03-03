import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "components/ui/Modal/Modal";
import styled, { css } from "styled-components";
import useDeleteDocumentMutation from "hooks/apis/mutations/useDeleteDocumentMutation";
import { ModalContext, ModalContextType } from "context/ModalContext";
import { useContext } from "react";

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
  const { mutate } = useDeleteDocumentMutation(documentId);
  console.log("ddc", documentId);
  const { handleCloseModal } = useContext(ModalContext) as ModalContextType;

  const handleDeleteDocument = async () => {
    mutate();
    handleCloseModal();
  };

  return (
    <Wrapper>
      <DeleteIconContainer>
        <DeleteIcon />
      </DeleteIconContainer>
      <ConfirmMessage>Are You Sure?</ConfirmMessage>
      <Button onClick={handleDeleteDocument}>Delete</Button>
      <Modal.Close css={closeButtonCSS}>cancel</Modal.Close>
    </Wrapper>
  );
};

export default DeleteDocumentContent;
