import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import your cart slice reducer

// Set up the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Assign reducer to 'cart' slice of state
  },
});

export default store; // Export for use in <Provider store={store}>
