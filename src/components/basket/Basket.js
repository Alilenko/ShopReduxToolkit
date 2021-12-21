import React from 'react';
import { useSelector } from 'react-redux';
import BasketItem from '../basketItem/BasketItem';
import {} from '../productItem/ProductItemSlice'
import './basket.css';

const Basket = () => {
    const {basket, totalPrice} = useSelector(state => state.goods);


    return (
        <div className="shopping-cart section">
    <div className="container">
        <div className="row">
            <div className="col-12">
               
                <table className="table shopping-summery">
                    <thead>
                        <tr className="main-hading">
                            <th>PRODUCT</th>
                            <th>NAME</th>
                            <th className="text-center">UNIT PRICE</th>
                            <th className="text-center">QUANTITY</th>
                            <th className="text-center">TOTAL</th> 
                            <th className="text-center"><i className="ti-trash remove-icon"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {basket.length > 0 ? basket.map((item) => (
                            <BasketItem key={item.id} item={item}/>
                        )) : <div className="col-auto">
                                <div className="section-title">
                                    <h6>Cart is empty</h6>
                                </div>
                           </div> }               
                    </tbody>
                </table>

            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="total-amount">
                    <div className="row">
                        <div className="col-lg-8 col-md-5 col-12">
                            
                    
                        </div>
                        <div className="col-lg-4 col-md-7 col-12">
                            <div className="right">
                                <ul>
                                    <li>Cart Subtotal<span>${totalPrice}</span></li>
                                    <li>Shipping<span>Free</span></li>
                                    
                                    <li className="last">You Pay<span>${totalPrice}</span></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}





export default Basket;

