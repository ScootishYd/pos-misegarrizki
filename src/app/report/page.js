import Navbar from "@/components/ui/navbar";
import StatCard from "@/components/ui/statCard";
import ChartLineDots from "@/components/ui/chartLineDots";
import AsetKeuangan from "@/components/ui/asetKeuangan";
import TableSelling from "@/components/ui/tableSelling";
import TopProduct from "@/components/ui/topProduct";

export default function ReportPage() {
  const data = [
    {
      index: 1,
      title: "Pendapatan",
      value: 8351000,
      valueBefore: 797500,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="px-24 pt-8">
        <div className="flex gap-8">
          {data.map((item, index) => (
            <StatCard
              key={index}
              title={item.title}
              value={item.value}
              valueBefore={item.valueBefore}
            />
          ))}
          <div className="border border-gray-300 shadow-sm p-4 w-full flex flex-col justify-between rounded-lg">
            <h3 className="text-xl mb-2">Penjualan Bulan Ini</h3>
            <h1 className="text-4xl font-bold text-center">322 Produk</h1>
            <div className="flex justify-between">
              <p className="text-sm font-light">Penjualan Bulan Lalu</p>
              <p className="text-sm font-light text-secondary">289 Produk</p>
            </div>
          </div>
          <div className="border border-gray-300 shadow-sm p-4 w-full flex flex-col justify-between rounded-lg">
            <h3 className="text-xl mb-2">Pelanggan Bulan Ini</h3>
            <h1 className="text-4xl font-bold text-center">72 Orang</h1>
            <div className="flex justify-between">
              <p className="text-sm font-light">Pelanggan Bulan Lalu</p>
              <p className="text-sm font-light text-secondary">58 Orang</p>
            </div>
          </div>
          <div className="border border-gray-300 shadow-sm p-4 w-full flex flex-col justify-between rounded-lg">
            <h3 className="text-xl mb-2">Jumlah Inventaris</h3>
            <h1 className="text-4xl font-bold text-center">28 Item</h1>
            <div className="flex justify-between">
              <p className="text-sm font-light"></p>
              <p className="text-sm font-light text-secondary"></p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="col-span-2">
            <h1 className="font-bold text-2xl my-4">Laporan Penjualan</h1>
            <ChartLineDots />
            <h1 className="font-bold text-2xl my-4">Penjualan Terakhir</h1>
            <TableSelling />
          </div>
          <div className="col-span-1">
            <h1 className="font-bold text-2xl my-4">Aset Keuangan</h1>
            <AsetKeuangan />
            <h1 className="font-bold text-2xl my-4">Produk Terlaris</h1>
            <TopProduct />
          </div>
        </div>
      </div>
    </div>
  );
}
