export default function StatCard({ title, value, valueBefore }) {
  return (
    <div className="border border-gray-300 shadow-sm p-4 w-full rounded-lg">
      <h3 className="text-xl mb-2">{title} Bulan Ini</h3>
      <h1 className="text-4xl font-bold text-center">
        Rp. {value.toLocaleString()}
      </h1>
      <div className="flex justify-between mt-2">
        <p className="text-sm font-light">{title} Bulan Lalu</p>
        <p className="text-sm font-light">Rp. {valueBefore.toLocaleString()}</p>
      </div>
    </div>
  );
}
