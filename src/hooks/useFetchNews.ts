import { useEffect, useRef, useState } from "react";
import useInfiniteScroll from "./useInfiniteScroll";
import { getNews } from "../lib/newsApi";

const useFetchNews = (paramName: string = "headlines") => {
  const [news, setNews] = useState<any[]>([]);
  const controllerRef = useRef(new AbortController());
  const fetchNews = async ({ shouldAppend }: { shouldAppend: boolean }) => {
    const api = await getNews(paramName, page, controllerRef.current);
    if (api.ok && api.data) {
      const news = api.data;
      if (shouldAppend) {
        setNews((prevNews) => [...prevNews, ...news]);
      } else {
        setNews(news);
      }
    }
  };
  const { lastElementRef, isLoading, page, reset } =
    useInfiniteScroll(fetchNews);

  useEffect(() => {
    if (isLoading) {
      controllerRef.current.abort();
      controllerRef.current = new AbortController();
    }
    window.scrollTo(0, 0);
    setNews([]);
    reset();
  }, [paramName]);
  return {
    news,
    lastElementRef,
    isLoading,
  };
};

export default useFetchNews;
