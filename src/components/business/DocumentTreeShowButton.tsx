import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "components/ui/Modal/Modal";
import styled, { css } from "styled-components";
import Portal from "components/ui/Portal";
import DocumentTree from "./DocumentTree";

const buttonCSS = css`
  width: 25%;
  height: 100%;
  border: none;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  cursor: pointer;
`;
const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const DocumentTreeShowButton = () => {
  return (
    <Modal>
      <Modal.Trigger css={buttonCSS}>
        <SearchIcon icon={faSearch} />
      </Modal.Trigger>
      <Portal>
        <Modal.SideContent>
          <DocumentTree />
          <Modal.Close>끄기</Modal.Close>
        </Modal.SideContent>
        <Modal.Backdrop />
      </Portal>
    </Modal>
  );
};

export default DocumentTreeShowButton;
