import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-4 py-12 border-t">
      <div className="flex flex-col items-center justify-center mb-2 gap-1">
        <p>Quick navigation:</p>
        <nav className="gap-2 flex items-center h-5">
          <Link className={`hover:text-sky-500 duration-300`} to={"/"}>
            Home
          </Link>
          <Separator orientation="vertical" />
          <Link className={`hover:text-sky-500 duration-300`} to={"/generator"}>
            Generator
          </Link>
          <Separator orientation="vertical" />
          <Link className={`hover:text-sky-500 duration-300`} to={"/about"}>
            About
          </Link>
        </nav>
      </div>
      <p className="text-sm text-center">
        &copy; 2024 Cet Langet. Powered by:{" "}
        <a
          href="https://blackforestlabs.ai/"
          target="_blank"
          className="hover:text-sky-500 duration-300 font-medium underline"
        >
          Flux.1
        </a>
      </p>
      <div className="flex text-sm items-center gap-1">
        Site design with <Coffee size={18} /> by :{" "}
        <a
          href="https://muhammadfathurraiyan.vercel.app/"
          target="_blank"
          className="hover:text-sky-500 duration-300 font-medium underline"
        >
          Raiyan
        </a>
        .
      </div>
    </footer>
  );
}
