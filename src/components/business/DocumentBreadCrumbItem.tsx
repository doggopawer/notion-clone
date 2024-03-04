import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 20px;
  white-space: nowrap;
`;
const Text = styled.div`
  text-overflow: ellipsis;
  cursor: pointer;
`;
const Slash = styled.div`
  margin: 0 7px;
`;

type DocumentBreadCrumbItemProps = {
  documentRoute: any;
};

const DocumentBreadCrumbItem = ({
  documentRoute,
}: DocumentBreadCrumbItemProps) => {
  const { id, title } = documentRoute;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/documents/${id}`);
  };

  return (
    <Wrapper>
      <Text onClick={handleClick}>{title}</Text>
      <Slash>/</Slash>
    </Wrapper>
  );
};

export default DocumentBreadCrumbItem;
