import { useEffect, useRef } from "react";

const useDidUpdate = (callback: () => void, deps: number[]) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) callback();
    else didMountRef.current = true;
  }, deps);
};

export default useDidUpdate;
