import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const jetBrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export default function inventoryLayout({ children }) {
  return <>{children}</>;
}
