import cn from "classnames";
import Stack from "../Stack";
import { useEffect, useRef, useState } from "react";

interface ICard {
  news: Object;
  children?: React.ReactNode;
  as?: React.ElementType;
}
interface IModal {
  title: string;
  author: string;
  image: string;
  published_date: string;
  link: string;
  excerpt: string;
  summary: string;
  rights: string;
  topic: string;
  country: string;
  media: string;
  _id: string;
}

const Card = ({ news, children, as }: ICard) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, media } = news as IModal;

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div onClick={toggleModal} className="cursor-pointer">
        <Stack
          as={as}
          className="bg-white border border-gray-200 px-4 py-2 h-full rounded-md max-w-xs justify-between"
        >
          <CardTitle>{title}</CardTitle>
          {media && <CardImage className="my-2" src={media} />}
          {children && <div>{children}</div>}
        </Stack>
      </div>
      {isOpen && <Modal toggleModal={toggleModal} news={news} />}
    </>
  );
};
const Modal = ({ news, toggleModal }: any): JSX.Element => {
  const {
    title,
    author,
    published_date,
    link,
    excerpt,
    summary,
    rights,
    topic,
    country,
    media,
    _id,
  } = news as IModal;
  const modalRef = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleModal();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);
  return (
    <>
      {
        // <div className="fixed z-10 inset-0 overflow-y-auto">
        //   <div className="flex items-center justify-center min-h-screen">
        //     <div
        //       className="fixed inset-0 transition-opacity"
        //       aria-hidden="true"
        //     >
        //       <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        //     </div>

        //     <div
        //       className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
        //       ref={modalRef}
        //     >
        //       <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        //         <div className="sm:flex sm:items-start">
        //           <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        //             <h3
        //               className="text-lg leading-6 font-medium text-gray-900"
        //               id="modal-title"
        //             >
        //               {title}
        //             </h3>
        //             <h2 className="text-lg leading-6 font-medium text-gray-800">
        //               {excerpt}
        //             </h2>

        //             <div className="mt-2">
        //               {media && <CardImage className="my-2" src={media} />}
        //               <p className="text-sm text-gray-500">{summary}</p>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        //         <button
        //           onClick={toggleModal}
        //           className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
        //         >
        //           Close
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl transform transition-all sm:max-w-2xl sm:w-full">
              <div className="relative px-8 py-6" ref={modalRef}>
                <div className="absolute left-0 top-0 ml-5 mt-5 flex justify-between w-[95%]">
                  <div>
                    <button className="bg-gray-200 rounded-full p-2 mr-5">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="chevron-left w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.293 5.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 1 0 1.414-1.414L9.414 12l4.879-4.879a1 1 0 0 0 0-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button className="bg-gray-200 rounded-full p-2">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="chevron-right w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.707 14.707a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 1.414L10.586 10l-4.879 4.879z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <a href={link} target="_blank" className="text-white-500">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Read More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="text-center mt-20">
                  <h1 className="text-3xl font-bold text-gray-900 mb-6 text-start">
                    {title}
                  </h1>
                </div>
                <div className="my-8">
                  <h3 className="font-semibold text-gray-800 mb-4 ">
                    {summary}
                  </h3>
                </div>
                <div className="my-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Details
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 text-sm mb-2 font-medium">
                        Author:
                      </p>
                      <p className="text-gray-700 text-base">{author}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-2 font-medium">
                        Published Date:
                      </p>
                      <p className="text-gray-700 text-base">
                        {published_date}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-600 text-sm mb-2 font-medium">
                        Rights:
                      </p>
                      <p className="text-gray-700 text-base">{rights}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-2 font-medium">
                        Topic:
                      </p>
                      <p className="text-gray-700 text-base">{topic}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-2 font-medium">
                        Country:
                      </p>
                      <p className="text-gray-700 text-base">{country}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-8 py-4 flex justify-end">
                <button
                  onClick={toggleModal}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      }
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
