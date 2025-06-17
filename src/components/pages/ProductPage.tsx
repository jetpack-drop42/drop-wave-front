
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductImageGallery from '../product/ProductImageGallery';
import ProductInfo from '../product/ProductInfo';
import RelatedProducts from '../product/RelatedProducts';

const ProductPage = () => {
  const { id } = useParams();
  const [currentImages, setCurrentImages] = useState<string[]>([]);

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
    colors: [
      { name: 'Blue', value: '#3B82F6', images: ['/lovable-uploads/a0af2fd1-53d3-4482-9b34-5dd7a03c12df.png', '/lovable-uploads/17b70eb0-ff9a-4af8-80ad-5fdd4ab6d334.png'] },
      { name: 'Black', value: '#000000', images: ['/lovable-uploads/09b11c0a-f123-4891-be66-b516558a9817.png', '/lovable-uploads/a5baf921-1082-4125-8cc8-ccb252062a6b.png'] },
      { name: 'White', value: '#FFFFFF', images: ['/lovable-uploads/17b70eb0-ff9a-4af8-80ad-5fdd4ab6d334.png', '/lovable-uploads/a0af2fd1-53d3-4482-9b34-5dd7a03c12df.png'] }
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

  const handleColorChange = (color: { name: string; value: string; images: string[] }) => {
    setCurrentImages(color.images);
  };

  const displayImages = currentImages.length > 0 ? currentImages : product.images;

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
          <ProductImageGallery images={displayImages} productName={product.name} />
          <ProductInfo product={product} onColorChange={handleColorChange} />
        </div>

        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductPage;
