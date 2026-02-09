import type { ProductDisplayProps } from "../../types";

function ProductDisplay({ product, showDescription, showStockStatus, onAddToCart, children}:ProductDisplayProps){
    return (
        <div className="flex flex-row gap-3.5 border border-gray-300 m-3.5">
            {product.imageUrl && <div><img src={product.imageUrl} /></div>}
            <div className="">
                <p>Product ID: {product.id}</p>
                <p>Product Name: {product.name}</p>
                <p>Price: ${product.price}</p>
                {showDescription && (<p>Description: {product.description}</p>)}
                {showStockStatus && (<p>Stock Status: {product.inStock==true ? "In Stock" : "Out of Stock"}</p>)}
                {onAddToCart && (<button onClick={()=>onAddToCart(product.id)} className="border border-gray-300 p-3.5 pt-1.5 pb-1.5">Add to Cart</button>)}
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay;