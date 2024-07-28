import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload.attributes;
            const curItem = product ? {
                    title: product.title,
                    key: product.key,
                    price: product.price,
                    image: product.image.data.attributes.url,
                } : action.payload;

            const index = state.cart.findIndex((item) => item.key === curItem.key);
            // If the item is not in the cart then index will be -1
            if(index === -1) {
                state.cart.push({...curItem, quantity: 1})
            } else {
                state.cart[index].quantity += 1;
            }
        },
        removeFromCart: (state, action) => {
            const curKey = action.payload?.attributes?.key || action.payload.key;
            const index = state.cart.findIndex(item => item.key === curKey);
            // If the item is not in the cart then index will be -1
            if(index === -1) return;
            if(state.cart[index].quantity === 1) {
                state.cart = state.cart.filter(item => item.key !== curKey);
            } else {
                state.cart[index].quantity -= 1;
            }
        },
        //create an action to removeCartItem
        removeCartItem: (state, action) => {
            const curKey = action.payload?.attributes?.key || action.payload.key;
            const index = state.cart.findIndex(item => item.key === curKey);
            // If the item is not in the cart then index will be -1
            if(index === -1) {
                return
            } else{
                state.cart = state.cart.filter(item => item.key !== curKey);
            }           
        },

        resetCart: (state, action) => {
            state.cart = []
        }
    },
})

export default cartSlice.reducer;

export const {addToCart, removeFromCart, resetCart, removeCartItem} = cartSlice.actions;