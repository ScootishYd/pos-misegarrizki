import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ title, price, imageSrc, onAdd }) {
  return (
    <div className="relative w-full rounded-xl flex flex-col gap-2 ">
      <div className="relative w-full h-64">
        <Image
          src={imageSrc}
          fill
          className="object-cover border border-accent rounded-xl"
          alt={title}
        />
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-black text-xl">{title}</p>
          <p className="text-sm text-black">Rp. {price.toLocaleString()}</p>
        </div>
        <button
          onClick={onAdd}
          className="px-8 py-2 rounded-md bg-secondary text-white shadow hover:bg-secondary/90 transition-all"
        >
          <FaShoppingCart size={16} />
        </button>
      </div>
    </div>
  );
}
