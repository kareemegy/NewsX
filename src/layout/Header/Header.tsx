import cn from "classnames";
import { useTheme } from "../../contexts/ThemeContext";
import { useUI } from "../../contexts/UIContext";
import { JSXElementConstructor, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useUI();
  const { toggleTheme, theme } = useTheme();
  const inputRef = useRef<any>(null);
  const navigate = useNavigate();
  const Search = () => {
    const handleSubmit = () => {
      const inputValue = inputRef.current.value;
      navigate(`/search/${inputValue}`);
      inputRef.current.value = "";
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit();
      }
    };
    return (
      <div className="relative w-[500px]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    );
  };
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

      <Search />

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
