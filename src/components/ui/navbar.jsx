"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Kasir", href: "/cashier" },
    { label: "Laporan", href: "/report" },
    { label: "Inventaris", href: "/inventory" },
  ];

  return (
    <nav className="w-full h-20 flex justify-between items-center px-24 bg-secondary sticky top-0 z-50">
      <div className="relative h-16 w-16">
        <Image src="/logo.svg" alt="logo" fill className="object-contain" />
      </div>

      <div className="flex gap-4">
        {navLinks.map(({ label, href }) => (
          <Button asChild key={label} variant="outline">
            <Link
              href={href}
              className={`px-8 font-bold border ${
                pathname === href
                  ? "bg-primary text-secondary border-primary hover:bg-secondary hover:text-primary delay-100 "
                  : "bg-transparent text-white border-white hover:bg-primary delay-100 "
              } transition-all`}
            >
              {label}
            </Link>
          </Button>
        ))}
      </div>

      <div className="flex gap-6">
        <div className="flex gap-4">
          <Button asChild>
            <Link
              href="/"
              className="bg-transparent hover:bg-transparent cursor-default"
            >
              <FaUserCircle /> John Doe
            </Link>
          </Button>
        </div>
        <div className="flex gap-4">
          <Button asChild>
            <Link
              href="/"
              className="border bg-transparent text-white border-white hover:bg-primary hover:text-secondary delay-100"
            >
              <FaSignOutAlt />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
