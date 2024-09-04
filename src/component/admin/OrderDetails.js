import React, { useEffect ,useState } from 'react'
import { useSelector ,useDispatch  } from 'react-redux'
import './sidebar.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SecurityIcon from '@mui/icons-material/Security';
import SearchIcon from '@mui/icons-material/Search';
import OrderStatusStepper from './subComponents/orderStatusStepper';
import { DataGrid } from '@mui/x-data-grid';
import { Link ,useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getOrderDetails, allOrdersAdmin , updateOrderAdmin , deleteOrderAdmin} from '../../actions/orderAction';
import Sidebar from './Sidebar'
import { Alert } from '@mui/material';
import { DELETE_PRODUCT_RESET } from '../../constants/productConstatns';
import Loader from '../layout/Loaders/loader'
import LaunchIcon from '@mui/icons-material/Launch';
import ProfileCard from './subComponents/ProfileCard';
import AdminOrder from './subComponents/AdminOrder';

const AdminOrderDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {orders,error} = useSelector((state)=>state.adminAllOrders);
  const {isDeleted, isUpdated , loading} = useSelector((state)=>state.adminOrder);

  const [alertS, setAlertS] = useState("")
  
  useEffect(() => {
    dispatch(allOrdersAdmin());

     if(isDeleted){
       alert('Deleted success')
       dispatch({type:DELETE_PRODUCT_RESET})
     }
    
  }, [dispatch,isDeleted,allOrdersAdmin,DELETE_PRODUCT_RESET])
  
  const deleteOrderHandler = (id) => {
     dispatch(deleteOrderAdmin(id))
  }

  const handler12 = (id) => {
      dispatch(getOrderDetails(id));
      navigate(`/admin/order/${id}`)
  }
  

  const columns = [
    {field:'id',headerName:'Order ID',minWidth:300,flex:1,},
    {field:'date',headerName:'Date',flex:1,},
    {field:'name',headerName:'Customer ID',flex:1,},
    // {field:'status',headerName:'Status',minWidth:150 ,flex:0.5},
    {field:'amount',headerName:'Amount',type:"number"},
    {field:'status',headerName:'Status',minWidth:150 ,flex:0.5,renderCell:(params)=>{
      return params.row.status === "Delivered" ? <span id='productStatusRed'>{params.value}</span  >:<span id='productStatusGreen'>{params.value}</span>;
      
    },cellClassName:(params)=>{
        return params.row.status === "Delivered" ? 'redColor':'greenColor';
     } },
    {field:'actions',headerName:'Actions',type:"number",sortable:false,renderCell:(params)=>{
        return (
          <>
            {/* <Link to={`/order/details/${params.row.id}`}><LaunchIcon/></Link> */}
            {/* <Link to={`/admin/order/${params.row.id}`}><EditIcon/></Link> */}
            <Button onClick={()=>deleteOrderHandler(params.row.id)}>
              
            </Button>
            <Button onClick={()=>handler12(params.row.id)}>
            <EditIcon/>
            </Button>
            
          </>
            
        )
    }},


  //   {field:"id",headerName:"Order ID" , minWidth:200,flex:0.5},
  //   {field:"name",headerName:"Name" , minWidth:350,flex:1},
  //   {field:"stock",headerName:"Stock" ,type:"number", minWidth:150,flex:0.3},
  //   {field:"price",headerName:"Price" ,type:"number", minWidth:270,flex:0.5},
  //   {field:"action",headerName:"Actions" ,type:"number",sortable:false, minWidth:150,flex:0.3 ,sortable:false,renderCell:(params)=>{
  //     return (
  //       <>
  //         <Link to={`/admin/product/${params.row.id}`}><EditIcon/></Link>
  //         <Button onClick={()=>deleteOrderHandler(params.row.id)}>
  //            <DeleteIcon/>
  //         </Button>
  //       </>
  //     )
  // }},

  ]
  const rows = []
  orders && orders.forEach((item,index) => {
    rows.push({
      id:item._id,
      date:item.createdAt,
      name:item.user,
      amount:item.subTotal,
      status:item.orderStatus,
   
         
    })
});
  return (
   <>
   {loading ? <Loader/> :(

   <div className='dashboard'>
      <Sidebar/>
      <div className='productListContainer'>
        {alertS === 'Success' && <Alert severity="error">Order Deleted Successfully !</Alert> }
       
        <div className='Product-list-header'>
            <div>
              <h3>Order ID:#23141BCH321</h3>
            </div>
            <div>
               <button>Accept Order</button>
            </div>
       </div>
       <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Enter Product Id.."/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"><SearchIcon/></i>
                        </button>
                    </div>
      </div>
        

       <div className='admin-Singleorder-details'>
         <div className='left-container'>
          <AdminOrder/>
          <div className='orderStatus-container'>
             <div className='status-header'><p>Order status</p></div>
             <div className='status-stepper'>
             <OrderStatusStepper/>
             </div>
          </div>
         </div>
         <div className='right-container'>
             <div className='customer-detail card-wrapper'>
                 <div className='card'>
                    <div className='card-header'>
                       <p>Customer Detail</p>
                       {/* <p>View user</p> */}
                    </div>
                    <div className='card-content'>
                       <div className='profile-section'>
                           <div className='profile-img'>
                              <img src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1691908340/c2FtcGxlcy9sb29rLXVw/grid_landscape'/>
                           </div>
                           <div className='profile-name'>
                             <p>Vishal Shakya</p>
                             <p>Customer</p>
                           </div>
                       </div>
                       <div className='contact-detail'>
                             <div><LocalPhoneIcon  fontSize='small'/><span>9855104673</span></div>
                             <div><EmailIcon  fontSize='small'/><span>Vishal@gmail.com</span></div>
                       </div>
                    </div>
                 </div>
             </div>
             <div className='Shipping address card-wrapper'>
             <div className='card'>
                    <div className='card-header'>
                       <p><LocationOnIcon  fontSize='small'/><span>Shipping Address</span></p>
                    </div>
                    <div className='card-content'>
                       <div className='house-address'>
                          <p>House no.2 type 13D pgi campus sector 12 chandigarh</p>
                       </div>
                       <div className='detail-addres'>
                          <p>Chandigarh,</p>
                          <p>Phone:<b> 9855104673</b></p>
                          <p><b>India</b></p>
                       </div>
                       
                    </div>
                 </div>
             </div>
             <div className='payment-detail card-wrapper'>
                  <div className='card'>
                    <div className='card-header'>
                       <p><SecurityIcon fontSize='small'/><span>Payment Detail</span></p>
                    </div>
                    <div className='card-content'>
                       <div className='payment-details'>
                       <p>Transaction:<b> 314321313</b></p>
                       <p>Payment Method:<b> Cash</b></p>
                       <p>Status:<b> success</b></p>
                       <p>Total Amount:<b> ₹223</b></p>
                       <p></p>
                       </div>
                       
                    </div>
                  </div>
             </div>
         </div>
          
       </div>

      </div>
   </div>)}
   </>
  )
}


export default AdminOrderDetails