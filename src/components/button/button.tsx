import { Props } from "./button.types";
const Button = ({ children, icon, className, handleClick, ...args }: Props) => {
  return (
    <div className={className} {...args}>
      <button className="flex" onClick={handleClick}>
        {icon && <span className="mr-2">{icon}</span>}
        <span>{children}</span>
      </button>
    </div>
  );
};

export default Button;
