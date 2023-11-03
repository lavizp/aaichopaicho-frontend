import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  function handleResize() {
    const { width, height } = getWindowDimensions();
    if (width === null && height === null) {
      return;
    }
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return {
    width: windowDimensions.width,
    height: windowDimensions.height,
    smallDesktopView:
      windowDimensions.width !== null &&
      windowDimensions.width <= 1024 &&
      windowDimensions.width > 768,
    mobileView:
      windowDimensions.width !== null && windowDimensions.width <= 500,
    tabletView:
      windowDimensions.width !== null && windowDimensions.width <= 768,
  };
}
