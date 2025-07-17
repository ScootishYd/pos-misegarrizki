import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mi Segar Rizki",
  description: "created by UI/UX Team of Amikom",
};

export default function loginLayout({ children }) {
  return <>{children}</>;
}
