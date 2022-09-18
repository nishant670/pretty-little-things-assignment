import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    amount:0,
    total:0,
    isLoading:true
}

export const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        clearCart: (state) => {
            state.cartItems=[]
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter(item=>item.id !== itemId)
        },
        increase:(state,{payload}) => {
            const cartItem = state.cartItems.find(item=>item.id===payload.id)
            cartItem.amount = cartItem.amount + 1
        },
        decrease:(state,{payload}) => {
            const cartItem = state.cartItems.find(item=>item.id===payload.id)
            cartItem.amount = cartItem.amount - 1
        },
        totals:(state,{payload}) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item=>{
                amount += item.amount;
                total += item.amount * item.price
            })
            state.amount = amount;
            state.total = total
        }
    }
})

export const {clearCart, removeItem, increase, decrease, totals} = cartSlice.actions

export default cartSlice.reducer