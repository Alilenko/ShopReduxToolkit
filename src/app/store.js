import { configureStore } from '@reduxjs/toolkit';
import categories from '../components/navProduct/NavProductSlice';
import goods from '../components/productItem/ProductItemSlice';


export const store = configureStore({
  reducer: {
    categories,
    goods
  },
  devTools: process.env.NODE_ENV !== 'production'
});
