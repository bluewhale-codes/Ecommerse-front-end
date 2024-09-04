import React from 'react'
import {Link , useNavigate ,useParams} from 'react-router-dom'
import DateObject from "react-date-object";
import {Rating}  from '@mui/material';

import './adminOrder.css'

const AdminOrder = () => {

    // const d = new Date(order.createdAt)

    // const date = new DateObject({
    //     year: d.getFullYear(),
    //     month: d.getMonth()+1,
    //     day: d.getDate(),
    //     hour: d.getHours(),
    //     minute:d.getMinutes(),
    //     second: d.getSeconds(),
    //     milisecond: d.getMilliseconds(),
    //     format: "DD MMMM YYYY",
    //   });

    // const d2 = new Date(order.deliveredAt)

    // const date2 = new DateObject({
    //     year: d2.getFullYear(),
    //     month: d2.getMonth()+1,
    //     day: d2.getDate()-1,
    //     hour: d2.getHours(),
    //     minute:d2.getMinutes(),
    //     second: d2.getSeconds(),
    //     milisecond: d2.getMilliseconds(),
    //     format: "DD MMMM YYYY",
    //   });
      
      
      
 
 const navigate = useNavigate();
  const orderDetailHandler = ()=>{
        // navigate(`/order/details/${order._id}`)
  }
  return (
     <div onClick={()=>orderDetailHandler()} className='admin-mySingle-order'> 
          
          <table className='adminorderTable'>
                <tr className='table-header'>
                    <th className='product-detailHeader'>Product Detail</th>
                    <th>Item Price</th>
                    <th>Quantity</th>
                    <th>Rating</th>
                    <th>TotalAmount</th>
                </tr>
                {/* {order.orderItems && order.orderItems.map((item)=> ( */}

                <tr>
                    <td className='product-detail'>
                        <div>
                            <div className='product-img'>
                                {/* <img src={item.image}/> */}
                                <img src='https://res.cloudinary.com/dycjjaxsk/image/upload/v1694703715/products/c8twtwxtccaigo5ihxks.jpg'/>
                            </div>
                            {/* <p>{item.name}</p> */}
                            <p>Philips trimmer</p>
                        </div>
                    </td>
                    <td><p>₹750</p></td>
                    {/* <td><p>{item.price}</p></td> */}
                    <td><p>1</p></td>
                    <td><p><Rating  value={3}size='small'/></p></td>
                    <td><p>₹200</p></td>
                    {/* <td><p>{item.quantity}</p></td> */}
                </tr>            
                
                
                {/* ))} */}
               
                
                
                
            </table>
            <div className='order-admin-table-footer'>
               <div className='footer-contaner'>
                  <div>
                     <p><b>Sub Total :</b></p>
                     <p>₹546</p>
                  </div>
                  <div>
                      <p><b>Discount (VELZON15) :</b></p>
                      <p>₹355</p>
                  </div>
                  <div>
                      <p><b>Shipping Charge :</b></p>
                      <p>₹298</p>
                  </div>
                  <div className='total-container'>
                      <p><b>Total</b></p>
                      <p>₹298</p>
                  </div>

                  
               </div>
            </div>
     </div>
  )
}



export default AdminOrder