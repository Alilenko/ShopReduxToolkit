import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeTotalPrice, changeQtty, deleteFromBasket} from '../productItem/ProductItemSlice'

const BasketItem = ({item}) => {
    
    const [qtty, setQtty] = useState(1);
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
      setSum(sum => item.price * qtty ) 
      dispatch(changeTotalPrice(item.price))
      
    }, [])

    const inc = () => {
        setQtty(qtty => qtty + 1)
        setSum(sum => sum + item.price)

        dispatch(changeTotalPrice(item.price))
        dispatch(changeQtty(1))
    }
    const dec = (item) => {
        if(qtty === 1){        
            onDelete(item.id)
        } else{
        setQtty(qtty => qtty - 1)
        setSum(sum => sum - item.price)
        dispatch(changeTotalPrice(-item.price))
        dispatch(changeQtty(-1))
    }}
    const onDelete = (id) => {
        dispatch(deleteFromBasket(id))
        dispatch(changeTotalPrice(-(item.price*qtty)))
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
                <div className="input-number">{qtty}</div>
                <div className="button plus">
                    <button type="button" onClick={inc} className="btn btn-primary btn-number" >
                        <i className="ti-plus"></i>
                    </button>
                </div>
            </div>
       
        </td>
        <td className="total-amount" data-title="Total">
            
            <span>${sum}</span></td>
        <td onClick={()=>onDelete(item.id)} className="action" data-title="Remove"><div ><i className="ti-trash remove-icon"></i></div></td>
    </tr>
        )
    
}

export default BasketItem;
