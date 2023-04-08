import cn from "classnames";
import Stack from "../Stack";
import { useEffect, useRef, useState } from "react";

interface ICard {
  children?: React.ReactNode;
  image: string;
  title: string;
  as?: React.ElementType;
  onClick?: () => void;
}

const Card = ({ children, title, image, as, onClick }: ICard) => {
  return (
    <>
      <div onClick={onClick} className="cursor-pointer w-[320px] h-[400px]">
        <Stack
          as={as}
          className="bg-white border border-gray-200 px-4 py-2 h-full rounded-md max-w-xs justify-between"
        >
          <CardTitle>{title}</CardTitle>

          <CardImage
            className="my-2"
            src={
              image
                ? image
                : "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"
            }
          />

          {children && <div>{children}</div>}
        </Stack>
      </div>
    </>
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
  <h4 className={cn("font-bold text-xl line-clamp-2", className)}>
    {children}
  </h4>
);

interface ICardImage {
  src: string;
  className?: string;
}

const CardImage = ({ src, className, ...rest }: ICardImage) => (
  <img
    className={cn("w-full h-[300px] object-cover rounded-xl", className)}
    src={src}
    {...rest}
  />
);
