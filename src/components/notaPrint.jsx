"use client";

import { useRef } from "react";

export default function NotaPrint({
  namaPelanggan,
  cart,
  subTotal,
  discount,
  bayar,
  onClose,
}) {
  const notaRef = useRef();
  const grandTotal = subTotal - discount;
  const kembalian = bayar - grandTotal;

  const handlePrint = () => {
    const printContents = notaRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div
        className="bg-white rounded-xl p-4 w-[350px] font-mono"
        ref={notaRef}
      >
        <h2 className="text-center text-xl font-bold mb-2 border-b pb-2">
          Nota Pembayaran
        </h2>
        <div className="mb-2">
          <p>
            Nama: <span className="font-bold">{namaPelanggan}</span>
          </p>
          <p>{new Date().toLocaleString()}</p>
        </div>

        <table className="w-full mb-2">
          <thead>
            <tr className="border-b text-left text-sm">
              <th>Menu</th>
              <th className="text-right">Qty</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={idx} className="border-b last:border-none text-sm">
                <td>{item.title}</td>
                <td className="text-right">{item.qty}</td>
                <td className="text-right">
                  Rp {(item.qty * item.price).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="border-t pt-2 text-sm space-y-1">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rp {subTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Diskon</span>
            <span>Rp {discount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>Rp {grandTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Bayar</span>
            <span>Rp {bayar.toLocaleString()}</span>
          </div>
          <div
            className={`flex justify-between font-bold ${
              kembalian < 0 ? "text-red-500" : "text-green-700"
            }`}
          >
            <span>Kembalian</span>
            <span>Rp {kembalian > 0 ? kembalian.toLocaleString() : 0}</span>
          </div>
        </div>

        <p className="text-center text-xs italic mt-4">Terima kasih!</p>

        <div className="flex gap-2 mt-4 print:hidden">
          <button
            onClick={onClose}
            className="flex-1 p-2 rounded-md bg-gray-300 hover:bg-gray-400"
          >
            Tutup
          </button>
          <button
            onClick={handlePrint}
            className="flex-1 p-2 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700"
          >
            Cetak
          </button>
        </div>
      </div>
    </div>
  );
}
