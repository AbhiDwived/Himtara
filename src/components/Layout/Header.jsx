import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-sm sticky top-0 z-50 bg-[#ced2d5]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* <Link to="/" className="flex items-center">
            <span className="bg-gradient-to-r from-[#42B3D5] via-[#3aa0c0] to-[#42B3D5] bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] font-bold text-2xl">Himtara</span>
          </Link> */}
          <Link to="/" className="flex items-center">
  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-[#42B3D5] to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
    Himtara
  </span>
</Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#42B3D5] font-medium">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-[#42B3D5] font-medium">Products</Link>
            <Link to="/subscriptions" className="text-gray-700 hover:text-[#42B3D5] font-medium">Subscriptions</Link>
            <Link to="/bulk-orders" className="text-gray-700 hover:text-[#42B3D5] font-medium">Bulk Orders</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#42B3D5] font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#42B3D5] font-medium">Contact</Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-gray-700 hover:text-[#42B3D5]">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-[#42B3D5]">
              <UserIcon className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-[#42B3D5] relative">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-[#42B3D5] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-[#42B3D5] font-medium py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/products" className="block text-gray-700 hover:text-[#42B3D5] font-medium py-2" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/subscriptions" className="block text-gray-700 hover:text-[#42B3D5] font-medium py-2" onClick={() => setIsMenuOpen(false)}>Subscriptions</Link>
            <Link to="/bulk-orders" className="block text-gray-700 hover:text-[#42B3D5] font-medium py-2" onClick={() => setIsMenuOpen(false)}>Bulk Orders</Link>
            <Link to="/about" className="block text-gray-700 hover:text-[#42B3D5] font-medium py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-[#42B3D5] font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/login" className="block text-gray-700 hover:text-[#42B3D5] font-medium py-2" onClick={() => setIsMenuOpen(false)}>Login</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;