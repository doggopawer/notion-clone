import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
const NextIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const PageNextMoveButton = () => {
  const navigate = useNavigate();

  const handleNextMovePage = () => {
    navigate(1);
  };
  return (
    <Button>
      <NextIcon onClick={handleNextMovePage} icon={faArrowRight} />
    </Button>
  );
};

export default PageNextMoveButton;
