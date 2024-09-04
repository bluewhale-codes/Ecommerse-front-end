import React , {useEffect,useState} from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Product from '../HomeMain/Product';
import { Country , State } from 'country-state-city';
import { updateShippingInfo,getShippingInfo,getCouponsInfo, getProduct  } from '../../../actions/productAction';
import { Dialog , Button, DialogActions ,DialogContent, DialogTitle} from '@mui/material';
import Loader from '../Loaders/loader';
import "./cssFiles/coupon.css"
import { saveCouponInfo } from '../../../actions/cartAction';
import CouponCard from './couponCard';
import SellIcon from '@mui/icons-material/Sell';
import { saveShippingInfo } from '../../../actions/cartAction';
import DateObject from "react-date-object";


const Cart = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false)
  const [openCoupon, setOpenCoupon] = useState(false)
  const [couponCode,setCouponCode]  = useState(0);
  const [Address,setAddress] = useState("");
  const [City,setCity] = useState("");
  const [Staten,setState] = useState("");
  const [Countryn,setCountry] = useState("");
  const [PinCode,setPinCode] = useState("");
  const [PhoneNo,setPhoneNo] = useState("");

  // state variables
  const {Coupons} = useSelector((state)=>state.couponsInfo)
  const { cartItems , couponInfo } = useSelector((state)=>state.cart)
  const {isUpdated,error} = useSelector((state) => state.shippingInfo)
  const {products,productsCount} = useSelector((state)=>state.products)
  const { AddressInfo , loading }  = useSelector((state)=> state.shippingAddress)
  const shippAddressInfo = {
    address:Address,city:City,state:Staten,country:Countryn,pinCode:PinCode,phoneNo:PhoneNo
  }
  // state variables :end

  let toalMRP = cartItems.reduce(
    (acc,item) => acc + item.quantity * item.price,0
  )
  let DiscountPrice = cartItems.reduce(
    (acc,item) => acc + item.quantity * item.discountPrice,0
  )
  let MRPDiscount = toalMRP-DiscountPrice
  let Cvalue=0;
  if(couponInfo.couponCode){
     Cvalue = couponInfo.couponCode
  }
  let couponDiscount = (DiscountPrice/100)*Cvalue

  let totalAmnt = couponDiscount > 0 ? DiscountPrice-couponDiscount:DiscountPrice

  const d = new Date();
  
   const date = new DateObject({
         year: d.getFullYear(),
         month: d.getMonth()+1,
         day: d.getDate()+4,
         hour: d.getHours(),
         minute:d.getMinutes(),
         second: d.getSeconds(),
         milisecond: d.getMilliseconds(),
         format: "DD MMMM YYYY",
   });

   let deliveryDate = date.format()
  

   useEffect(() => {
    dispatch(getProduct())
    dispatch(getShippingInfo());
    dispatch(getCouponsInfo())
    if(isUpdated){
      setOpen(false);
    }
    if(AddressInfo){
      const {address,city,state,country,pinCode,phoneNo} = AddressInfo.shippingInfo;
      setAddress(address);
      setCity(city);
      setState(state);
      setCountry(country);
      setPinCode(pinCode);
      setPhoneNo(phoneNo);
    }
 }, [dispatch,isUpdated])
 

  
  


  // cart functions:--
  const checkoutHandler = ()=>{
    dispatch(saveShippingInfo({toalMRP,MRPDiscount,couponDiscount,totalAmnt,deliveryDate}))
    navigate('/login?redirect=shipping')
  }
  const submitReviewToggle = ()=> {
    open ? setOpen(false) : setOpen(true)
  }
  const submitCouponToggle = ()=> {
    openCoupon ? setOpenCoupon(false) : setOpenCoupon(true)
  }
  const updateAdressSubmit = (e) =>{
    e.preventDefault();
      dispatch(updateShippingInfo({shippAddressInfo}))
  }
  const contineHandler = (e) =>{
   
    navigate('/products')
  }

  const couponApplyhandler = () =>{
    dispatch(saveCouponInfo({couponCode}))
    openCoupon ? setOpenCoupon(false) : setOpenCoupon(true)
    
  }


  
  
  return (
    <>  
     {loading ? <Loader/> :
      <div className='flex-container-cart'>
        <div className='flex-item-cart item1'>
         <h1>Shooping Cart</h1>
         
         <div className='default-address-container'>

          {AddressInfo === null ? (<div>
           <p>No address added Yet</p>
           <p></p>
           </div>) :  (<div>
           <p>Deliver to:<b>Vishal Shakya , {PinCode}</b></p>
           <p>{Address}</p>
           </div> ) }
           

           
           <div className='address-dialog-box'>
             {AddressInfo===null? <button>ADD ADDRESS</button>:
             <button onClick={submitReviewToggle}>CHANGE ADDRESS</button>}
              <Dialog aria-labelledby='simple-dialog-title' open={open} >
                      <DialogTitle><div className='dialog-title-reve-shippingInfo'><div className='dialog-warning-icon'></div></div></DialogTitle>
                      <DialogContent className='remove-shippInfo-warning-message'>
                        
                        {/* form content:-start */}
                       

                            {AddressInfo && <form onSubmit={updateAdressSubmit} className='shippingDetailForm'>
                                  <h1 className='heading'>Update Your Address</h1>
                                  <div>
                                      <div className='countryInput-wrap'>
                                          <select required value={Countryn} onChange={(e)=>setCountry(e.target.value)}>
                                              <option value="">Country</option>
                                              {Country &&  Country.getAllCountries().map((item)=>(
                                                  <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                                              ))}
                                          </select>
                                      </div>
                                  </div>
                                  
                                  <div className='mobileNumberInput-wrap'>
                                      <input required type='number' value={PhoneNo} onChange={(e)=> setPhoneNo(e.target.value)} placeholder='Mobile Number'/>
                                      <p>My be used to assist delivery</p>
                                  </div>
                                  <div className='PincodeInput-wrap'>
                                      <input required type='number' value={PinCode} onChange={(e)=> setPinCode(e.target.value)}  placeholder='Pincode'/>
                                  </div>
                                  <div>
                                      <input required type='text' placeholder='Flat,HoseNo.,building'/>
                                  </div>
                                  <div>
                                      <input required type='text' value={Address} onChange={(e)=> setAddress(e.target.value)} placeholder='Area, Street, Sector, Village'/>
                                  </div>
                                  <div>
                                      <input required type='text' placeholder='Landmark'/>
                                  </div>
                                  <div className='state-city-input'>

                                      <div>
                                          <input required  value={City} onChange={(e)=>setCity(e.target.value)}  type='text' placeholder='Town/City'/>
                                      </div>
                                      
                                      {Country ? (
                                          <div>
                                            <select required value={Staten} onChange={(e)=>setState(e.target.value)}>
                                              <option value="">State</option>
                                              {State &&  State.getStatesOfCountry(Countryn).map((item)=>(
                                                  <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                                              ))}
                                            </select>
                                          </div>
                                      ):<div><input required type='text' placeholder='State'/></div>}
                                  </div>
                                  

                                  <button type='submit'>
                                      Update
                                  </button>
                            </form>}
                        
                        {/* form content:--end*/}
                       
                        <DialogActions>
                              <button className='cancel-butt' onClick={submitReviewToggle}>Cancel</button>
                        </DialogActions>
                      </DialogContent>
              </Dialog>
           </div>


         </div>
          {cartItems.length===0?(
            <div className='empty-cart-box'>
                <p>Your cart is Empty</p>
                <div className='icon'>
                <img src='https://img.freepik.com/premium-vector/premium-download-illustration-shopping_362714-757.jpg?w=740'/>
                </div>
            </div>
          ):((cartItems.map((item)=>(
            
            <CartItem showAlert={props.showAlert} key={item.name} item={item}/>)
          )))}
            
        </div>
        <div className='flex-item-cart item2'>  
                
           {cartItems.length!==0 ? 
            <div>
                 <h3>Delivery</h3>
                 <p className='free-delivery-text'>Your order is eligible for FREE Delivery.</p>
                 {/* <p className='delivery-date-txt'>Delivery Date: June 24,2023</p> */}
                 <div className='appy-promo-input'>
                   <div>
                       <div><SellIcon/></div>
                       <div className='coupon-tag'>
                         <p>1 coupon applied</p>     
                         <p>You saved additionaly ₹{couponDiscount}</p>     
                       </div>
                   </div>
                   <Dialog aria-labelledby='simple-dialog-title' open={openCoupon} onClose={submitCouponToggle}>
                              <DialogTitle>APPLY COUPON</DialogTitle>
                              <DialogContent className='submitDialog'>
                                <div className='coupon-container'>
                                     <div className='header-code-input'>
                                        <div>
                                            <input placeholder='Enter Coupon code' type='text'/>
                                            <p>CHECK</p>
                                        </div>
                                        <span>Error message</span>
                                     </div>
                                     <div className='coupon-card-wrapper'>
                                     {Coupons && Coupons.map((coupon)=> <div className='coupon-card'>
                                              <div id='card-checkbox'> 
                                                  <input onChange={()=>setCouponCode(`${coupon.couponValue}`)}  type='checkbox'/>
                                              </div>
                                              <div className='coupon-card-detail'>
                                                  <span>{coupon.name}</span>
                                                  <p><b>Save ₹{(DiscountPrice/100)*coupon.couponValue}</b></p>
                                                  <p>{coupon.couponDescription}</p>
                                                  
                                                  <p>{coupon.couponExpireDate}</p>
                                              </div>
                                      </div> )} 
                                     
                                     </div>
                                     <div className='card-footer'>
                                        <div className='footer-left'>
                                             <p>Maximum saving</p>
                                             <p>₹98</p>
                                        </div>
                                        <div className='footer-right'>
                                            <button onClick={()=>couponApplyhandler()}>APPLY</button>
                                        </div>
                                     </div>
                                   
                                </div>
                              
                              </DialogContent>
                    </Dialog>
                   <button onClick={submitCouponToggle}>Appy</button>
                 </div>
                 <div className='delivery-details'>
                    <div className='subtotal'>
                       <p><b>Total MRP</b></p>
                       <p className='total-price-tag'><b>₹{toalMRP}</b></p>
                    </div>
                    <div>
                       <p>Discount on MRP</p>
                       <p id='MRP-discountTag'>-₹{MRPDiscount}</p>
                    </div>
                    <div>
                          
                       <p>Coupon Discount</p>
                       <p id='coupon-discountTag'>-₹{couponDiscount}</p>
                    </div>
                    <div>
                          
                       <p>%OFF</p>
                       <p id='coupon-discountTag'>-₹{couponDiscount}</p>
                    </div>
                    <div>
                          
                       <p>Shipping charges</p>
                       <p>₹40</p>
                    </div>

                    <div>
                          
                       <p><b>Total Amount</b></p>
                       <p><b>₹{totalAmnt}</b></p>
                    </div>
                    
                   
                 </div>
                 <div className='checkout-BTN'>
                 <button onClick={checkoutHandler}>Procced to Checkout</button>
                 </div>
                 <div className='continue-BTN'>
                 <button onClick={contineHandler}>Continue shipping</button>
                 </div>
            </div> : 
            <div className='subtotal-container'>
                <h3>View Out latest Products</h3>
                <div className='cart-new-products'>
                {products && products.map((product)=> <Product DiscountProducts product={product} />)} 
                </div>
           </div>
            }
           
        </div>
      </div>
}
    </>
  )
}

export default Cart