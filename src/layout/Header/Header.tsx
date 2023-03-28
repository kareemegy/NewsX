import { useTheme } from "../../contexts/ThemeContext";
import { useUI } from "../../contexts/UIContext";

const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useUI();
  const { toggleTheme, theme } = useTheme();
  return (
    <div
      className={`fixed inset-x-0  h-16 z-10 bg-${theme}-primary`}
    >
      <h1>Header</h1>
      <div
        className="sm:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        open sidebar
      </div>
      <div onClick={() => toggleTheme()}>toggle theme</div>
    </div>
  );
};

export default Header;
