"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function NotaModal({
  isOpen,
  onClose,
  namaPelanggan,
  cart,
  subTotal,
  discount,
  bayar,
}) {
  if (!isOpen) return null;

  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const grandTotal = subTotal - discount;
  const kembalian = bayar - grandTotal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        ref={printRef}
        className="bg-white rounded-xl p-8 w-[500px] max-h-[80vh] overflow-y-auto space-y-4 shadow-xl sr-only print:block"
      >
        <h1 className="text-xl font-bold text-center">Nota Pembayaran</h1>

        <div className="font-mono text-sm space-y-2">
          <div className="border-b pb-2">
            <p>Nama: {namaPelanggan}</p>
            <p>Total Item: {cart.reduce((sum, item) => sum + item.qty, 0)}</p>
          </div>

          {cart.map((item, idx) => (
            <div key={idx} className="flex justify-between">
              <span>
                {item.title} x {item.qty}
              </span>
              <span>Rp. {(item.qty * item.price).toLocaleString()}</span>
            </div>
          ))}

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
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={handlePrint}
            className="flex-1 p-2 rounded-md bg-secondary text-white font-bold hover:bg-secondary/90 transition"
          >
            Cetak Nota
          </button>
          <button
            onClick={onClose}
            className="flex-1 p-2 rounded-md bg-red-500 text-white font-bold hover:bg-red-600 transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
