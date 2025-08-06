# Himtara - Multi-Size Bottled Water E-commerce Platform

A comprehensive e-commerce platform for Himtara bottled water, featuring retail and bulk customers with one-time purchases and subscriptions.

## 🚀 Features

### Customer Features
- **Product Catalog**: Browse water bottles in multiple sizes (250ml, 500ml, 1L)
- **Shopping Cart**: Add/remove items with quantity management
- **User Authentication**: Login/Register with JWT authentication
- **Subscription Service**: Recurring deliveries with 20% discount
- **Bulk Orders**: Special pricing for businesses and events
- **Order Management**: Track orders, view history, reorder
- **Account Management**: Profile, addresses, payment methods
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Admin Features
- **Dashboard**: Key metrics, recent orders, alerts
- **Product Management**: CRUD operations for products
- **Order Management**: View, update order status, generate invoices
- **Customer Management**: View customer profiles and history
- **Inventory Management**: Stock tracking and alerts

### Technical Features
- **Redux Toolkit**: State management for cart, auth, products, orders
- **React Router**: Client-side routing
- **Toast Notifications**: User feedback with react-hot-toast
- **Form Validation**: React Hook Form with Yup validation
- **Responsive UI**: TailwindCSS with custom color scheme
- **Component Architecture**: Reusable components and layouts

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, TailwindCSS, Redux Toolkit
- **Routing**: React Router DOM
- **State Management**: Redux Toolkit
- **UI Components**: Heroicons, Lucide React
- **Notifications**: React Hot Toast
- **Forms**: React Hook Form, Yup validation
- **Styling**: TailwindCSS with custom theme

## 📦 Installation

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Install additional dependencies**:
   ```bash
   pnpm add @reduxjs/toolkit react-redux axios react-hook-form @hookform/resolvers yup react-hot-toast lucide-react date-fns clsx tailwind-merge
   ```

3. **Start development server**:
   ```bash
   pnpm run dev
   ```

## 🏗️ Project Structure

```
src/
├── components/
│   └── Layout/
│       ├── Header.jsx
│       ├── Footer.jsx
│       └── Layout.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── ProductsPage.jsx
│   ├── ProductDetailPage.jsx
│   ├── CartPage.jsx
│   ├── CheckoutPage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── AccountPage.jsx
│   ├── OrdersPage.jsx
│   ├── SubscriptionsPage.jsx
│   ├── BulkOrdersPage.jsx
│   ├── ContactPage.jsx
│   ├── AboutPage.jsx
│   └── admin/
│       ├── AdminDashboard.jsx
│       ├── AdminProducts.jsx
│       └── AdminOrders.jsx
├── store/
│   ├── store.js
│   └── slices/
│       ├── authSlice.js
│       ├── cartSlice.js
│       ├── productSlice.js
│       └── orderSlice.js
├── App.jsx
└── main.jsx
```

## 🎨 Design System

### Colors
- **Primary**: #42B3D5 (Icy Blue)
- **Secondary**: #3aa0c0 (Darker Blue)
- **Success**: Green variants
- **Warning**: Yellow variants
- **Error**: Red variants

### Typography
- **Font**: System fonts (Inter, Lato, Montserrat fallbacks)
- **Headings**: Bold weights
- **Body**: Regular weights

## 🔧 Key Components

### Redux Slices

1. **authSlice**: User authentication state
2. **cartSlice**: Shopping cart management
3. **productSlice**: Product catalog and filters
4. **orderSlice**: Order management

### Main Pages

1. **HomePage**: Hero section, product categories, testimonials
2. **ProductsPage**: Product listing with filters and sorting
3. **ProductDetailPage**: Detailed product view with reviews
4. **CartPage**: Shopping cart with quantity management
5. **CheckoutPage**: Order placement with address and payment
6. **AccountPage**: User profile and settings management
7. **SubscriptionsPage**: Recurring order management
8. **Admin Pages**: Dashboard, products, and orders management

## 🚀 Deployment

1. **Build the project**:
   ```bash
   pnpm run build
   ```

2. **Preview build**:
   ```bash
   pnpm run preview
   ```

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: CSS Grid and Flexbox for layouts
- **Touch Friendly**: Large touch targets for mobile users

## 🔐 Authentication

- JWT token-based authentication
- Local storage for token persistence
- Protected routes for authenticated users
- Role-based access for admin features

## 🛒 E-commerce Features

### Shopping Cart
- Add/remove items
- Quantity management
- Price calculations
- Persistent cart state

### Orders
- Order placement
- Status tracking
- Order history
- Reorder functionality

### Subscriptions
- Recurring deliveries
- Flexible scheduling
- Pause/resume options
- 20% discount on subscriptions

## 📊 Admin Panel

- **Dashboard**: Key metrics and analytics
- **Product Management**: CRUD operations
- **Order Management**: Status updates and tracking
- **Customer Management**: User profiles and history

## 🎯 Future Enhancements

- Payment gateway integration (Razorpay/Stripe)
- Real-time notifications
- Advanced analytics
- Mobile app (React Native)
- AI-based recommendations
- Multi-language support
- Advanced search functionality
- Inventory management system
- Customer support chat

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and queries, contact:
- Email: support@himtara.com
- Phone: +91 123-456-7890