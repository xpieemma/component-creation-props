import type { Product } from "../../index";
import { formatPrice } from "../utils/formatPrice";

interface CartSummaryProps {
  cartItems: string[];
  products: Product[];
  totalPrice: number;
  onRemoveOne: (id: string) => void;
  onRemoveAll: (id: string) => void;
}

const CartSummary = ({ cartItems, products, totalPrice, onRemoveOne, onRemoveAll }: CartSummaryProps) => {
  const itemCounts = cartItems.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const uniqueIds = Object.keys(itemCounts);

  if (cartItems.length === 0) return (
    <div className="p-4 border-2 border-dashed rounded-lg text-center text-gray-400">
      Your cart is empty.
    </div>
  );

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Shopping Cart</h3>
      <ul className="divide-y divide-gray-100">
        {uniqueIds.map((id) => {
          const product = products.find((p) => p.id === id);
          if (!product) return null;
          return (
            <li key={id} className="py-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">{product.name}</p>
                <p className="text-xs text-gray-500">{itemCounts[id]} × {formatPrice(product.price)}</p>
              </div>
              <div className="flex gap-1">
                <button onClick={() => onRemoveOne(id)} className="p-1 px-2 text-[10px] bg-gray-100 hover:bg-gray-200 rounded">Remove 1</button>
                <button onClick={() => onRemoveAll(id)} className="p-1 px-2 text-[10px] bg-red-50 text-red-600 hover:bg-red-100 rounded">Clear</button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-4 pt-3 border-t flex justify-between items-end">
        <span className="text-sm font-medium text-gray-600">Total:</span>
        <span className="text-xl font-bold text-green-600">{formatPrice(totalPrice)}</span>
      </div>
    </div>
  );
};

export default CartSummary;