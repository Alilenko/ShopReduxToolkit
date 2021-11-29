import React from 'react'
import NavProduct from '../navProduct/NavProduct';
import ProductItem from '../productItem/ProductItem';
import {Route, Routes} from 'react-router-dom'
import './productList.css'

const ProductList = () => {
    return (
        <div className="product-area section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h2>Trending Item</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="product-info">
                        <div className="nav-main">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <NavProduct/>
                            </ul>
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="man" role="tabpanel">
                                <div className="tab-single">
                                    <div className="row">
                                        <ProductItem/>
                                    </div>   
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

export default ProductList;
