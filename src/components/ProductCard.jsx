
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
