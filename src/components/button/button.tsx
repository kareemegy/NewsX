import { Props } from "./button.types";
const Button = ({ children, icon, className, handleClick,disabled, ...args }: Props) => {
  return (
    <div className={className} {...args} onClick={handleClick}>
      <button className="flex">
        {icon && <span className="mr-2">{icon}</span>}
        <span>{children}</span>
      </button>
    </div>
  );
};

export default Button;
