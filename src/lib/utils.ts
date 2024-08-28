import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference(import.meta.env.API_KEY);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function generateImage(data: TDataGenerateImage) {
  try {
    const result = await hf.textToImage({
      inputs: data.inputs,
      model: data.model,
      parameters: {
        negative_prompt: data.parameter.negative_prompt ?? "",
        guidance_scale: data.parameter.guidance_scale,
        num_inference_steps: data.parameter.num_inference_steps,
        height: data.parameter.height,
        width: data.parameter.width,
      },
    });
    return result;
  } catch (error) {
    return { errorMessage: error };
  }
}
