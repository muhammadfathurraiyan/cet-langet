import { Monitor, Moon, Sun } from "lucide-react";

import { useTheme } from "@/context/ThemeProvider";

export default function ThemeController() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-1 justify-center rounded-md border border-input bg-muted text-muted-foreground p-1">
      <button
        onClick={() => setTheme("dark")}
        className={`${
          theme === "dark" ? "bg-background text-foreground" : "bg-transparent"
        } p-2 rounded hover:text-foreground transition-all`}
      >
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
        <span className="sr-only">Theme toggle</span>
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`${
          theme === "light" ? "bg-background text-foreground" : "bg-transparent"
        } p-2 rounded hover:text-foreground transition-all`}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
        <span className="sr-only">Theme toggle</span>
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`${
          theme === "system" ? "bg-background text-foreground" : "bg-transparent"
        } p-2 rounded hover:text-foreground transition-all`}
      >
        <Monitor className="h-[1.2rem] w-[1.2rem] transition-all" />
        <span className="sr-only">Theme toggle</span>
      </button>
    </div>
  );
}
