import React from 'react'
import {Link , useNavigate ,useParams} from 'react-router-dom'
import './cssFiles/myOrder.css'
import DateObject from "react-date-object";


const MyOrder = ({order}) => {

    const d = new Date(order.createdAt)

    const date = new DateObject({
        year: d.getFullYear(),
        month: d.getMonth()+1,
        day: d.getDate(),
        hour: d.getHours(),
        minute:d.getMinutes(),
        second: d.getSeconds(),
        milisecond: d.getMilliseconds(),
        format: "DD MMMM YYYY",
      });

    const d2 = new Date(order.deliveredAt)

    const date2 = new DateObject({
        year: d2.getFullYear(),
        month: d2.getMonth()+1,
        day: d2.getDate()-1,
        hour: d2.getHours(),
        minute:d2.getMinutes(),
        second: d2.getSeconds(),
        milisecond: d2.getMilliseconds(),
        format: "DD MMMM YYYY",
      });
      
      
      
 
 const navigate = useNavigate();
  const orderDetailHandler = ()=>{
        navigate(`/order/details/${order._id}`)
  }
  return (
     <div onClick={()=>orderDetailHandler()} className='mySingle-order'> 
          <div className='table-header'>
                 <div>
                 <h3>Order Id .<span>{order.orderStatus}</span></h3>
                 <p>Placed On <b>: {date.format()}</b> | Arrive in :<b>{date2.format()}</b></p>
                 </div>
                 <div>
                    <h3>SubTotal</h3>
                    <p>₹{Math.round(order.subTotal)}</p>
                 </div>
          </div>
          <table className='orderTable'>
                <tr>
                    <th className='product-detailHeader'>Product</th>
                    <th>Shipping Method</th>
                    <th>Price per Unit</th>
                    <th>Tshirt</th>
                    <th>QTY</th>
                </tr>
                {order.orderItems && order.orderItems.map((item)=> (

                <tr>
                    <td className='product-detail'>
                        <div>
                            <div className='product-img'>
                                <img src={item.image}/>
                            </div>
                            <p>{item.name}</p>
                        </div>
                    </td>
                    <td><p>Pick Up</p></td>
                    <td><p>{item.price}</p></td>
                    <td><p>abv</p></td>
                    <td><p>{item.quantity}</p></td>
                </tr>
                ))}
               
                
                
                
            </table>
     </div>
  )
}

export default MyOrder