import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  let lastScrollTop = 0;
  const handleScroll = () => {
    const currentScrollTop =
      window.scrollY || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 flex items-center p-4 z-20 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="space-x-4 mx-auto bg-background/80 drop-shadow-md backdrop-blur border border-border p-4 px-5 rounded-full">
        <Link
          className={`${
            location.pathname === "/" && "text-sky-500"
          } hover:text-sky-500 duration-300`}
          to={"/"}
        >
          Home
        </Link>
        <Link
          className={`${
            location.pathname === "/generator" && "text-sky-500"
          } hover:text-sky-500 duration-300`}
          to={"/generator"}
        >
          Generator
        </Link>
        <Link
          className={`${
            location.pathname === "/about" && "text-sky-500"
          } hover:text-sky-500 duration-300`}
          to={"/about"}
        >
          About
        </Link>
      </nav>
    </header>
  );
}
