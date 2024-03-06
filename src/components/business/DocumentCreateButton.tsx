import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePostDocumentMutation from "hooks/apis/mutations/usePostDocumentMutation";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.button`
  border: none;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  cursor: pointer;
`;
const PenIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const DocumentCreateButton = () => {
  const { mutate } = usePostDocumentMutation();
  const { id } = useParams();

  const handleCreateDocument = () => {
    mutate({ title: "새노트", parent: id ? parseInt(id) : null });
  };
  return (
    <Wrapper>
      <PenIcon onClick={handleCreateDocument} icon={faPen} />
    </Wrapper>
  );
};

export default DocumentCreateButton;
