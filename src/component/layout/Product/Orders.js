import React ,{useEffect,useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector , useDispatch} from 'react-redux';
import { myOrders , clearErrors } from '../../../actions/orderAction';
import Loader from '../Loaders/loader';
import {Link , useNavigate} from 'react-router-dom'
import { Typography } from '@material-ui/core';
import LaunchIcon from '@mui/icons-material/Launch';
import { Skeleton } from 'antd';
import './order.css'
import './payment.css' 
import { getProduct } from '../../../actions/productAction';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Empty from './Empty';
import MyOrder from './MyOrder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SimilaProductCard from '../HomeMain/TopBrandProduct/SimilaProductCard';
import SmallLoader from '../Loaders/SmallLoader';
import ImageLoader from '../Loaders/ImageLoader';

const Orders = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading,error,orders} = useSelector((state)=>state.myOrders)
    const {user} = useSelector((state)=>state.user)
    const {products,productsCount} = useSelector(
      (state)=>state.products
    )

    const rows = []
    const columns = [
        {field:'id',headerName:'Order ID',minWidth:300,flex:1,},
        // {field:'status',headerName:'Status',minWidth:150 ,flex:0.5,cellClassName:(params)=>{
        //     return params.getValue(params.id,'status') === "Delivered" ? 'greenColor':'redColor';
        // }},
        {field:'status',headerName:'Status',minWidth:150 ,flex:0.5},
        {field:'itemsQty',headerName:'Items Qty',type:"number",minWidth:150 ,flex:0.3},
        {field:'amount',headerName:'Amount',type:"number",minWidth:270 ,flex:0.5},
        {field:'actions',headerName:'Actions',type:"number",minWidth:150 ,flex:0.3,sortable:false,renderCell:(params)=>{
            return (
                <Link to={`/order/details/${params.row.id}`}><LaunchIcon/></Link>
            )
        }},
        
    ]

    orders && orders.forEach((item,index) => {
        rows.push({
            itemsQty:item.orderItems.length,
            id:item._id,
            status:item.orderStatus,
            amount:item.totalPrice,
             
        })
    });

    const OrderSearchHandler = (catagory)=>{
      setOrderStatus(catagory)
    }

    const [orderStatus,setOrderStatus] = useState("")
   
    useEffect(() => {
      dispatch(myOrders(orderStatus))
      dispatch(getProduct())
    }, [orderStatus])
    
  return (
    <>
       
       {/* <div className='myOrdersPage'>
          <DataGrid rows={rows} columns={columns} pageSize={10} disableRowSelectionOnClick className='myOrdersTable' autoHeight/>
          <Typography id='myOrdersHeading'>{user.name}'s Orders</Typography>
       </div> */}

       
                   
            <div className='AllOrders'>
                    
                    <div className='orders-header'>
                      <div className='headersLinks'>
                        <Link to='/profile'> <AccountCircleIcon/>Account </Link><Link to='/orders/me'><ChevronRightIcon/>Your orders</Link>
                      </div>
                      
                    </div>

                    <div className='order-nav'>
                       <span onClick={()=>OrderSearchHandler("")} className={orderStatus===''&&'order-navactive'}>All Orders</span>
                       <span onClick={()=>OrderSearchHandler("Shipped")} className={orderStatus==='Shipped'&&'order-navactive'}>Shipped</span>
                       <span onClick={()=>OrderSearchHandler("onItsWay")} className={orderStatus==='onItsWay'&&'order-navactive'}>on Its Way</span>
                       <span onClick={()=>OrderSearchHandler("Delivered")} className={orderStatus==='Delivered'&&'order-navactive'}>Delivered</span>
                       <span onClick={()=>OrderSearchHandler("canceled")} className={orderStatus==='canceled'&&'order-navactive'}>canceled</span>
                       <span onClick={()=>OrderSearchHandler("Pending")} className={orderStatus==='Pending'&&'order-navactive'}>Pending</span>
                    </div>
                   
                   {loading && <SmallLoader/>}
                      <>
                         {orders && orders.length !== 0 ? (
                       <div className='myOrderContainer'>
                        {orders && orders.map((order)=> <MyOrder order={order} />)}
                         
                       </div>
                   ) : <Empty/>}
                      </>
                    
                   

                   <div className='orders-end-product'>
                   
                       <div className='end-product-container'>
                            
                           <h2>Discover Out Latest Products</h2>
                           <div className='end-product-cards-container'>  
                               {loading ? <Skeleton/> : <>
                                {products && products.map((product)=> <SimilaProductCard product={product}/>)} 
                               </>}   
                            </div>
                            
                        </div>
                   </div>
                    
            </div>

      
      
    

    </>
  )
}

export default Orders