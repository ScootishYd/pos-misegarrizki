"use client";

import Navbar from "@/components/ui/navbar";
import { FaSearch, FaPlusCircle } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import items from "@/data/items.json";
import Image from "next/image";

export default function Inventory() {
  const [itemList, setItemList] = useState(items);

  return (
    <div>
      <Navbar />
      <div className="px-24 py-8">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-between items-center w-2/3 gap-4 pr-4">
            <input
              type="text"
              placeholder="Cari Menu"
              className="block w-full rounded-md border border-gray-400 shadow-sm focus:border-secondary focus:ring-2 focus:ring-red-300 text-sm px-3 py-2"
            />
            <Link
              href="/"
              className="bg-secondary text-white font-semibold px-12 py-2 rounded-md hover:bg-secondary/90 delay-100 flex gap-4 items-center"
            >
              <FaSearch />
              Cari
            </Link>
          </div>

          <Link
            href="/kasir/add"
            className="bg-accent text-white font-semibold px-12 py-2 rounded-md hover:bg-accent/90 delay-100 flex items-center gap-2"
          >
            <FaPlusCircle />
            Tambah Barang
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-8">
          {items.map((item) => (
            <Link
              href={`/inventory/${item.id}`}
              key={item.nama}
              className="col-span-1 w-full"
            >
              <div className="relative w-full h-56 overflow-hidden rounded-md border-2 border-emerald-400 hover:scale-105 transition-transform">
                <Image
                  src={item.image}
                  alt={item.nama}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 font-semibold text-center">{item.nama}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
