import React,{useState , Fragment} from 'react'
import { useEffect } from 'react';
import Loader from '../layout/Loaders/loader'
import './UserFilesCss/shippingInfo.css'
import { useNavigate , useParams } from 'react-router-dom';
import { useSelector ,useDispatch } from 'react-redux';
import { Country , State } from 'country-state-city';
import { updateShippingInfo , getShippingInfo } from '../../actions/productAction';
import { UPDATE_SHIPPING_INFO_RESET } from '../../constants/productConstatns';


const AddShippInfo = (props) => {
  const {id} = useParams();
  const {loading,isUpdated,error} = useSelector((state) => state.shippingInfo)
  const { AddressInfo}  = useSelector((state)=> state.shippingAddress)
  const {address,city,state,country,pinCode,phoneNo} = AddressInfo.shippingInfo
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Address,setAddress] = useState(address);
  const [City,setCity] = useState(city);
  const [Staten,setState] = useState(state);
  const [Countryn,setCountry] = useState(country);
  const [PinCode,setPinCode] = useState(pinCode);
  const [PhoneNo,setPhoneNo] = useState(phoneNo);


  const shippAddressInfo = {
   address:Address,city:City,state:Staten,country:Countryn,pinCode:PinCode,phoneNo:PhoneNo
  }

  const updateAdressSubmit = (e) =>{
   e.preventDefault();
   
     dispatch(updateShippingInfo(id,{shippAddressInfo}))
       
    }

   useEffect(() => {
       dispatch(getShippingInfo())
      if(isUpdated){
         navigate('/ShippingInfo')
         props.showAlert('Address Updated successfully','success')
         dispatch({type:UPDATE_SHIPPING_INFO_RESET})
      }
   }, [dispatch,isUpdated])

   
  return (
    <>
    {loading ? <Loader/> : (
      <div className='shippingDetailWrapper'>

      <div className='shippingDetailContainer'>
                
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
      </div>

    </div>
    )}
    </>
  )
}

export default AddShippInfo