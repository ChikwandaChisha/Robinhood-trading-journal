import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(val: number): string {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(val));
  
  if (val < 0) return `-${formatted}`;
  if (val > 0) return `+${formatted}`;
  return formatted;
}

export function formatPercent(val: number): string {
  const formatted = `${val >= 0 ? "+" : ""}${val.toFixed(2)}%`;
  return formatted;
}
