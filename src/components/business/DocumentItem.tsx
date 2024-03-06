import styled from "styled-components";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Document } from "types/document";

const Wrapper = styled.li`
  position: relative;
  border: 1.5px solid ${(props) => props.theme.secondary};
  background: ${(props) => props.theme.primary};
  margin-bottom: 24px;
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

const DocumentIcon = () => {
  const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin-left: 32px;
    font-size: 24px;
  `;
  return <StyledFontAwesomeIcon icon={faFile} />;
};

type DocumentItemProps = {
  document: Document;
};

const DocumentItem = ({ document }: DocumentItemProps) => {
  const { id } = document;

  return (
    <Wrapper>
      <Anchor to={`/documents/${id}`}>
        <DocumentIcon />
        <Title>{document.title}</Title>
      </Anchor>
    </Wrapper>
  );
};

export default DocumentItem;
