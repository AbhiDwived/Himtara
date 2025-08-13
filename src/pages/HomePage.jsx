import { Link } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: "url('/assets/heromounatainwater.jpg')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#42B3D5]/20 via-transparent to-[#42B3D5]/10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
                <span className="bg-gradient-to-r from-white via-[#42B3D5] to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">Himtara</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">Pure Himalayan Water, Delivered Fresh</p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl text-white/95 font-medium leading-relaxed">
                From the pristine peaks of the Himalayas<br/>
                <span className="text-[#42B3D5]">to your doorstep</span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                Experience the purity of glacier-fed mountain springs. 10-step purification process ensures every drop is crystal clear and refreshingly pure.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Link to="/products" className="bg-gradient-to-r from-[#42B3D5] to-[#3aa0c0] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg px-8 py-3 min-w-48 rounded-md font-medium">
                Shop Now
              </Link>
              <Link to="/subscriptions" className="border-2 border-[#42B3D5]/20 bg-white/80 backdrop-blur hover:bg-[#42B3D5]/5 hover:border-[#42B3D5]/40 text-gray-800 text-lg px-8 py-3 min-w-48 rounded-md font-medium transition-all duration-300">
                Start Subscription
              </Link>
            </div>
            
            <div className="pt-12">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#42B3D5]/20 flex items-center justify-center">
                    <span className="text-[#42B3D5] text-sm font-bold">✓</span>
                  </div>
                  <span className="text-sm">BIS Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#42B3D5]/20 flex items-center justify-center">
                    <span className="text-[#42B3D5] text-sm font-bold">✓</span>
                  </div>
                  <span className="text-sm">FSSAI Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#42B3D5]/20 flex items-center justify-center">
                    <span className="text-[#42B3D5] text-sm font-bold">✓</span>
                  </div>
                  <span className="text-sm">ISO 22000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Products Section */}
<section className="py-12 bg-white">
  <div className=" px-4">
    <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> */}
      
        <ProductCard  />
   
    {/* </div> */}
  </div>
</section>


      {/* Subscription CTA */}
      <section className="py-12 bg-[#42B3D5] text-white">
        <div className="mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe & Save 20%</h2>
          <p className="text-lg mb-6">Never run out of pure water with automatic deliveries</p>
          <Link to="/subscriptions" className="bg-white text-[#42B3D5] font-medium px-8 py-3 rounded-md hover:bg-gray-100">
            Start Subscription
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;