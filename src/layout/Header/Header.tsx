import cn from "classnames";
import { useTheme } from "../../contexts/ThemeContext";
import { useUI } from "../../contexts/UIContext";

const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useUI();
  const { toggleTheme, theme } = useTheme();
  return (
    <div
      className={`fixed inset-x-0  h-16 z-10 bg-${theme}-secondary flex justify-between items-center`}
    >
      <h1>LOGO</h1>
      <div
        className="sm:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        open sidebar
      </div>
      <input
        className="rounded-lg outline-none w-60 p-1.5 shadow"
        type="search"
      />
      <div
        className={cn(
          "w-fit h-fit rounded-full p-2 transition-all duration-300 ease-out cursor-pointer ",
          { "bg-light-secondary": theme == "light" },
          { "bg-dark-secondary": theme == "dark" }
        )}
        onClick={() => toggleTheme()}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </div>
    </div>
  );
};

export default Header;
