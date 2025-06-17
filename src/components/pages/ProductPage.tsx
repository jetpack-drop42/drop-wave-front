import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import ProductCard from '../product/ProductCard';
import { Dialog, DialogContent } from '../ui/dialog';

const ProductPage = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Mock product data - would come from API
  const product = {
    id: id || '1',
    name: 'Abstract Pattern Tee',
    price: 28,
    originalPrice: 35,
    description: 'A stylish blue t-shirt featuring an abstract geometric pattern. Perfect for casual wear and making a statement. Made from 100% organic cotton for ultimate comfort.',
    images: [
      '/lovable-uploads/a0af2fd1-53d3-4482-9b34-5dd7a03c12df.png',
      '/lovable-uploads/17b70eb0-ff9a-4af8-80ad-5fdd4ab6d334.png',
      '/lovable-uploads/09b11c0a-f123-4891-be66-b516558a9817.png',
      '/lovable-uploads/a5baf921-1082-4125-8cc8-ccb252062a6b.png'
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
    { id: '2', name: 'Modern Logo Tee', price: 25, image: '/lovable-uploads/17b70eb0-ff9a-4af8-80ad-5fdd4ab6d334.png', isNew: false },
    { id: '3', name: 'Magic Water Bottle', price: 22, image: '/lovable-uploads/09b11c0a-f123-4891-be66-b516558a9817.png', isNew: true },
    { id: '4', name: 'Karaoke Club Shot Glass', price: 12, image: '/lovable-uploads/d9f0f475-294a-4fe4-83c0-fd9f0e3d324b.png', isNew: false },
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

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
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
          {/* Product Images - Main image with thumbnails on the right */}
          <div className="flex gap-4">
            {/* Main Image */}
            <div className="flex-1 aspect-square bg-gray-100 rounded-2xl overflow-hidden cursor-pointer">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
                onClick={() => handleImageClick(selectedImageIndex)}
              />
            </div>
            
            {/* Thumbnail Column */}
            <div className="flex flex-col gap-3 w-20">
              {product.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-all ${
                    selectedImageIndex === index 
                      ? 'ring-2 ring-black' 
                      : 'hover:opacity-75'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
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

      {/* Full-screen Gallery Dialog */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main image */}
            <img
              src={product.images[selectedImageIndex]}
              alt={`${product.name} ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {product.images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductPage;
