function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">250ml Bottle</h3>
          <p className="text-[#42B3D5] font-bold text-lg">₹10 per bottle</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">500ml Bottle</h3>
          <p className="text-[#42B3D5] font-bold text-lg">₹15 per bottle</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">1000ml Bottle</h3>
          <p className="text-[#42B3D5] font-bold text-lg">₹20 per bottle</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;