import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext, ThemeContextType } from "../context/themeContext";

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
    <div>
      <div>레이아웃</div>
      <button onClick={handleToggleThemeMode}>다크/라이트모드</button>
      <Outlet />
    </div>
  );
};
export default Layout;
