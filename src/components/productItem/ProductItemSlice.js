import {createSlice} from '@reduxjs/toolkit';
import { Calc } from 'calc-js';

const initialState = {
    goods: [],
    error: false,
    basket: [],
    qtty: [0],
    totalPrice: [0],
    search: [],
    
}

const productSlice = createSlice ({
    name: 'goods',
    initialState,
    reducers: {
        goodsFetched: (state, action) => {
            state.goods = action.payload
        },
        goodsError: state => state.error = true,
        addToBasket: (state, action) => {
            state.basket = [...state.basket, action.payload]
        },
        changeTotalPrice: (state, action) => {
            state.totalPrice = [new Calc(...state.totalPrice).sum(action.payload).finish()]
            console.log(action.payload)
        },
        changeQtty: (state, action) => {
            state.qtty = [new Calc(...state.qtty).sum(action.payload).finish()]
        },
        deleteFromBasket: (state, action) => {
            state.basket.splice(
                state.basket.findIndex((item) => item.id === action.payload),
                1
            );
        },
        changeSearch: (state, action) => {
            state.search = action.payload
        } 
    }
});


const {actions, reducer} = productSlice;
export default reducer;
export const {
    goodsFetched,
    goodsError,
    addToBasket,
    changeTotalPrice, 
    changeQtty, 
    deleteFromBasket,
    changeSearch
} = actions;