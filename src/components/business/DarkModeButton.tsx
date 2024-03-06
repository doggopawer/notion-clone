import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "context/ThemeContext";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 64px;
  height: 32px;
  padding: 4px;
  background: ${(props) => props.theme.primary};
  border: 1.5px solid ${(props) => props.theme.secondary};
  border-radius: 16px;
  display: flex;
  align-items: center;
`;
const Ball = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${(props) => props.theme.secondary};
  transition: transform 0.3s ease-in-out;
  transform: translateX(0);
  &.active {
    transform: translateX(28px);
  }
`;

const DarkModeButton = () => {
  const { themeMode, setThemeMode } = useContext(
    ThemeContext
  ) as ThemeContextType;

  const handleToggleThemeMode = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };
  return (
    <Wrapper onClick={handleToggleThemeMode}>
      <Ball className={themeMode === "dark" ? "active" : ""} />
    </Wrapper>
  );
};

export default DarkModeButton;
