import { useState } from 'react';
import { Share2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface Color {
  name: string;
  value: string;
  images: string[];
}

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  colors?: Color[];
  sizes: string[];
  inStock: boolean;
  features: string[];
}

interface ProductInfoProps {
  product: Product;
  onColorChange?: (color: Color) => void;
}

const ProductInfo = ({ product, onColorChange }: ProductInfoProps) => {
  const { addItem, toggleCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);

  const handleColorChange = (color: Color) => {
    setSelectedColor(color);
    onColorChange?.(color);
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor?.name
    });
  };

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor?.name
    });
    
    // Small delay to show the overlay before navigation
    setTimeout(() => {
      toggleCart();
    }, 2500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {product.name}
        </h1>
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">
        {product.description}
      </p>

      {/* Color Selection */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
          <div className="flex space-x-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  selectedColor?.name === color.name
                    ? 'border-black ring-2 ring-gray-300'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
          {selectedColor && (
            <p className="text-sm text-gray-600 mt-2">Selected: {selectedColor.name}</p>
          )}
        </div>
      )}

      {/* Size Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
        <div className="flex space-x-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                selectedSize === size
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart and Buy Now Buttons */}
      <div className="space-y-4">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-4 px-6 rounded-lg font-medium transition-colors border-2 ${
            product.inStock
              ? 'bg-white text-black border-black hover:bg-gray-50'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300'
          }`}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>

        <button
          onClick={handleBuyNow}
          disabled={!product.inStock}
          className={`w-full py-4 px-6 rounded-lg font-medium transition-colors ${
            product.inStock
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.inStock ? 'Buy Now' : 'Out of Stock'}
        </button>

        <button className="w-full py-3 px-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
          <Share2 className="w-5 h-5 text-gray-600" />
          <span>Share</span>
        </button>
      </div>

      {/* Product Features */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Features</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
