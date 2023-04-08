const Portal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="absolute m-auto h-fit w-fit inset-0"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default Portal;
