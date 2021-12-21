import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    categories: [
        {
            "id": 6,
            "name": "all",
            "label": "All"
          },
            {
                "id": 1,
                "name": "man",
                "label": "Man"
            },
            {
                "id": 2,
                "name": "women",
                "label": "Women"
            },
            {
                "id": 3,
                "name": "kids",
                "label": "Kids"
            },
            {
                "id": 4,
                "name": "accessories",
                "label": "Accessories"
            },
            {
                "id": 5,
                "name": "essential",
                "label": "Essential"
            }
    ],
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