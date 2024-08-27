type TDataGenerateImage = {
  inputs: string;
  model: string;
  parameter: {
    negative_prompt?: string;
    guidance_scale: number;
    height: number;
    num_inference_steps: number;
    width: number;
  };
};
