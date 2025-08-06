import React from 'react';

const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="relative">
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold rounded-full px-2 py-1">
          Value Pack
        </span>
        <img
          src="../../public/assets/images/250ml.png"
          alt="Himtara 250ml"
          className="w-full h-48 object-contain"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-700 font-semibold">Himtara 250ml</h3>
        <p className="text-gray-500">250ml</p>
        <p className="text-gray-500">
          <span className="font-bold text-green-500">₹10</span> per piece
        </p>
        <p className="text-gray-500">Set Price: ₹144</p>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="bg-green-200 text-green-700 py-2 px-4 rounded-md hover:bg-green-300">
          Add to Cart
        </button>
        <button className="bg-gray-100 text-gray-500 py-2 px-4 rounded-md hover:bg-gray-200">
          Subscribe & Save 25%
        </button>
      </div>
    </div>
  );
};

export default ProductCard;