import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext, ThemeContextType } from "context/ThemeContext";
import styled from "styled-components";
import FloatingActionButton from "components/ui/FloatingActionButton/FloatingActionButton";
import DocumentButtonContent from "components/business/DocumentButtonContent";

const Wrapper = styled.div`
  width: 100%;
`;
const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 16px;
`;
const Header = styled.div`
  width: 100%;
  height: 77px;
  position: fixed;
  top: 0;
  z-index: 999;
`;
const HeaderContainer = styled(Container)`
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
const Content = styled.div`
  padding-top: 77px;
  width: 100%;
  height: 100vh;
`;
const ContentContainer = styled(Container)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera에서 스크롤바 숨기기 */
  }
`;

const FabContainer = styled.div`
  position: absolute;
  right: 16px;
  bottom: calc(56px + 30px);
  width: 56px;
`;
// TODO: 클릭 시 숨겨진 버튼이 나오는 인터랙션 추가
const FabButton = styled.button`
  position: fixed;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.secondary};
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
      <Header>
        <HeaderContainer>
          <Logo>notable.</Logo>
          <button onClick={handleToggleThemeMode}>다크/라이트모드</button>
        </HeaderContainer>
      </Header>
      <Content>
        <ContentContainer>
          <Outlet />
          <FloatingActionButton>
            <DocumentButtonContent />
          </FloatingActionButton>
        </ContentContainer>
      </Content>
    </Wrapper>
  );
};
export default Layout;
