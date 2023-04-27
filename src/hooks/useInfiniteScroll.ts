import { useCallback, useRef, useState } from "react";
import useDidUpdate from "./useDidUpdate";

type asyncFunction = (params: { shouldAppend: boolean }) => Promise<void>;

const useInfiniteScroll =  (callback: asyncFunction) => {
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const observerRef = useRef<IntersectionObserver>();
  const timerRef = useRef<any>();
  const lastElementRef: any = useCallback(
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
  const reset = () => {
    setPage(1);
    setLoading(false);
    clearTimeout(timerRef.current);
    callback({
      shouldAppend: false,
    });
  };
  useDidUpdate(() => {
    setLoading(true);
    callback({
      shouldAppend: true,
    });
    setLoading(false);
  }, [page]);
  return {
    lastElementRef,
    isLoading,
    page,
    reset,
  };
};
export default useInfiniteScroll;
