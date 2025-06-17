import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import ProductCard from '../product/ProductCard';

const ProductPage = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Mock product data - would come from API
  const product = {
    id: id || '1',
    name: 'Beach Sunset Tee',
    price: 28,
    originalPrice: 35,
    description: 'A vibrant t-shirt featuring a beach sunset design. Perfect for summer vibes and casual wear. Made from 100% organic cotton for ultimate comfort.',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    features: [
      '100% Organic Cotton',
      'Machine Washable',
      'Unisex Fit',
      'Printed in USA'
    ]
  };

  const relatedProducts = [
    { id: '2', name: 'Mountain Line Tee', price: 28, image: '', isNew: false },
    { id: '3', name: 'Ocean Wave Hoodie', price: 45, image: '', isNew: true },
    { id: '4', name: 'Sunset Tote Bag', price: 20, image: '', isNew: false },
  ];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Navigate to cart or checkout page
    window.location.href = '/cart';
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700 flex items-center space-x-1">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to shop</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Featured Main Image */}
            <div className="col-span-2 aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Grid */}
            {product.images.slice(1).map((image, index) => (
              <div 
                key={index + 1} 
                className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
                onClick={() => setSelectedImageIndex(index + 1)}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Product Info */}
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

            {/* Add to Cart and Buy Now */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`py-4 px-6 rounded-lg font-medium transition-colors border ${
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
                  className={`py-4 px-6 rounded-lg font-medium transition-colors ${
                    product.inStock
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Buy Now' : 'Out of Stock'}
                </button>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  <span>Save</span>
                </button>
                
                <button className="flex-1 py-3 px-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <Share2 className="w-5 h-5 text-gray-600" />
                  <span>Share</span>
                </button>
              </div>
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
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
