import { useParams } from "react-router-dom";
import Card from "../../components/card";
import NewsModal from "../../components/common/NewsModal";
import { useUI } from "../../contexts/UIContext";
import useFetchNews from "../../hooks/useFetchNews";

export const Search = () => {
  const { query } = useParams();
  const { openModal, closeModal } = useUI();
  const { news, lastElementRef, isLoading } = useFetchNews(query);
  const handleOpenModal = (index: number) => {
    const article = news[index];
    openModal(
      <NewsModal
        article={article}
        prevDisabled={index === 0}
        nextDisabled={index === news.length - 1}
        onPrev={() => {
          closeModal();
          handleOpenModal(index - 1);
        }}
        onNext={() => {
          closeModal();
          handleOpenModal(index + 1);
        }}
      />
    );
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center w-full bg-background text-primary">
        {news?.map(({ title, media }, i) => {
          if (news.length === i + 1) {
            return (
              <div key={i} ref={lastElementRef}>
                <Card
                  title={title}
                  image={media}
                  as="article"
                  onClick={() => handleOpenModal(i)}
                />
              </div>
            );
          }
          return (  
            <div key={i}> 
              <Card 
                title={title} 
                image={media} 
                as="article"  
                onClick={() => handleOpenModal(i)}  
              />  
            </div>  
          );  
        })} 
        {isLoading &&
          Array.from({ length: 20 }).map((_, i) => <Card.loader key={i} />)}
      </div>
    </>
  );
};

export default Search;
