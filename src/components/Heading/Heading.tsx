import { IHeading } from "./Heading.types";

const Heading = ({ children, as }: IHeading) => {
  const Component = as;
  return <Component>{children}</Component>;
};

export default Heading;
