import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';
import {categoriesFetched, categoriesError, changeCategory} from './NavProductSlice';
import { createSelector } from 'reselect'

const NavProduct = () => {
    const {categories, activeCategory} = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const {request} = useHttp();

    const filteredNav = createSelector(
        (state) => state.categories.activeCategory,
        (state) => state.goods.goods,
        (filter, goods) => {
            if(filter === 'all'){
                return goods;
            } else {
                return goods.filter(item => item.filter === filter);
            }
        }
    )
    const filterGoods = useSelector(filteredNav);
   

    useEffect(() => {  
        request("http://localhost:3001/categories")
        .then(data => dispatch(categoriesFetched(data)))
        .catch(dispatch(categoriesError))
    }, [])

    const element = categories.map((item) => {
       const clazz = item.name !== activeCategory ? 'nav-link' : 'nav-link active'
        return (
            <li className="nav-item" key={item.id} >
            <a
            onClick={() => dispatch(changeCategory(item.name))}
            className={clazz}
            data-toggle="tab" 
            href={`#${item.name}`} 
            role="tab">{item.label}</a> 
            </li>
        )
    })
    return (
        <>
            {element}
        </>
    )
}

export default NavProduct;
