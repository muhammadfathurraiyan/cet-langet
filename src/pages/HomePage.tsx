import { SparklesCore } from "@/components/ui/sparkles";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-md px-4">
      <div className="flex flex-col justify-center items-center relative">
        <h1 className="text-5xl lg:text-9xl font-bold text-center relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
          CET LANGET
        </h1>
        <p className="text-lg text-center z-10 mt-1 max-lg:leading-5">
          Free ai image generative tool, convert your imagination with
          Cet Langet, powered by{" "}
          <a
            href="https://blackforestlabs.ai/"
            target="_blank"
            className="hover:text-sky-500 duration-300 font-medium underline"
          >
            Flux.1-dev
          </a>.
        </p>
        <Link
          to={"/generator"}
          className="z-10 relative inline-flex h-12 overflow-hidden rounded-full p-px hover:text-sky-500 duration-300 mt-1 max-lg:mt-2"
        >
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0ea5e9_0%,#6366f1_50%,#0ea5e9_100%)]" />
          <span className="size-full flex cursor-pointer items-center justify-center rounded-full bg-background px-8 py-1 text-lg backdrop-blur-3xl">
            Imagine now!
          </span>
        </Link>
        <div className="w-full h-full max-lg:h-[50vh] absolute top-12 lg:top-32">
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm mx-auto" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 mx-auto" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm mx-auto" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2 mx-auto" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#fff"
          />

          <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,_hsl(var(--foreground)))] max-lg:[mask-image:radial-gradient(250px_300px_at_top,transparent_20%,_hsl(var(--foreground)))]" />
        </div>
      </div>
    </div>
  );
}
