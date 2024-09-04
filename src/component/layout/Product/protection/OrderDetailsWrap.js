import React , {useEffect}  from 'react'
import OrderDetails from '../OrderDetails';
import { useSelector , useDispatch} from 'react-redux';
import { getOrderDetails , clearErrors } from '../../../../actions/orderAction'; 
import {useParams} from 'react-router-dom'
import Loader from '../../Loaders/loader';

const OrderDetailsWrap = () => {
  const {order,loading,ready}  = useSelector((state)=>state.orderDetails);
  const {id} = useParams();
  console.log(id)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderDetails(id))
  }, [dispatch])
  return (
     <>
       {ready || loading===false ? <OrderDetails order={order}/>:<Loader/> }
     </>
  )
}

export default OrderDetailsWrap