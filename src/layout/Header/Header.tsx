import { useUI } from "../../contexts/UIContext";

const Header = () => {
  const { isMenuShrunk, isSidebarOpen, setIsSidebarOpen } = useUI();
  return (
    <div className="fixed inset-x-0 bg-slate-500 h-16 z-10">
      <h1>Header</h1>
      <div
        className="sm:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        open sidebar
      </div>
    </div>
  );
};

export default Header;
