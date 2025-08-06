function BulkOrdersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Bulk Orders</h1>
      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Special Pricing for Large Orders</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>100-500 bottles</span>
            <span className="text-[#42B3D5] font-bold">10% off</span>
          </div>
          <div className="flex justify-between">
            <span>500-1000 bottles</span>
            <span className="text-[#42B3D5] font-bold">20% off</span>
          </div>
          <div className="flex justify-between">
            <span>1000+ bottles</span>
            <span className="text-[#42B3D5] font-bold">30% off</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BulkOrdersPage;