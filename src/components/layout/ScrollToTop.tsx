import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component ensures that whenever the URL path changes,
 * the window scrolls back to the top of the page.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the document smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null; // This component doesn't render anything UI-wise
};

export default ScrollToTop;
