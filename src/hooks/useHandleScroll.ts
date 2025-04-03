import { useEffect } from "react";

export const useScrollObserver = (
  setIsAtBottom: (value: React.SetStateAction<boolean>) => void,
  chatContainerRef: React.RefObject<HTMLDivElement>
) => {
  return useEffect(() => {
    const handleScroll = () => {
      if (!chatContainerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } =
        chatContainerRef.current;
      setIsAtBottom(scrollHeight - scrollTop <= clientHeight + 30);
    };

    chatContainerRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      chatContainerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [chatContainerRef, setIsAtBottom]);
};
