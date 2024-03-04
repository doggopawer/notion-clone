import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Button = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.secondary};
`;
const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const DocumentTreeShowButton = () => {
  return (
    <Button>
      <SearchIcon icon={faSearch} />
    </Button>
  );
};

export default DocumentTreeShowButton;
