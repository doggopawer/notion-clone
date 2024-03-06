import { useContext } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import FloatingActionButton from "components/ui/FloatingActionButton";
import DocumentTree from "components/business/DocumentTree";
import DocumentCreateButton from "components/business/DocumentCreateButton";
import DocumentDeleteModeButton from "components/business/DocumentDeleteModeButton";
import {
  DeleteModeContext,
  DeleteModeContextType,
} from "context/DeleteModeContext";
import DocumentDeleteButton from "components/business/DocumentDeleteButton";
import DarkModeButton from "components/business/DarkModeButton";
import { Link } from "react-router-dom";

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
  z-index: 99;
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

const Logo = styled(Link)`
  color: ${(props) => props.theme.secondary};
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
`;
const MainContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 76px;
  width: 100%;
`;
const Main = styled(Content)`
  width: 100%;
  height: 100%;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 76px;
  background: ${(props) => props.theme.primary};
  border-top: 1px solid ${(props) => props.theme.secondary};
  position: fixed;
  bottom: -76px;
  z-index: 999;
  transition: bottom 0.3s ease-in-out;

  &.active {
    bottom: 0px;
  }
`;
const Footer = styled(Content)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Layout = () => {
  const { isDeleteMode } = useContext(
    DeleteModeContext
  ) as DeleteModeContextType;

  return (
    <Wrapper>
      <HeaderContainer>
        <Header>
          <Logo to={"documents/"}>notable.</Logo>
          <ButtonContainer>
            <DocumentCreateButton />
            <DocumentDeleteModeButton />
            <DarkModeButton />
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
      <FooterContainer className={isDeleteMode ? "active" : ""}>
        <Footer>
          <DocumentDeleteButton />
        </Footer>
      </FooterContainer>
    </Wrapper>
  );
};
export default Layout;
