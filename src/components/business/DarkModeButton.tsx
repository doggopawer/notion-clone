import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "context/ThemeContext";

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
  return <button onClick={handleToggleThemeMode}>다크/라이트모드</button>;
};

export default DarkModeButton;
