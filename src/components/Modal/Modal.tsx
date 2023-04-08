import cn from "classnames";

interface IModal {
  children: React.ReactNode;
  className?: string;
}

const ModalHeader = ({ children, className }: IModal) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-6 border-b border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

const ModalBody = ({ children, className = "" }: IModal) => {
  return (
    <div className={cn("p-6 overflow-y-scroll max-h-96", className)}>
      {children}
    </div>
  );
};

const ModalFooter = ({ children, className }: IModal) => {
  return (
    <div
      className={cn(
        "flex items-center justify-end p-6 border-t border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

const Modal = ({ children, className }: IModal) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="bg-white rounded-md shadow-lg max-w-2xl w-full">
        {children}
      </div>
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
