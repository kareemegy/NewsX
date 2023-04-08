import cn from "classnames";
import Modal from "../Modal/Modal";
import { useUI } from "../../contexts/UIContext";

interface INewsModal {
  article: {
    title: string;
    link: string;
    summary: string;
    rights: string;
    topic: string;
    country: string;
    author: string;
    published_date: string;
  };
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  onPrev: () => void;
  onNext: () => void;
  onClose?: () => void;
}

const NewsModal = ({
  article,
  prevDisabled,
  nextDisabled,
  onPrev,
  onNext,
  onClose,
}: INewsModal) => {
  const { closeModal } = useUI();
  return (
    <Modal>
      <Modal.Header>
        <div>
          <button
            className={cn("bg-gray-200 rounded-full p-2 mr-5", {
              "pointer-events-none cursor-not-allowed": prevDisabled,
            })}
            onClick={onPrev}
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className={cn("chevron-left w-6 h-6")}
            >
              <path
                fillRule="evenodd"
                d="M14.293 5.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 1 0 1.414-1.414L9.414 12l4.879-4.879a1 1 0 0 0 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className={cn("bg-gray-200 rounded-full p-2", {
              "pointer-events-none cursor-not-allowed": nextDisabled,
            })}
            onClick={onNext}
          >
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
          <a href={article.link} target="_blank" className="text-white-500">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </a>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-start">
            {article.title}
          </h1>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-gray-800 mb-4 ">
            {article.summary}
          </h3>
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 text-sm mb-2 font-medium">Author:</p>
              <p className="text-gray-700 text-base">{article.author}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-2 font-medium">
                Published Date:
              </p>
              <p className="text-gray-700 text-base">
                {article.published_date}
              </p>
            </div>

            <div>
              <p className="text-gray-600 text-sm mb-2 font-medium">Rights:</p>
              <p className="text-gray-700 text-base">{article.rights}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-2 font-medium">Topic:</p>
              <p className="text-gray-700 text-base">{article.topic}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-2 font-medium">Country:</p>
              <p className="text-gray-700 text-base">{article.country}</p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-gray-50 px-8 py-4 flex justify-end">
        <button
          onClick={() => {
            if (onClose) onClose();
            closeModal();
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewsModal;
