import resolveConfig from "tailwindcss/resolveConfig";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import tailwindConfig from "../../tailwind.config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tailwindFullConfig = resolveConfig(tailwindConfig);
