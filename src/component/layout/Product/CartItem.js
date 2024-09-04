import React from 'react'
import './cartItem.css'
import { Button, message, Space } from 'antd';
import { useDispatch } from 'react-redux';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { addItemTocart , removeItemFromCart } from '../../../actions/cartAction';
import DeleteIcon from '@mui/icons-material/Delete';
const CartItem = ({item,showAlert}) => {
  
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const addMore =(id,quantity,stock) =>{
    const newQty = quantity + 1;
    if(stock <= quantity){
      return;
    }
    dispatch(addItemTocart(id,newQty))
    showAlert('Added to cart' , 'success')
  }

  const deleteFromCart =(id) =>{
    dispatch(removeItemFromCart(id))
    showAlert('Delte from cart' , 'error')
    
    
  }
  const removeFromCart =(id,quantity) =>{
    const newQty = quantity - 1;
    if(quantity <= 1){
      return;
    }
    dispatch(addItemTocart(id,newQty))
    showAlert('Remove from cart' , 'info')
    
  }

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  return (
    <>
       {contextHolder}
      
       
    
       <div className='cart-item'>
          <div className='cart-product-image'>
              <img src={item.image}/>
              
          </div>
          <div className='cart-product-desc'>

                <div className='productTitle'>
                    <p>{item.name}</p>
                    <p>₹{item.discountPrice*item.quantity}</p>
                    
                </div>
                <div className='productPriceStock'>
                   <p className='product-stock'> ₹{item.discountPrice}<span>₹{item.price }</span> | <b className={item.Stock<1 ? "redColor":"greenColor"}>
                       {item.Stock<1 ? "Out Of Stock":"In Stock"}
                    </b></p>
                    {item.percentageOff?<span id='percentageOffTag'>Extra {item.percentageOff}% OFF</span>:""}
                </div>
                <div>
                      <div className='add-to-cart-btn'>
                         <span onClick={()=>addMore(item.product,item.quantity,item.Stock)} >+</span>
                         <span>{item.quantity}</span>
                         <span onClick={()=>removeFromCart(item.product,item.quantity)}>-</span>
                      </div>
                      <div className='remove-product'>
                           <DeleteIcon onClick={()=>deleteFromCart(item.product)}/>
                      </div>
                </div>
                {/* <ul>
                  <li><p className='product-title'>{item.name}(QTY:{item.quantity})</p></li>
                  <li><p  className='product-price'><b><sub><CurrencyRupeeIcon/></sub> {item.price}</b></p></li>
                  <li><p  className='product-stock'><b className={item.Stock<1 ? "redColor":"greenColor"}>
                       {item.Stock<1 ? "Out Of Stock":"In Stock"}
                    </b></p></li>
                  <li>
                     <div className='product-button'>
                        <button onClick={()=>addMore(item.product,item.quantity,item.Stock)} className='add-more-btn'>+</button>
                        <button onClick={()=>removeFromCart(item.product,item.quantity)} className='remove-cart'>-</button>    
                        <button onClick={()=>deleteFromCart(item.product)} className='remove-cart'>Delete</button>    
                       
                        <span>Total:  <b>{item.price*item.quantity}</b></span>
                        
                     </div>
                  </li>
                </ul> */}
          </div>
       </div>
    </>
  )
} 

export default CartItem