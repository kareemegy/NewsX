import cn from "classnames";
import { useUI } from "./contexts/UIContext";
import Header from "./layout/Header/";
import Sidebar from "./layout/Sidebar";
import RoutesWrapper from "./RoutesWrapper";

const Layout = () => {
  const { isMenuShrunk } = useUI();
  const { theme } = useUI();
  console.log(theme);

  return (
    <div data-theme={theme}>
      <Header />
      <main className={`flex w-full h-full`}>
        <Sidebar />
        <Wrapper
          className={cn(
            "ml-auto transition-all duration-200 delay-150 mt-[64px] bg-grey  ",
            {
              "sm:w-[calc(100%-240px)]": !isMenuShrunk,
              "sm:w-[calc(100%-64px)]": isMenuShrunk,
            }
          )}
        >
          <RoutesWrapper />
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

export default Layout;
