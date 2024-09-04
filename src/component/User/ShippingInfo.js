import React ,{useState} from 'react'
import { useEffect } from 'react';
import Loader from '../layout/Loaders/loader'
import './UserFilesCss/shippingInfo.css'
import {Link , useNavigate } from 'react-router-dom';
import { useSelector ,useDispatch } from 'react-redux';
import { getShippingInfo } from '../../actions/productAction';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeleteIcon from '@mui/icons-material/Delete';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import FlagIcon from '@mui/icons-material/Flag';
import CallIcon from '@mui/icons-material/Call';
import { Dialog , Button, DialogActions ,DialogContent, DialogTitle} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { removeShippInfo } from '../../actions/productAction';



const ShippingInfo = (props) => {
  
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { AddressInfo , loading }  = useSelector((state)=> state.shippingAddress)
   const { isDeleted}  = useSelector((state)=> state.shippingInfo)
   const [open, setOpen] = useState(false)

   useEffect(() => {
      if(isDeleted){
        navigate('/ShippingInfo')
      }
      dispatch(getShippingInfo());
   }, [dispatch,isDeleted])

   const  RemoveShippAddress = (id)=>{
           dispatch(removeShippInfo(id))
           props.showAlert('Address Removed','success')
           setOpen(false)
   }
   const submitReviewToggle = ()=> {
    open ? setOpen(false) : setOpen(true)
   }
  return (
    <>
      {loading ? <Loader/> : (
      <div className='ShippingAddress-Container'>
          <h1>Your Shipping Address <LocalShippingIcon/></h1>

          <div className='ShippingAddress-wrapper'>
              
               {AddressInfo === null ?  <div className='Add-address'>
                     <h2>No address Added</h2>
                      <div className='no-addresImg'>
                          <img src='https://cdn.dribbble.com/users/1097272/screenshots/10725790/media/278de8c77f83f73a65ebd80f982b7f00.png' alt='no-AdddressImg'/>
                      </div>
                      <Link to='/add/ShippingInfo'>Add Address</Link>
               </div>:(
                (
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
                  <Link to={`/update/ShippingInfo/${AddressInfo && AddressInfo._id}`}>Update</Link>
                  <DeleteIcon onClick={submitReviewToggle}/>
                  <Dialog aria-labelledby='simple-dialog-title' open={open} onClose={submitReviewToggle}>
                      <DialogTitle><div className='dialog-title-reve-shippingInfo'><div className='dialog-warning-icon'><WarningIcon/></div><p>Remove Shipping address</p></div></DialogTitle>
                      <DialogContent className='remove-shippInfo-warning-message'>
                        
                       <p>This action will Remove Your Shipping information from Data</p>
                        <DialogActions>
                              <button className='cancel-butt' onClick={submitReviewToggle}>Cancel</button>
                              <button className='remove-butt' onClick={()=>RemoveShippAddress(AddressInfo && AddressInfo._id)} >Remove</button>
                        </DialogActions>
                      </DialogContent>
                  </Dialog>
               </div>
               
               )
               )}
              

            
          </div>
     </div>
      )}
    </>
  )
}

export default ShippingInfo