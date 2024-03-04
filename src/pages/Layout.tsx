import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext, ThemeContextType } from "context/ThemeContext";
import styled from "styled-components";

import DocumentCreateButton from "components/business/DocumentCreateButton";
import DocumentTreeShowButton from "components/business/DocumentTreeShowButton";
import PagePrevMoveButton from "components/business/PagePrevMoveButton";
import PageNextMoveButton from "components/business/PageNextMoveButton";

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

const FooterContainer = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  background: ${(props) => props.theme.primary};
  border-top: 1px solid ${(props) => props.theme.secondary};
  bottom: 0px;
  z-index: 999;
`;

const Footer = styled(Content)`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
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
          <button onClick={handleToggleThemeMode}>다크/라이트모드</button>
        </Header>
      </HeaderContainer>
      <MainContainer>
        <Main>
          <Outlet />
        </Main>
      </MainContainer>
      <FooterContainer>
        <Footer>
          <PagePrevMoveButton />
          <DocumentCreateButton />
          <DocumentTreeShowButton />
          <PageNextMoveButton />
        </Footer>
      </FooterContainer>
    </Wrapper>
  );
};
export default Layout;
