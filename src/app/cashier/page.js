"use client";

import Navbar from "@/components/ui/navbar";
import Link from "next/link";
import { FaSearch, FaPlusCircle } from "react-icons/fa";
import ProductCard from "@/components/ui/cardMenu";
import { useState, useEffect } from "react";
import CartProductCard from "@/components/ui/cardProductCart";
import { useRouter } from "next/navigation";
import products from "@/data/products.json";

export default function Cashier() {
  const [cart, setCart] = useState([]);
  const [bayar, setBayar] = useState(0);
  const [namaPelanggan, setNamaPelanggan] = useState("");
  const router = useRouter();
  const [productList, setProductList] = useState(products);

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.title === product.title);
    if (index !== -1) {
      const updated = [...cart];
      updated[index].qty += 1;
      setCart(updated);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const incrementQty = (index) => {
    const updated = [...cart];
    updated[index].qty += 1;
    setCart(updated);
  };

  const decrementQty = (index) => {
    const updated = [...cart];
    if (updated[index].qty > 1) updated[index].qty -= 1;
    else updated.splice(index, 1);
    setCart(updated);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subTotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const discount = 0;
  const grandTotal = subTotal - discount;
  const change = bayar - grandTotal;

  const handlePrintPage = () => {
    router.push(
      `/cashier/nota?nama=${encodeURIComponent(
        namaPelanggan
      )}&cart=${encodeURIComponent(
        JSON.stringify(cart)
      )}&subtotal=${subTotal}&discount=${discount}&bayar=${bayar}`
    );
  };

  return (
    <div>
      <Navbar />
      <div className="px-24 pt-8">
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
            className="bg-accent text-white font-semibold px-12 py-2 rounded-md hover:bg-accent/90 delay-100 flex items-center gap-"
          >
            <FaPlusCircle />
            Tambah Barang
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[70vh] pr-2">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  price={product.price}
                  imageSrc={product.imageSrc}
                  onAdd={() => addToCart(product)}
                />
              ))}
            </div>
          </div>
          <div className="self-start border border-gray-300 rounded-xl bg-white p-8 shadow-sm">
            <h1 className="text-xl font-bold mb-4">Detail Pelanggan</h1>
            <label>Nama Pelanggan</label>
            <input
              type="text"
              placeholder="cth. Grace"
              value={namaPelanggan}
              onChange={(e) => setNamaPelanggan(e.target.value)}
              className="block w-full rounded-md border border-gray-400 shadow-sm focus:border-secondary focus:ring-2 focus:ring-accent text-sm px-3 py-2 my-2"
            ></input>
            <hr className="my-2" />
            <h1 className="text-xl font-bold mb-4">Detail Pesanan</h1>
            {cart.map((item, index) => (
              <CartProductCard
                key={index}
                item={item}
                index={index}
                increment={incrementQty}
                decrement={decrementQty}
              />
            ))}

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Total Item</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rp. {subTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Diskon</span>
                <span>Rp. {discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-2">
                <span>Total</span>
                <span>Rp. {grandTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Bayar</span>
                <span>Rp. {bayar.toLocaleString()}</span>
              </div>
              <div
                className={`flex justify-between font-bold border-t pt-2 ${
                  change < 0 ? "text-red-500" : "text-accent"
                }`}
              >
                <span>Kembalian</span>
                <span>Rp. {change > 0 ? change.toLocaleString() : 0}</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 mt-2">
              <span>Bayar</span>
              <input
                type="text"
                className="block w-24 rounded-md border border-gray-400 shadow-sm focus:border-secondary focus:ring-2 focus:ring-accent text-sm px-3 py-2 my-2 text-right appearance-none"
                placeholder="Rp. 0"
                value={bayar}
                onChange={(e) => setBayar(Number(e.target.value || 0))}
              />
            </div>
            <button
              onClick={handlePrintPage}
              className="block w-full bg-secondary text-white font-semibold px-12 py-2 rounded-md hover:bg-accent/90 delay-100 mt-4"
            >
              Cetak Nota
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
