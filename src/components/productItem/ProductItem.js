import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';
import {goodsFetched, goodsError, addToBasket, changeQtty} from '../productItem/ProductItemSlice';
import { createSelector} from 'reselect'


const ProductItem = () => {
    const {basket, search} = useSelector(state => state.goods);
    
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {  
        request("http://localhost:3001/goods")
        .then(data => dispatch(goodsFetched(data)))
        .catch(dispatch(goodsError))
    }, [])

    const addBasket = (item) => {
        const exist = basket.find((elem) => elem.id === item)
        console.log(basket);
        if(exist){
            
        } else{
            request(`http://localhost:3001/goods/${item}`)
            .then(data => dispatch(addToBasket(data)))
            .catch(dispatch(goodsError))
            dispatch(changeQtty(1))
        }
        
    }

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

    const searchGoods = filterGoods.filter((item) => item.title.toLowerCase().includes([search]))
 
    const element = searchGoods.map((item) => {

        return(
            <div key={item.id} className='col-xl-3 col-lg-4 col-md-4 col-12'>
            <div className="single-product">
                <div className="product-img">
                    <a href="product-details.html">
                        <img className="default-img" src={item.img} alt="#"/>
                        <img className="hover-img" src={item.img} alt="#"/>
                    </a>
                    <div className="button-head">

                        <div className="product-action-2">
                            <div onClick={() => addBasket(item.id)} title="Add to cart" >Add to cart</div>
                        </div>
                    </div>
                </div>
                <div className="product-content">
                    <h3><a href="product-details.html">{item.title}</a></h3>
                    <div className="product-price">
                        <span>${item.price}.00</span>
                    </div>
                </div>
            </div>
            </div>
        )
        })
    
    return (
        <>
       {element}
        </>
    )
}

export default ProductItem
