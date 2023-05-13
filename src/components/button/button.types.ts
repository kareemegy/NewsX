export interface Props {
  children?: string | JSX.Element;
  icon?: string;
  className?: string;
  handleClick?: () => void;
  disabled?: boolean;
}
