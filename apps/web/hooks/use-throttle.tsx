import { useRef, useEffect } from "react";

export function useThrottle<T extends (...args: any[]) => any>(
  cb: T,
  limit: number,
) {
  const lastRun = useRef(Date.now());
  const cbRef = useRef(cb);

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  return (...args: Parameters<T>) => {
    if (Date.now() - lastRun.current >= limit) {
      cbRef.current(...args);
      lastRun.current = Date.now();
    }
  };
}
