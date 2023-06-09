import cn from "classnames";
import { useUI } from "../../contexts/UIContext";
import Header from "../../layout/Header/Header";
import Sidebar from "../../layout/Sidebar/Sidebar";
import { Overlay, Portal } from "../../components/Portal";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const { isMenuShrunk } = useUI();
  const { theme, isModalOpen, modalContent, closeModal } = useUI();
  return (
    <div data-theme={theme}>
      {isModalOpen && (
        <Overlay isOpen={isModalOpen} onClick={closeModal}>
          <Portal>{modalContent}</Portal>
        </Overlay>
      )}
      <Header />
      <main className="flex w-full h-full">
        <Sidebar />
        <Wrapper
          className={cn(
            "ml-auto transition-all duration-200 delay-150 mt-[64px] bg-background",
            {
              "sm:w-[calc(100%-240px)]": !isMenuShrunk,
              "sm:w-[calc(100%-64px)]": isMenuShrunk,
            }
          )}
        >
          <Outlet />
        </Wrapper>
      </main>
    </div>
  );
};
const Wrapper = ({
  children,
  className,
  style,
  ...args
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn("pt-10 px-6 pb-16 w-full", className)}
      style={style}
      {...args}
    >
      {children}
    </div>
  );
};

export default Dashboard;
