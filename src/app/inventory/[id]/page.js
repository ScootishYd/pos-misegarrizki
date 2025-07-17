"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import items from "@/data/items.json";
import { FaPlusSquare, FaMinusSquare, FaArrowLeft } from "react-icons/fa";

const activityLog = [
  {
    tanggal: "22/4/2025",
    beli: 0,
    jual: 0,
    status: "Stok Bertambah",
    penanggung: "John Doe",
  },
  {
    tanggal: "15/4/2025",
    beli: 0,
    jual: 0,
    status: "Stok Berkurang",
    penanggung: "John Doe",
  },
];

export default function ProdukDetailPage() {
  const { id } = useParams();
  const product = items.find((item) => item.id === Number(id));

  const [stok, setStok] = useState(product?.jumlah || 0);
  const [hargaBeli, setHargaBeli] = useState(product?.harga_beli || 0);
  const [hargaJual, setHargaJual] = useState(product?.harga_jual || 0);

  if (!product) {
    return (
      <div className="p-8">
        <p>Produk tidak ditemukan.</p>
        <Link href="/inventory" className="text-accent flex items-center gap-2">
          <FaArrowLeft /> Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="p-24 space-y-4">
      <Link
        href="/inventory"
        className="text-accent font-semibold flex items-center gap-2"
      >
        <FaArrowLeft /> Kembali
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative w-full h-96 rounded-md border-2 border-accent overflow-hidden bg-gray-200">
          <Image
            src={product.image}
            alt={product.nama}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{product.nama}</h1>
          <textarea
            readOnly
            defaultValue={product.deskripsi}
            className="w-full h-48 border rounded-md p-2 text-gray-700"
            rows="3"
          />
          <div className="flex gap-4 items-center pt-2">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Stok Saat Ini</span>
              <div className="flex items-center gap-2 border rounded-lg p-1">
                <button
                  onClick={() => setStok(stok > 0 ? stok - 1 : 0)}
                  className="px-2 rounded text-accent"
                >
                  <FaMinusSquare className="h-6 w-6" />
                </button>
                <span className="w-6 text-center">{stok}</span>
                <button
                  onClick={() => setStok(stok + 1)}
                  className="px-2 rounded text-accent"
                >
                  <FaPlusSquare className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-sm text-gray-500">Harga Beli (Rp)</span>
              <input
                type="number"
                value={hargaBeli}
                onChange={(e) => setHargaBeli(Number(e.target.value))}
                className="border rounded p-1"
              />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-sm text-gray-500">Harga Jual (Rp)</span>
              <input
                type="number"
                value={hargaJual}
                onChange={(e) => setHargaJual(Number(e.target.value))}
                className="border rounded p-1"
              />
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Link
              href="/inventory"
              className="bg-accent text-white px-4 py-2 rounded"
            >
              Simpan
            </Link>
            <Link
              href="/inventory"
              className="bg-secondary text-white px-4 py-2 rounded"
            >
              Batal
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mt-4 mb-2">Log Aktivitas</h2>
        <table className="w-full text-sm border overflow-hidden rounded-md">
          <thead>
            <tr className="bg-gray-100 rounded-md">
              <th className=" p-2">Tanggal</th>
              <th className=" p-2">Harga Beli</th>
              <th className=" p-2">Harga Jual</th>
              <th className=" p-2">Status</th>
              <th className=" p-2">Penanggung Jawab</th>
            </tr>
          </thead>
          <tbody>
            {activityLog.map((log, i) => (
              <tr key={i}>
                <td className="text-center p-2">{log.tanggal}</td>
                <td className="text-center p-2">
                  Rp {log.beli.toLocaleString()}
                </td>
                <td className="text-center p-2">
                  Rp {log.jual.toLocaleString()}
                </td>
                <td className="text-center p-2">
                  <span
                    className={
                      log.status.includes("Bertambah")
                        ? "text-accent"
                        : "text-secondary"
                    }
                  >
                    {log.status}
                  </span>
                </td>
                <td className="text-center p-2">{log.penanggung}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
