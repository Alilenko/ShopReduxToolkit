import React from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {changeTotalPrice, changeQtty, deleteFromBasket, addToBasket, deleteQttyFromBasket} from '../productItem/ProductItemSlice'

const BasketItem = ({item}) => {
    const {basket}  = useSelector(state => state.goods)
    const dispatch = useDispatch();
    
    const findGoods = basket.filter(el => el.id === item.id)
    const findQtty = findGoods.map(item => item.qtty)

    const inc = (item) => {
        dispatch(changeTotalPrice(item.price))
        dispatch(changeQtty(1))
        dispatch(addToBasket(item.id))
    }
    const dec = (item) => {
        if(item.qtty == [1]){        
            onDelete(item.id)
        } else{
        dispatch(changeTotalPrice(-item.price))
        dispatch(changeQtty(-1))
        dispatch(deleteQttyFromBasket(item.id))
    }}
    const onDelete = (id) => {
        dispatch(deleteFromBasket(id))
        dispatch(changeTotalPrice(-(item.price*item.qtty)))
        dispatch(changeQtty(-item.qtty))
    }


    return(
        <tr key={item.id}>
        <td className="image" data-title="No"><img src={item.img} alt={item.title}/></td>
        <td className="product-des" data-title="Description">
            <p className="product-name"><a href="#">{item.title}</a></p>
            <p className="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
        </td>
        <td className="price" data-title="Price"><span>${item.price} </span></td>
        <td className="qty" data-title="Qty">
            <div className="input-group">
                <div className="button minus">
                    <button type="button" onClick={()=> dec(item)} className="btn btn-primary btn-number"  >
                        <i className="ti-minus"></i>
                    </button>
                </div>
                <div className="input-number">{findQtty}</div>
                <div className="button plus">
                    <button type="button" onClick={() => inc(item)} className="btn btn-primary btn-number" >
                        <i className="ti-plus"></i>
                    </button>
                </div>
            </div>
       
        </td>
        <td className="total-amount" data-title="Total">
            
            <span>${item.price * findQtty}</span></td>
        <td onClick={()=>onDelete(item.id)} className="action" data-title="Remove"><div ><i className="ti-trash remove-icon"></i></div></td>
    </tr>
        )
    
}

export default BasketItem;
