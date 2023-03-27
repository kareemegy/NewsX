import cn from "classnames";
import Stack from "../Stack";

interface ICard {
  title: string;
  image: string;
  children?: React.ReactNode;
  as?: string;
}

const Card = ({ title, image, children, as }: ICard) => {
  return (
    <Stack
      as={as}
      className="bg-white border border-gray-200 px-4 py-2 h-full rounded-md max-w-xs justify-between"
    >
      <CardTitle>{title}</CardTitle>
      {image && <CardImage className="my-2" src={image} />}
      {children && <div>{children}</div>}
    </Stack>
  );
};

const SkeletonDiv = ({ className = "" }) => (
  <div
    className={cn(
      "w-full h-4 rounded-full bg-gray-300 animate-pulse",
      className
    )}
  />
);

const SkeletonCard = () => {
  return (
    <Stack className="bg-white border border-gray-200 px-4 py-2 h-96 rounded-md max-w-xs justify-between">
      <SkeletonDiv className="h-8" />
      <SkeletonDiv className="h-48 rounded-xl" />
      <div className="space-y-5">
        <SkeletonDiv />
        <SkeletonDiv />
        <SkeletonDiv />
      </div>
    </Stack>
  );
};

Card.loader = SkeletonCard;

export default Card;

interface ICardTitle {
  children: React.ReactNode;
  className?: string;
}
const CardTitle = ({ children, className }: ICardTitle) => (
  <h4 className={cn("font-bold text-xl", className)}>{children}</h4>
);

interface ICardImage {
  src: string;
  className?: string;
}

const CardImage = ({ src, className, ...rest }: ICardImage) => (
  <img
    className={cn("w-full h-40 object-cover rounded-xl", className)}
    src={src}
    {...rest}
  />
);
