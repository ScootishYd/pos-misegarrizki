"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

export default function NotaPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const namaPelanggan = searchParams.get("nama");
  const cartData = searchParams.get("cart");
  const subTotal = Number(searchParams.get("subtotal"));
  const discount = Number(searchParams.get("discount"));
  const bayar = Number(searchParams.get("bayar"));
  const [countdown, setCountdown] = useState(10);
  const cart = cartData ? JSON.parse(decodeURIComponent(cartData)) : [];

  const grandTotal = subTotal - discount;
  const kembalian = bayar - grandTotal;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      router.push("/cashier");
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="p-8 font-mono text-sm max-w-md mx-auto space-y-3">
      <h1 className="text-xl font-bold text-center">NOTA PEMBAYARAN</h1>

      <div className="border-b pb-2 space-y-1">
        <p>Nama: {namaPelanggan}</p>
        <p>Total Item: {cart.reduce((sum, item) => sum + item.qty, 0)}</p>
      </div>

      <div className="space-y-1">
        {cart.map((item, idx) => (
          <div key={idx} className="flex justify-between">
            <span>
              {item.title} x {item.qty}
            </span>
            <span>Rp. {(item.qty * item.price).toLocaleString()}</span>
          </div>
        ))}
      </div>

      <div className="border-t pt-2 space-y-1">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rp. {subTotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Diskon</span>
          <span>Rp. {discount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>Rp. {grandTotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Bayar</span>
          <span>Rp. {bayar.toLocaleString()}</span>
        </div>
        <div
          className={`flex justify-between font-bold ${
            kembalian < 0 ? "text-red-500" : "text-green-600"
          }`}
        >
          <span>Kembalian</span>
          <span>Rp. {kembalian > 0 ? kembalian.toLocaleString() : 0}</span>
        </div>
      </div>

      <button
        onClick={() => window.print()}
        className="w-full p-2 bg-secondary text-white font-bold rounded-md mt-4 print:hidden"
      >
        Print Nota
      </button>

      <p className="text-center text-gray-600 text-xs mt-72">
        Akan kembali ke halaman kasir dalam {countdown} detik...
      </p>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => router.push("/cashier")}
          className="bg-secondary text-white font-bold py-2 px-6 rounded hover:bg-secondary/90"
        >
          Kembali Sekarang
        </button>
      </div>
    </div>
  );
}
