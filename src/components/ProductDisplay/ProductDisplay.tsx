import type { ProductDisplayProps } from "../../types";

function ProductDisplay({ product, showDescription, showStockStatus, onAddToCart, children }: ProductDisplayProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="flex flex-row gap-3.5 border border-gray-300 m-3.5 p-4 rounded-lg shadow-sm">
      {product.imageUrl && (
        <div className="flex-shrink-0">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-24 h-24 object-cover rounded"
          />
        </div>
      )}
      <div className="flex-1">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600">Product ID: {product.id}</p>
        <p className="text-green-600 font-semibold">{formatPrice(product.price)}</p>
        
        {showDescription && (
          <p className="text-sm text-gray-700 mt-2">{product.description}</p>
        )}
        
        {showStockStatus && (
          <p className={`text-sm mt-1 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
          </p>
        )}
        
        {onAddToCart && (
          <button
            onClick={() => onAddToCart(product.id)}
            className="border border-gray-300 px-4 py-1.5 rounded hover:bg-gray-50 mt-3"
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        )}
        
        {children}
      </div>
    </div>
  );
}

export default ProductDisplay;