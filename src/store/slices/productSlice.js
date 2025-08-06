import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      name: 'Himtara 250ml',
      size: '250ml',
      price: 10,
      setPrice: 144,
      image: '/assets/images/250 ml.png',
      description: 'Perfect for kids and on-the-go hydration',
      category: 'bottles',
      inStock: true,
      rating: 4.5,
      reviews: 89,
    },
    {
      id: 2,
      name: 'Himtara 500ml',
      size: '500ml',
      price: 15,
      setPrice: 130,
      image: '/assets/images/500 ml.png',
      description: 'Most popular daily size for regular hydration',
      category: 'bottles',
      inStock: true,
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 3,
      name: 'Himtara 1L',
      size: '1000ml',
      price: 20,
      setPrice: 90,
      image: '/assets/images/1L.png',
      description: 'Ideal for home and office use',
      category: 'bottles',
      inStock: true,
      rating: 4.6,
      reviews: 203,
    },
  ],
  loading: false,
  error: null,
  filters: {
    category: '',
    priceRange: [0, 1000],
    size: '',
  },
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { setProducts, setLoading, setError, setFilters } = productSlice.actions;
export default productSlice.reducer;