"use client";

import { Card, CardContent } from "@/components/ui/card";

// Contoh Data Dinamis
const salesData = [
  {
    id: "0005",
    tanggal: "20/5/2025",
    pelanggan: "Dewi",
    total: 71000,
  },
  {
    id: "0004",
    tanggal: "20/5/2025",
    pelanggan: "Grace",
    total: 27000,
  },
  {
    id: "0003",
    tanggal: "20/5/2025",
    pelanggan: "Angel",
    total: 112000,
  },
  {
    id: "0002",
    tanggal: "20/5/2025",
    pelanggan: "Martha",
    total: 420000,
  },
  {
    id: "0001",
    tanggal: "19/5/2025",
    pelanggan: "Sulistyani",
    total: 16000,
  },
];

export default function TablePenjualan() {
  return (
    <Card>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-center rounded mx-2">
                <th className="p-2 rounded-sm">ID Transaksi</th>
                <th className="p-2 rounded-sm">Tanggal</th>
                <th className="p-2 rounded-sm">Nama Pelanggan</th>
                <th className="p-2 rounded-sm">Total</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((data) => (
                <tr key={data.id} className="text-center">
                  <td className="p-2">{data.id}</td>
                  <td className="p-2">{data.tanggal}</td>
                  <td className="p-2">{data.pelanggan}</td>
                  <td className="p-2">Rp {data.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
