import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference(import.meta.env.VITE_API_KEY);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TDataGenerateImage = {
  inputs: string;
  model: string;
  parameter: {
    guidance_scale: number;
    height: number;
    num_inference_steps: number;
    width: number;
  };
};

export async function generateImage(data: TDataGenerateImage) {
  try {
    const result = await hf.textToImage({
      inputs: data.inputs,
      model: data.model,
      parameters: {
        guidance_scale: data.parameter.guidance_scale,
        num_inference_steps: data.parameter.num_inference_steps,
        height: data.parameter.height,
        width: data.parameter.width,
      },
    });
    return { result: result };
  } catch (error) {
    return { errorMessage: error };
  }
}
