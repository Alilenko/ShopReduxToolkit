import {createSlice} from '@reduxjs/toolkit';
import { Calc } from 'calc-js';

const initialState = {
    goods: [
        {
            "id": 1,
            "title": "Women Hot Collection",
            "price": 29,
            "img": "https://wpthemesgrid.com/themes/free/eshop/images/products/p4.jpg",
            "filter": "women"
          },
          {
            "id": 2,
            "title": "Awesome Bags Collection",
            "price": 29,
            "img": "https://wpthemesgrid.com/themes/free/eshop/images/products/p6.jpg",
            "filter": "women"
          },
          {
            "id": 3,
            "title": "Pant Collectons",
            "price": 50,
            "img": "https://wpthemesgrid.com/themes/free/eshop/images/products/p8.jpg",
            "filter": "man"
          },
          {
            "id": 4,
            "title": "Black Sunglass For Women",
            "price": 50,
            "img": "https://wpthemesgrid.com/themes/free/eshop/images/products/p16.jpg",
            "filter": "accessories"
          }
          
    ],
    error: false,
    basket: [],
    qtty: [0],
    totalPrice: 0,
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
            const itemInd = state.basket.findIndex(item => item.id === action.payload);
            if (itemInd>= 0){
                const itemState = state.basket.find(items => items.id === action.payload);
                const editItem = {
                    ...itemState,
                    qtty: ++itemState.qtty
                }
            state.basket = [...state.basket.slice(0, itemInd),
                            editItem,
                            ...state.basket.slice(itemInd + 1)]
            } else {
            const item = state.goods.find(item => item.id === action.payload);
            const newItem = {
                id: item.id,
                title: item.title,
                img: item.img,
                price: item.price,
                qtty: 1
            }; 
                state.basket = [...state.basket, newItem]
        }},
        changeTotalPrice: (state, action) => {
            const newPrice = Number(state.totalPrice) + Number(action.payload)
            state.totalPrice = [newPrice]
        },
        changeQtty: (state, action) => {
            state.qtty = [new Calc(...state.qtty).sum(action.payload).finish()]
        },
        deleteFromBasket: (state, action) => {
            const delItem = state.basket.findIndex((item) => item.id === action.payload)
               state.basket = [
                   ...state.basket.slice(0, delItem),
                   ...state.basket.slice(delItem + 1)]
        },
        deleteQttyFromBasket: (state, action) => {
            const delItem = state.basket.findIndex((item) => item.id === action.payload)
            const itemDelState = state.basket.find(item => item.id === action.payload);
            const deleteItem = {
                ...itemDelState,    
                qtty: --itemDelState.qtty 
            }
                state.basket = [
                    ...state.basket.slice(0, delItem),
                    deleteItem,
                    ...state.basket.slice(delItem + 1)
                ]
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
    changeSearch,
    deleteQttyFromBasket
} = actions;