import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext, ThemeContextType } from "context/ThemeContext";
import styled from "styled-components";
import FloatingActionButton from "components/ui/FloatingActionButton";
import DocumentTree from "components/business/DocumentTree";
import DocumentCreateButton from "components/business/DocumentCreateButton";
import DocumentDeleteModeButton from "components/business/DocumentDeleteModeButton";

const Wrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 16px;
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;

  background: ${(props) => props.theme.primary};
  position: fixed;
  top: 0;
  z-index: 999;
`;
const Header = styled(Content)`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const Logo = styled.div`
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  font-weight: 600;
`;
const MainContainer = styled.div`
  padding-top: 77px;
  width: 100%;
`;
const Main = styled(Content)`
  width: 100%;
  height: 100%;
`;

const Layout = () => {
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
    <Wrapper>
      <HeaderContainer>
        <Header>
          <Logo>notable.</Logo>
          <ButtonContainer>
            <DocumentCreateButton />
            <DocumentDeleteModeButton />
            <button onClick={handleToggleThemeMode}>다크/라이트모드</button>
          </ButtonContainer>
        </Header>
      </HeaderContainer>
      <MainContainer>
        <Main>
          <Outlet />
          <FloatingActionButton>
            <DocumentTree />
          </FloatingActionButton>
        </Main>
      </MainContainer>
    </Wrapper>
  );
};
export default Layout;
