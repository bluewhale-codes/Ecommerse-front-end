 import React,{useState , Fragment} from 'react'
 import { useEffect } from 'react';
 import Loader from '../layout/Loaders/loader'
 import './UserFilesCss/shippingInfo.css'
 import { useNavigate } from 'react-router-dom';
 import { useSelector ,useDispatch } from 'react-redux';
 import { Country , State } from 'country-state-city';
 import { addShippingInfo } from '../../actions/productAction';

const UpdateShippInfo = (props) => {

    const {loading,isAdded,error} = useSelector((state) => state.shippingInfo)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address,setAddress] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
  const [country,setCountry] = useState("");
  const [pinCode,setPinCode] = useState("");
  const [phoneNo,setPhoneNo] = useState("");

  const shippAddressInfo = {
   address,city,state,country,pinCode,phoneNo
  }
  

  const addAdressSubmit = (e) =>{
   e.preventDefault();
   
   dispatch(addShippingInfo({shippAddressInfo}))
       
    }

   useEffect(() => {
      if(isAdded){
         props.showAlert('Added succussfully','success')
         navigate('/ShippingInfo')
      }
   }, [isAdded])

   
  return (
    <>
    {loading ? <Loader/> : (
      <div className='shippingDetailWrapper'>

      <div className='shippingDetailContainer'>
                
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
      </div>

    </div>
    )}
    </>
  )
}

export default UpdateShippInfo