// import React from 'react';

// const ProductCard = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4">
//       <div className="relative">
//         <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold rounded-full px-2 py-1">
//           Value Pack
//         </span>
//         <img
//           src="../../public/assets/images/250ml.png"
//           alt="Himtara 250ml"
//           className="w-full h-48 object-contain"
//         />
//       </div>
//       <div className="mt-4">
//         <h3 className="text-gray-700 font-semibold">Himtara 250ml</h3>
//         <p className="text-gray-500">250ml</p>
//         <p className="text-gray-500">
//           <span className="font-bold text-green-500">₹10</span> per piece
//         </p>
//         <p className="text-gray-500">Set Price: ₹144</p>
//       </div>
//       <div className="mt-4 flex gap-2">
//         <button className="bg-green-200 text-green-700 py-2 px-4 rounded-md hover:bg-green-300">
//           Add to Cart
//         </button>
//         <button className="bg-gray-100 text-gray-500 py-2 px-4 rounded-md hover:bg-gray-200">
//           Subscribe & Save 25%
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


// import React from "react";
// import { FaTint, FaLeaf } from "react-icons/fa";
// import bottle from "../../public/assets/images/250ml.png";

// const ProductCard = () => {
//   return (
//     <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-white border border-blue-100 hover:shadow-blue-300 transition-shadow duration-300">
//       <img
//         src={bottle}
//         alt="Clean Water"
//         className="w-50 h-50 object-cover"
//       />
//       <div className="p-5">
//         <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
//           <FaTint className="text-lg" />
//           <span>Pure Mineral Water</span>
//         </div>
//         <h2 className="text-xl font-bold text-gray-800 mb-2">
//           Stay Hydrated, Stay Healthy
//         </h2>
//         <p className="text-gray-600 text-sm mb-4">
//           Delivered directly to your doorstep. 100% natural and certified safe for all age groups.
//         </p>
//         <div className="flex justify-between items-center">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-full transition">
//             Order Now
//           </button>
//           <div className="text-green-500 flex items-center gap-1 text-sm">
//             <FaLeaf />
//             Eco-friendly Packaging
//           </div>
//         </div>
//       </div>
//     </div>
//   );ss
// };

// export default ProductCard;
import React from "react";
import { FaEye, FaHeart, FaStar, FaShoppingCart, FaTag } from "react-icons/fa";
import bottle1 from "../../public/assets/images/250 ml.png";
import bottle2 from "../../public/assets/images/1 L.png";
import bottle3 from "../../public/assets/images/500 ml Set of 24.png";
import bottle4 from "../../public/assets/images/250 ml Set of 24.png";
import bottle5 from "../../public/assets/images/500 ml.png";
import bottle6 from "../../public/assets/images/500 ml Set of 24.png";
import bottle7 from "../../public/assets/images/1L Set of 12.png";
;


const products = [
  {
    id: 1,
    name: "Himtara Pure 250ml – Premium Himalayan Water",
    price: "₹10 ",
    priceTag:"per piece",
    rating: 4.8,
    reviews: "4,263",
    tags: ["Best Seller", "Best Price"],
    discount: "Up to 10% off",
    image: bottle1,
  },
  {
    id: 2,
    name: "Himtara Fresh 500ml – Naturally Sourced Mineral Hydration",
    price: "₹15 ",
    priceTag:"per piece",
    rating: 4.9,
    reviews: "6,120",
    tags: ["Best Seller"],
    discount: "Save ₹5 now",
    image: bottle5,
  },
  {
    id: 3,
    name: "Himtara Spark 1000ml – Crisp & Refreshing Everyday Water",
    price: "₹20 ",
    priceTag:"per piece",
    rating: 4.7,
    reviews: "8,512",
    tags: ["Best Price"],
    discount: "Limited Offer",
    image: bottle2,
  },
  {
    id: 4,
    name: "Himtara Essence 250ml – Elevate Your Daily Hydration",
    price: "₹130 ",
    priceTag:"for Set of 24",
    rating: 4.6,
    reviews: "2,319",
    tags: ["Best Seller"],
    discount: "Up to 5% off",
    image: bottle4,
  },
  {
    id: 5,
    name: "Himtara Essence 500ml – Elevate Your Daily Hydration",
    price: "₹144",
    priceTag:"for Set of 24",
    rating: 4.6,
    reviews: "2,319",
    tags: ["Best Seller"],
    discount: "Up to 5% off",
    image: bottle6,
  },
  {
    id: 6,
    name: "Himtara Essence 1000ml – Elevate Your Daily Hydration",
    price: "₹90 ",
    priceTag:"for Set of 12",
    rating: 4.6,
    reviews: "2,319",
    tags: ["Best Seller"],
    discount: "Up to 5% off",
    image: bottle7,
  },
];

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 font-serif">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 transition hover:shadow-md"
        >
          {/* Discount badge */}
          <div className="text-xs text-blue-600 font-semibold ">
            <span className="bg-blue-100 text-blue-700 px-2 mb-2 rounded">
              {product.discount}
            </span>
          </div>

          {/* Image */}
          {/* <div className="w-30 h-25 rounded-md mb-1 overflow-hidden flex items-center justify-center bg-gray-100 ">
            <img
              src={bottle1}
              alt={product.name}
              className=" object-cover "
            />s
          </div> */}
          <div className="w-full h-40 rounded-md mb-3 overflow-hidden flex items-center justify-center bg-white">
  <img
    src={product.image }
    alt={product.name}
    className="h-full object-cover"
  />
</div>

          {/* Icons row */}
          <div className="flex justify-end space-x-2 text-gray-500 mb-2">
            <FaEye className="hover:text-blue-600 cursor-pointer" />
            <FaHeart className="hover:text-red-500 cursor-pointer" />
          </div>

          {/* Title */}
          <h3 className="text-lg  font-semibold text-gray-700 leading-5 mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <div className="flex text-yellow-500 mr-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"
                  } text-xs`}
                />
              ))}
            </div>
            <span className="font-semibold text-gray-800 mr-1">
              {product.rating}
            </span>
            <span>({product.reviews})</span>
          </div>

          {/* Tags */}
          <div className="flex gap-2 text-xs text-gray-500 mb-3">
            {product.tags.map((tag, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"
              >
                <FaTag className="text-[10px]" />
                {tag}
              </span>
            ))}
          </div>

          {/* Price & Button */}
          <div className="flex items-center justify-between mt-auto">
            <div className="text-xl font-bold text-gray-800">{product.price} <span className="text-sm text-gray-500">{product.priceTag}</span></div>
            <button className="flex items-center gap-2 bg-[#41B0D2] text-white px-3 py-1.5 text-sm rounded hover:bg-[#5285F2]">
              <FaShoppingCart />
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
