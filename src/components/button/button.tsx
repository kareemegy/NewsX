import { Props } from "./button.types";
const Button = ({ children, icon, className, ...args }: Props) => {
  return (
    <div className={className} {...args}>
      <button className="flex">
        {icon && <span className="mr-2">{icon}</span>}
        <span>{children}</span>
      </button>
    </div>
  );
};

export default Button;
