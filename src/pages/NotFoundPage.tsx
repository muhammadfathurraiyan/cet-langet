import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <h1 className="font-semibold text-3xl">404 - Page Not Found!</h1>
      <p className="text-lg">Sorry, the page you are looking for could not be found.</p>
      <Link
        to={"/"}
        className="z-10 relative inline-flex h-12 overflow-hidden rounded-full p-px hover:text-sky-500 duration-300 mt-1 max-lg:mt-2"
      >
        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0ea5e9_0%,#6366f1_50%,#0ea5e9_100%)]" />
        <span className="size-full flex cursor-pointer items-center justify-center rounded-full bg-background px-8 py-1 text-lg backdrop-blur-3xl">
          Back to home
        </span>
      </Link>
    </div>
  );
}
