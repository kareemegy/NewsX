import cn from "classnames";
import { useEffect } from "react";

interface IOverlay {
  children?: React.ReactNode;
  isOpen: boolean;
  onClick?: () => void;
}

const Overlay = ({ children, isOpen, ...props }: IOverlay) => {
  useEffect(() => {
    if (isOpen) {
      document.body.className = "overflow-hidden";
    } else {
      document.body.className = "overflow-auto";
    }
    return () => {
      document.body.className = "overflow-auto";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300",
        {
          "opacity-100": isOpen,
          "opacity-0 pointer-events-none": !isOpen,
        }
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default Overlay;
