import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation()
  return (
    <header className="fixed top-0 inset-x-0 flex items-center p-4 z-20">
      <nav className="space-x-4 mx-auto bg-background/80 drop-shadow-md backdrop-blur border border-border p-4 px-5 rounded-full">
        <Link className={`${location.pathname === "/" && "text-sky-500"} hover:text-sky-500 duration-300`} to={"/"}>Home</Link>
        <Link className={`${location.pathname === "/imagine" && "text-sky-500"} hover:text-sky-500 duration-300`} to={"/generator"}>Generator</Link>
        <Link className={`${location.pathname === "/about" && "text-sky-500"} hover:text-sky-500 duration-300`} to={"/about"}>About</Link>
      </nav>
    </header>
  );
}
