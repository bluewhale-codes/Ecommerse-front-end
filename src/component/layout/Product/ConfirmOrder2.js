import React , {useEffect,useState} from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useNavigate ,Link } from 'react-router-dom';
import Product from '../HomeMain/Product';
import { Country , State } from 'country-state-city';
import Checkoutsteps from './Checkoutsteps';
import { getProduct } from '../../../actions/productAction';
import { updateShippingInfo,getShippingInfo } from '../../../actions/productAction';
import { Dialog , Button, DialogActions ,DialogContent, DialogTitle} from '@mui/material';
import Loader from '../Loaders/loader';


const ConfirmOrder2 = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  // state variables:--
  const {loading,isUpdated,error} = useSelector((state) => state.shippingInfo)
  const { cartItems ,shippingInfo } = useSelector((state)=>state.cart)
  const { AddressInfo}  = useSelector((state)=> state.shippingAddress)
  const {address,city,state,country,pinCode,phoneNo} = AddressInfo.shippingInfo
  const id = AddressInfo._id
  
  const [open, setOpen] = useState(false)
  const [Address,setAddress] = useState(address);
  const [City,setCity] = useState(city);
  const [Staten,setState] = useState(state);
  const [Countryn,setCountry] = useState(country);
  const [PinCode,setPinCode] = useState(pinCode);
  const [PhoneNo,setPhoneNo] = useState(phoneNo);

  const totalmrp = shippingInfo.toalMRP;
  const coupondiscount = shippingInfo.couponDiscount;
  const shippingPrice = 40
  const totalAmount = shippingInfo.totalAmnt
  const DeliveryDate = shippingInfo.deliveryDate

  const shippAddressInfo = {
    address:Address,city:City,state:Staten,country:Countryn,pinCode:PinCode,phoneNo:PhoneNo
  }

  

 // functions:--
  const proceedToPayment = () => {
          const data = {
            totalmrp,
            coupondiscount,
            shippingPrice,
            totalAmount,
            DeliveryDate
          };
          const shippingData = {
            address,city,state,country,pinCode,phoneNo
          }
          sessionStorage.setItem("orderInfo",JSON.stringify(data));
          sessionStorage.setItem("shippingInfo",JSON.stringify(shippingData));
          navigate('/payment') 
  }
  

  const submitReviewToggle = ()=> {
    open ? setOpen(false) : setOpen(true)
   }
  const updateAdressSubmit = (e) =>{
    e.preventDefault();
      dispatch(updateShippingInfo(id,{shippAddressInfo}))
  }



  useEffect(() => {
      dispatch(getProduct())
      dispatch(getShippingInfo());
      if(isUpdated){
        setOpen(false);
      }
   }, [dispatch,isUpdated])
  
  return (
    <>  
      <Checkoutsteps activeStep={1}/>
      <div className='flex-container-cart'>
        <div className='flex-item-cart item1'>
         <h1>Confirm Order</h1>
         <div className='default-address-container'>
           <div>
           <p>Deliver to:<b>Vishal Shakya , {pinCode}</b></p>
           <p>{address}</p>
           </div>
           <div>
             <button onClick={submitReviewToggle}>CHANGE ADDRESS</button>
             <Dialog aria-labelledby='simple-dialog-title' open={open} >
                      <DialogTitle><div className='dialog-title-reve-shippingInfo'><div className='dialog-warning-icon'></div></div></DialogTitle>
                      <DialogContent className='remove-shippInfo-warning-message'>
                        
                        {/* form content:-start */}
                       

                            <form onSubmit={updateAdressSubmit} className='shippingDetailForm'>
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
                            </form>
                        
                        {/* form content:--end*/}
                       
                        <DialogActions>
                              <button className='cancel-butt' onClick={submitReviewToggle}>Cancel</button>
                        </DialogActions>
                      </DialogContent>
              </Dialog>
           </div>
         </div>

         <div>
            <div className='confirmCartItemsContainer'>
                       {cartItems && (
                           cartItems.map((item)=>(
                              <div key={item.product}>
                                   <img src={item.image} alt='product'/>
                                   <Link to={`/${item.product}`}>
                                      {item.name}
                                   </Link>{" "}
                                   <span>
                                       {item.quantity} x ₹{item.price}={" "}
                                       ₹{item.price * item.quantity}
                                   </span>
                              </div>
                           ))
                       )}
            </div>
         </div>
        
        </div>
        <div className='flex-item-cart item2'>  
                 
            <div>
                 <h3>Delivery</h3>
                 <p className='free-delivery-text'>Expected Delivery:{DeliveryDate}</p>
                 {/* <p className='delivery-date-txt'>Delivery Date: June 24,2023</p> */}
                 
                 <div className='delivery-details'>
                      <div className='subtotal'>
                        <p><b>Toal MRP</b></p>
                        <p className='total-price-tag'><b>₹{shippingInfo.toalMRP}</b></p>
                      </div>
                      <div>
                        <p>Discount on MRP</p>
                        <p id='MRP-discountTag'>-₹{shippingInfo.MRPDiscount}</p>
                      </div>
                      <div>
                        <p>Coupon Discount</p>
                        <p id='coupon-discountTag'>-₹{shippingInfo.couponDiscount}</p>
                      </div>
                      <div>                        
                        <p>Shipping charges</p>
                        <p>₹40</p>
                      </div>
                      <div>                                            
                        <p><b>Total Amount</b></p>
                        <p><b>₹{shippingInfo.totalAmnt}</b></p>
                      </div>
                   
                 </div>
                 <div className='checkout-BTN'>
                 <button onClick={proceedToPayment}  >Procced To payment</button>
                 </div>
                 
            </div>
            {/* {cartItems.length === 0 ? (

                 <div className='subtotal-container'>
                      <h3>View Out latest Products</h3>
                      <div className='cart-new-products'>
                      {products && products.map((product)=> <Product DiscountProducts product={product} />)} 
                      </div>
                      
                 </div>

            ):(

            <div className='subtotal-container'>
                <p className='free-delivery-text'>Your order is eligible for FREE Delivery.</p>
                <p className='sub-total-text'>Subtotal(4 Items):{subTotal}</p>
                <button onClick={checkoutHandler} className='procced-to-buy'>Procced To Buy</button>
            </div>

              )} */}
        </div>
      </div>
    </>
  )
}

export default ConfirmOrder2