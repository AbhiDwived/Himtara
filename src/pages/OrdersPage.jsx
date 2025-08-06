import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Package, Truck, CheckCircle, Clock, Eye } from 'lucide-react';

function OrdersPage() {
  const { orders } = useSelector(state => state.orders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'processing':
        return <Package className="w-5 h-5 text-blue-500" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-purple-500" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Mock orders data if none exist
  const mockOrders = orders.length > 0 ? orders : [
    {
      id: 1,
      date: '2024-01-15',
      status: 'delivered',
      total: 180,
      items: [
        { name: 'Himtara 500ml', quantity: 12, price: 15 }
      ]
    },
    {
      id: 2,
      date: '2024-01-10',
      status: 'shipped',
      total: 144,
      items: [
        { name: 'Himtara 250ml', quantity: 12, price: 12 }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      
      {mockOrders.length === 0 ? (
        <div className="text-center py-16">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">No orders yet</h2>
          <p className="text-gray-600 mb-8">Start shopping to see your orders here</p>
          <button className="bg-[#42B3D5] hover:bg-[#3aa0c0] text-white px-6 py-3 rounded-md">
            Shop Now
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-white border rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div>
                    <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                    <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(order.status)}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                  <span className="font-bold text-lg">₹{order.total}</span>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  {order.items?.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-100 rounded"></div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => setSelectedOrder(order)}
                    className="flex items-center space-x-2 text-[#42B3D5] hover:underline"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                  
                  {order.status === 'delivered' && (
                    <button className="text-[#42B3D5] hover:underline">
                      Reorder
                    </button>
                  )}
                  
                  {order.status === 'shipped' && (
                    <button className="text-[#42B3D5] hover:underline">
                      Track Order
                    </button>
                  )}
                  
                  {order.status === 'pending' && (
                    <button className="text-red-500 hover:underline">
                      Cancel Order
                    </button>
                  )}
                  
                  <button className="text-gray-600 hover:underline">
                    Download Invoice
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Order Details</h2>
                <button 
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Order Information</h3>
                    <p>Order ID: #{selectedOrder.id}</p>
                    <p>Date: {new Date(selectedOrder.date).toLocaleDateString()}</p>
                    <p>Status: {selectedOrder.status}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Delivery Address</h3>
                    <p>123 Main Street</p>
                    <p>New Delhi, 110001</p>
                    <p>India</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Items Ordered</h3>
                  <div className="space-y-3">
                    {selectedOrder.items?.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-200 rounded"></div>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-600">₹{item.price} each</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p>Qty: {item.quantity}</p>
                          <p className="font-semibold">₹{item.price * item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount</span>
                    <span>₹{selectedOrder.total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrdersPage;