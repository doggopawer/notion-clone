import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  width: 25%;
  height: 100%;
  border: none;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  cursor: pointer;
`;
const PrevIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const PagePrevMoveButton = () => {
  const navigate = useNavigate();

  const handlePrevMovePage = () => {
    navigate(-1);
  };
  return (
    <Button>
      <PrevIcon onClick={handlePrevMovePage} icon={faArrowLeft} />
    </Button>
  );
};

export default PagePrevMoveButton;
