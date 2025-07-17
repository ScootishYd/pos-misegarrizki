import Image from "next/image";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

export default function CartProductCard({ item, index, increment, decrement }) {
  return (
    <div className="flex items-center gap-2 rounded-md p-3">
      <div className="w-16 h-12 rounded-md overflow-hidden flex items-center justify-center bg-gray-100">
        <Image
          src={item.imageSrc}
          alt={item.title}
          width={64}
          height={48}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex-1">
        <p className="font-bold text-black">{item.title}</p>
        <p className="text-sm text-gray-700">
          Rp. {item.price.toLocaleString()}
        </p>
        <p className="text-xs text-gray-500">
          Subtotal: Rp. {(item.price * item.qty).toLocaleString()}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={() => increment(index)}>
          <FaPlusCircle className="text-accent w-5 h-5" />
        </button>
        <span className="font-semibold">{item.qty}</span>
        <button onClick={() => decrement(index)}>
          <FaMinusCircle className="text-accent w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
