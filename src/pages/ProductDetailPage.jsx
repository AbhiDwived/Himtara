import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import toast from 'react-hot-toast';

function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success('Added to cart!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-96 object-contain bg-gray-100 rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600">({product.reviews} reviews)</span>
          </div>

          <div className="mb-6">
            <span className="text-3xl font-bold text-[#42B3D5]">₹{product.price}</span>
            <span className="text-gray-500 ml-2">per bottle</span>
            <div className="mt-2">
              <span className="text-xl font-semibold text-green-600">₹{product.setPrice}</span>
              <span className="text-gray-500 ml-2">per set</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border rounded-md flex items-center justify-center hover:bg-gray-100"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border rounded-md flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-[#42B3D5] hover:bg-[#3aa0c0] text-white py-3 rounded-md font-medium"
            >
              Add to Cart
            </button>
            <button className="w-full border border-[#42B3D5] text-[#42B3D5] py-3 rounded-md font-medium hover:bg-[#f0f9fd]">
              Subscribe & Save 20%
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <div className="border-b">
          <nav className="flex space-x-8">
            {['description', 'reviews', 'faq'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-[#42B3D5] text-[#42B3D5]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="py-6">
          {activeTab === 'description' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Product Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 10-step purification process</li>
                <li>• Natural mineral enhancement</li>
                <li>• BIS, FSSAI, and ISO certified</li>
                <li>• Sourced from Himalayan springs</li>
                <li>• Eco-friendly packaging</li>
              </ul>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-medium">Excellent quality!</span>
                  </div>
                  <p className="text-gray-600">Great taste and fast delivery. Will order again.</p>
                  <p className="text-sm text-gray-500 mt-2">- Verified Customer</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'faq' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">What is the shelf life?</h4>
                  <p className="text-gray-600">Our water has a shelf life of 12 months from the manufacturing date.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Is delivery available in my area?</h4>
                  <p className="text-gray-600">We deliver to most major cities. Check availability during checkout.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;