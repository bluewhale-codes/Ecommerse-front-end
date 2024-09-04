import React ,{useState} from 'react'
import { useEffect } from 'react';
import Loader from '../Loaders/loader';
import '../../User/UserFilesCss/shippingInfo.css'
import {Link , useNavigate } from 'react-router-dom';
import { useSelector ,useDispatch } from 'react-redux';
import { getShippingInfo } from '../../../actions/productAction';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeleteIcon from '@mui/icons-material/Delete';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import FlagIcon from '@mui/icons-material/Flag';
import CallIcon from '@mui/icons-material/Call';
import { removeShippInfo } from '../../../actions/productAction';
import { addShippingInfo } from '../../../actions/productAction';
import { Country , State } from 'country-state-city';
import Checkoutsteps from './Checkoutsteps';

const Shipping2 = () => {
  
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { AddressInfo , loading }  = useSelector((state)=> state.shippingAddress)
   const { shippingInfo } = useSelector((state)=>state.cart)
   const { isDeleted ,isAdded,error}  = useSelector((state)=> state.shippingInfo)
   
   
   // Add Form start:-
   const [open, setOpen] = useState(false) 
   const [address,setAddress] = useState("");
   const [city,setCity] = useState("");
   const [state,setState] = useState("");
   const [country,setCountry] = useState("");
   const [pinCode,setPinCode] = useState("");
   const [phoneNo,setPhoneNo] = useState("");
   const { cartItems } = useSelector((state)=>state.cart)


   const shippAddressInfo = {
    address,city,state,country,pinCode,phoneNo
   }

   

   
   // Add Form end

   useEffect(() => {
      if(isDeleted){
        navigate('/ShippingInfo')
      }
      if(isAdded){
        navigate('/order/confirm')
     }
      dispatch(getShippingInfo());
   }, [dispatch,isAdded])


   // functions:--
   const addAdressSubmit = (e) =>{
    e.preventDefault();
      dispatch(addShippingInfo({shippAddressInfo}))   
    }
    const proceddhandler = ()=>{
      navigate('/order/confirm')
    }
   
  return (
    <>
      {loading ? <Loader/> : (
        <div className='ShippingAddress-Container'>
        <Checkoutsteps activeStep={0}/>
         

          <div className='ShippingAddress-wrapper'>
              
               {AddressInfo === null ?  <div>


                <form onSubmit={addAdressSubmit} className='shippingDetailForm'>
                        <h1 className='heading'>Add a new address</h1>
                        <div>
                            <div className='countryInput-wrap'>
                                <select required value={country} onChange={(e)=>setCountry(e.target.value)}>
                                    <option value="">Country</option>
                                    {Country &&  Country.getAllCountries().map((item)=>(
                                        <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        
                        <div className='mobileNumberInput-wrap'>
                            <input required type='number' value={phoneNo} onChange={(e)=> setPhoneNo(e.target.value)} placeholder='Mobile Number'/>
                            <p>My be used to assist delivery</p>
                        </div>
                        <div className='PincodeInput-wrap'>
                            <input required type='number' value={pinCode} onChange={(e)=> setPinCode(e.target.value)}  placeholder='Pincode'/>
                        </div>
                        <div>
                            <input required type='text' placeholder='Flat,HoseNo.,building'/>
                        </div>
                        <div>
                            <input required type='text' value={address} onChange={(e)=> setAddress(e.target.value)} placeholder='Area, Street, Sector, Village'/>
                        </div>
                        <div>
                            <input required type='text' placeholder='Landmark'/>
                        </div>
                        <div className='state-city-input'>

                            <div>
                                <input required  value={city} onChange={(e)=>setCity(e.target.value)}  type='text' placeholder='Town/City'/>
                            </div>
                            
                            {country ? (
                                <div>
                                  <select required value={state} onChange={(e)=>setState(e.target.value)}>
                                    <option value="">State</option>
                                    {State &&  State.getStatesOfCountry(country).map((item)=>(
                                        <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                                    ))}
                                  </select>
                                </div>
                            ):<div><input required type='text' placeholder='State'/></div>}
                        </div>
                        <div>
                          <input required type="checkbox"/><span>Make this my Billing address</span>
                        </div>

                        <button type='submit'>
                            Add addreess
                        </button>
                </form>









               </div>:(
                (
                  <div className='shipping-main-container'>
                      
                      <div>
                            <div className='shipping-address'>
                                  <div className='addresImg'>
                                    <img src='https://img.freepik.com/free-vector/landing-page-template-design-business-websides_52683-22972.jpg?w=1380&t=st=1693924908~exp=1693925508~hmac=a54c90126059905b221d8e66b5345e85e1dc67d9ef694c12c05fc47c4ccc275b'/>
                                  </div>

                                <div className='address-detail'>
                                    <h3 className='userName'>Vishal shakya</h3>
                                    <div className='address'>
                                      <p><LocalShippingIcon/> Address:</p>
                                      <p className='full-address'>{AddressInfo && AddressInfo.shippingInfo.address}</p>
                                      </div>
                                    <div className='state-city-pincode'>
                                      <EmojiTransportationIcon/>
                                      <p><span className='cityTag'>City</span> {AddressInfo && AddressInfo.shippingInfo.city}</p> 
                                      <p> <span className='stateTag'>State</span> {AddressInfo && AddressInfo.shippingInfo.state}</p>
                                      <p> <span className='stateTag'>PinCode</span> {AddressInfo && AddressInfo.shippingInfo.pinCode}</p>
                                    </div>
                                    <div className='country'><FlagIcon/><p>{AddressInfo && AddressInfo.shippingInfo.country}</p></div>
                                    <div className='Phone NO.'><CallIcon/><p>{AddressInfo && AddressInfo.shippingInfo.phoneNo}</p></div>
                                    <p></p>
                                </div> 
                                <Link to='/order/confirm'>Edit</Link>
                                
                            </div>
                      </div>
                      <div>
                          
                              <div>
                                    <h3>Delivery</h3>
                                    <p className='free-delivery-text'>Expected Delivery :{shippingInfo.deliveryDate}</p>
                                   
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
                                    <button onClick={proceddhandler}>procced to checkout</button>
                                    </div>
                                   
                              </div>
                      </div>
                  </div>
               
               )
               )}
              

            
          </div>
     </div>
      )}
    </>
     
  )
}

export default Shipping2