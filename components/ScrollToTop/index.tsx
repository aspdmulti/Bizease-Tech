import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99] flex flex-col items-center justify-center gap-2">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="hover:shadow-signUp flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm bg-[#C64D27] text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
          <span className="sr-only">scroll to top</span>
        </div>
      )}
      <div>
        <a
          href="https://wa.me/6285711899575"
          target="_blank"
          aria-label="WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-90"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
}
