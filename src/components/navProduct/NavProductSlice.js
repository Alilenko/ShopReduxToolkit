import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    activeCategory: 'all',
    error: false
}

const categoriesSlice = createSlice ({
    name: 'categories',
    initialState,
    reducers: {
        categoriesFetched: (state, action) => {
            state.categories = action.payload
        },
        categoriesError: state => state.error = true,
        changeCategory: (state, action) => {
            state.activeCategory = action.payload
        }
    }
});

const {actions, reducer} = categoriesSlice;
export default reducer;
export const {
    categoriesFetched,
    categoriesError, 
    changeCategory
} = actions;