import React,{useState , Fragment} from 'react'
import { useSelector ,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingInfo } from '../../../actions/cartAction';
import { Country , State } from 'country-state-city';
import './Shipping.css';
import Checkoutsteps from './Checkoutsteps';
const Shipping = () => {
  const dispatch = useDispatch();
  const {shippingInfo} = useSelector((state)=>state.cart);
  const [address,setAddress] = useState(shippingInfo.address);
  const [city,setCity] = useState(shippingInfo.city);
  const [state,setState] = useState(shippingInfo.state);
  const [country,setCountry] = useState(shippingInfo.country);
  const [pinCode,setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo,setPhoneNo] = useState(shippingInfo.phoneNo);
  const navigate = useNavigate();
  const shippingSubmit = (e) =>{
    e.preventDefault();
    if(phoneNo.length < 10 || phoneNo.length<10){
      alert('Phone no. should be less then 10 digit');
      return;
    }
    dispatch(saveShippingInfo({address,city,state,country,pinCode,phoneNo}))
      navigate('/order/confirm')
  }


  return(
    <Fragment>
           <Checkoutsteps activeStep={0}/>
           <div className='shippingContainer'>
              <div className='shippingBox'>
                <h2 className='shippingHeading'>Shipping Details</h2>
                <form className='shippingForm' encType='multipart/form-data' onSubmit={shippingSubmit} >
                    <div>
                       <input type='text' placeholder='Address' required value={address} onChange={(e)=> setAddress(e.target.value)}/>
                    </div>
                    <div>
                       <input type='text' placeholder='City' required value={city} onChange={(e)=> setCity(e.target.value)}/>
                    </div>
                    <div>
                       <input type='number' placeholder='Pin Code' required value={pinCode} onChange={(e)=> setPinCode(e.target.value)}/>
                    </div>
                    <div>
                       <input type='number' size="10" placeholder='Phone Number' required value={phoneNo} onChange={(e)=> setPhoneNo(e.target.value)}/>
                    </div>
                    <div>
                        <select required value={country} onChange={(e)=>setCountry(e.target.value)}>
                            <option value="">Country</option>
                            {Country &&  Country.getAllCountries().map((item)=>(
                                <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    {country && (
                        <div>
                          <select required value={state} onChange={(e)=>setState(e.target.value)}>
                            <option value="">State</option>
                            {State &&  State.getStatesOfCountry(country).map((item)=>(
                                <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                            ))}
                          </select>
                        </div>
                    )}
                    <input type='submit' value='Continue' className='shippingBtn' disabled={state?false:true}/>
                </form>
              </div>
           </div>
    </Fragment>
  )
  
}

export default Shipping