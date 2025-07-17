import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const jetBrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export default function inventoryDetailLayout({ children }) {
  return <>{children}</>;
}
