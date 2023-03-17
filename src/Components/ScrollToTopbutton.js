import React, { useState, useEffect } from "react";

function ScrollToTopbutton(props) {
  const [isVisable, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        style={{
          position: "fixed",
          borderRadius: "6px",
          backgroundColor: "blue",
          color:"white",
          top: "92px",
          right: "0%",
          // transform: "translateX(50%)",
          width: "50px",
          height:"50px",
          zIndex:"unset",
          top : "50%"
        }}
        className={`scroll-to-top ${isVisable ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        Scroll
        <span>
          <i class="bi bi-chevron-up"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default ScrollToTopbutton;
