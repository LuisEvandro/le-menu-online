import { useEffect, useState } from "react";
import { ScrollToTopStyle } from "./styles";

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollToTopStyle>
      {" "}
      {showTopBtn && (
        <span
          className="material-icons icon-position icon-style"
          onClick={goToTop}
        >
          arrow_upward
        </span>
      )}{" "}
    </ScrollToTopStyle>
  );
}
