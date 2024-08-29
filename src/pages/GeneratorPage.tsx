import Info from "@/components/global/Info";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { loras } from "@/lib/loras";
import { generateImage, TDataGenerateImage } from "@/lib/utils";
import { FolderDown, Image } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [img, setImg] = useState("");
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(720);
  const [scale, setScale] = useState([5]);
  const [steps, setSteps] = useState([30]);
  const [style, setStyle] = useState({
    title: "Flux.1-dev",
    url: "black-forest-labs/FLUX.1-dev",
  });

  const handleGenerate = async () => {
    const data: TDataGenerateImage = {
      inputs: prompt,
      model: style.url,
      parameter: {
        height: height,
        width: width,
        guidance_scale: scale[0],
        num_inference_steps: steps[0],
      },
    };

    try {
      const response = await generateImage(data);

      if (response?.result) {
        const objectUrl = URL.createObjectURL(response.result);
        setImg(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
      }

      if (response?.errorMessage) {
        throw new Error(String(response.errorMessage));
      }

      throw new Error("Unexpected response");
    } catch (error) {
      throw error;
    }
  };

  const handleDownload = () => {
    if (img) {
      const link = document.createElement("a");
      link.href = img;
      link.download = `${prompt}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="min-h-screen w-full bg-background bg-dot-white/50 relative z-10 p-24 max-lg:px-4">
      <div className="absolute -z-10 inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)))]" />
      <h1 className="font-semibold text-2xl">Generate Image</h1>
      <p className="text-muted-foreground mb-2">
        Type yout prompt bellow to generate the image.
      </p>
      <div className="grid lg:grid-cols-3 gap-4 h-full pt-0">
        <div className="lg:col-span-2 bg-background border p-4 rounded-lg flex items-center justify-center w-full min-h-[60vh] max-lg:min-h-[30vh] relative">
          {img ? (
            <>
              <Button
                onClick={handleDownload}
                variant={"secondary"}
                size={"icon"}
                className="absolute top-6 right-6"
              >
                <FolderDown />
              </Button>
              <img
                className="rounded-lg h-full min-w-full"
                src={img}
                alt={prompt}
              />
            </>
          ) : (
            <Image className="size-12 text-muted-foreground" />
          )}
        </div>
        <div className="bg-background border p-4 rounded-lg max-lg:order-1 h-full flex flex-col lg:row-span-2">
          <h2 className="font-semibold text-lg">List of Available Styles</h2>
          <div className="h-full max-lg:h-[50vh]">
            <div className="min-h-full h-0 border rounded-md p-4 overflow-auto flex flex-col gap-4">
              {loras.map((data) => (
                <div key={data.id}>
                  <h3 className="font-semibold text-base">
                    &bull; {data.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {data.data.map((data) => (
                      <div
                        key={data.id}
                        onClick={() =>
                          setStyle({ title: data.title, url: data.url })
                        }
                        className="border relative h-[24vh] w-full rounded-md overflow-hidden cursor-pointer group"
                      >
                        <img
                          src={data.img}
                          alt={data.title}
                          className="h-full min-w-full object-cover group-hover:scale-105 duration-300"
                        />
                        <p className="absolute z-10 bottom-0 text-sm inset-x-0 px-2 py-1 bg-background/90">
                          {data.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 bg-background border p-4 rounded-lg flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold flex items-center gap-1 text-lg">
                Selected Style:
              </p>
              <Badge variant={"outline"} className="text-sm">
                {style.title}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Check list of available styles section to experiment with other
              styles.
            </p>
          </div>
          <div>
            <Label
              htmlFor="prompt"
              className="font-semibold text-lg flex items-center gap-1"
            >
              Your Prompt
              <Info description="Your prompt will be used to generate the image." />
            </Label>
            <Textarea
              placeholder="Type your prompt here..."
              id="prompt"
              name="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <Button
              onClick={() => {
                if (prompt.length < 3) {
                  toast.error("Please input the prompt!");
                  return;
                }
                toast.promise(handleGenerate, {
                  loading: "Loading...",
                  success: "Image has been created",
                  error: (error) => {
                    return error.message || "An error occurred";
                  },
                });
              }}
              className="w-full mt-2"
            >
              Generate!
            </Button>
          </div>
          <div>
            <h2 className="font-semibold text-lg flex items-center gap-1 mt-4">
              Advanced Settings
              <Info description="Advanced settings, leave it if you want to use default settings." />
            </h2>
            <div className="grid grid-cols-1 gap-4 border rounded-md p-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="width" className="flex items-center gap-1">
                  Width
                  <Info description="Your width will be affected to the generated image." />
                </Label>
                <Input
                  type="number"
                  id="width"
                  name="width"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  placeholder="Type your width..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="height" className="flex items-center gap-1">
                  Height
                  <Info description="Your width will be affected to the generated image." />
                </Label>
                <Input
                  type="number"
                  id="height"
                  name="height"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  placeholder="Type your height..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="scale" className="flex items-center gap-1">
                  Scale
                  <Info description="Your guidance scale will be affected to the generated image." />
                </Label>
                <div className="grid grid-cols-12">
                  <Slider
                    id="scale"
                    name="scale"
                    value={scale}
                    onValueChange={(number) => setScale(number)}
                    max={20}
                    step={1}
                    className="col-span-11"
                  />
                  <Badge className="mx-auto">{scale[0]}</Badge>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="steps" className="flex items-center gap-1">
                  Steps
                  <Info description="Your number inference steps scale will be affected to the generated image." />
                </Label>
                <div className="grid grid-cols-12">
                  <Slider
                    id="steps"
                    name="steps"
                    value={steps}
                    onValueChange={(number) => setSteps(number)}
                    max={50}
                    step={1}
                    className="col-span-11"
                  />
                  <Badge className="mx-auto">{steps[0]}</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
