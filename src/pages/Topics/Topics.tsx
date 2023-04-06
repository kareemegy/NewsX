import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/card";
import { getNews } from "../../lib/newsApi";

export const Topics = () => {
  const { topic } = useParams();
  const [news, setNews] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const controllerRef = useRef(new AbortController());
  const observerRef = useRef<IntersectionObserver>();
  const timerRef = useRef<any>();

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setLoading(true);
          timerRef.current = setTimeout(() => {
            setPage((prevPage) => prevPage + 1);
          }, 3000);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading]
  );

  const fetchNews = async (shouldAppend: boolean) => {
    setLoading(true);
    const api = await getNews(topic!, page, controllerRef.current);
    if (api.ok && api.data) {
      const news = api.data;
      if (shouldAppend) {
        return setNews((prevNews) => [...prevNews, ...news]);
      }
      setNews(news);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isLoading) {
      controllerRef.current.abort();
      controllerRef.current = new AbortController();
      clearTimeout(timerRef.current);
    }
    window.scrollTo(0, 0);
    setNews([]);
    setPage(1);
    fetchNews(false);
  }, [topic]);
  useEffect(() => {
    fetchNews(true);
  }, [page]);

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center w-full">
        {news?.map((news, i) => {
          if (news.length === i + 1) {
            return (
              <div key={i} ref={lastElementRef}>
                <Card news={news}  as="article" />
              </div>
            );
          }
          return (
            <div key={i}>
              <Card news={news}  as="article" />
            </div>
          );
        })}
        {isLoading &&
          Array.from({ length: 20 }).map((_, i) => <Card.loader key={i} />)}
      </div>
    </>
  );
};

export default Topics;

