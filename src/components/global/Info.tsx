import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
export default function Info({ description }: { description: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <InfoIcon size={14} />
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
