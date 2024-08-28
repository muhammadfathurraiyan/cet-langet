import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FolderDown, Image } from "lucide-react";

export default function GeneratorPage() {
  return (
    <section className="min-h-screen w-full bg-background bg-dot-white/50 relative z-10 p-24 max-lg:px-4">
      <div className="absolute -z-10 cursor-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)))]" />
      <h1 className="font-semibold text-2xl">Generate Image</h1>
      <p className="text-muted-foreground mb-2">
        Type yout prompt bellow to generate the immage.
      </p>
      <div className="grid lg:grid-cols-3 gap-4 h-full pt-0">
        <div className="lg:col-span-2 bg-background border p-4 rounded-lg flex items-center justify-center w-full min-h-[400px] max-lg:min-h-[200px] relative">
          {false ? (
            <>
              <Button
                variant={"secondary"}
                size={"icon"}
                className="absolute top-6 right-6"
              >
                <FolderDown />
              </Button>
              <img
                className="rounded-lg h-full min-w-full"
                src="https://picsum.photos/1080/1080"
              />
            </>
          ) : (
            <Image className="size-12 text-muted-foreground" />
          )}
        </div>
        <div className="bg-background border p-4 rounded-lg lg:row-span-2 max-lg:order-1 grid grid-rows-3 gap-2">
          <div className="row-span-2">
            <h2 className="font-semibold text-lg">List of available LoRA</h2>
            <div className="min-h-[400px] border overflow-auto rounded-md"></div>
          </div>
          <div>
            <h2 className="font-semibold text-lg">List of available LoRA</h2>
          </div>
        </div>
        <div className="lg:col-span-2 bg-background border p-4 rounded-lg">
          <Label htmlFor="prompt">Your Prompt</Label>
          <div className="relative">
            <Textarea placeholder="Type your prompt here..." id="prompt" />
            <Button className="absolute bottom-2 right-2">Generate!</Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Your prompt will be used to generate the image.
          </p>
        </div>
      </div>
    </section>
  );
}
