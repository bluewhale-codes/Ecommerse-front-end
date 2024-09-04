import React, { useEffect ,useState } from 'react'
import { useSelector ,useDispatch  } from 'react-redux'
import './sidebar.css'
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



const OrdersAdmin = () => {
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
              <h3>All Orders</h3>
              <ul className='productList-nav-link'>
                  <li><Link to='#'>DashBoard</Link></li>
                  <span>&#8226;</span>
                  <li><Link to='/admin/orders'>Orders</Link></li>
                  <span>&#8226;</span>
                  <li><Link to='/order/detail'>order detail</Link></li>
                  {/* <span>&#8226;</span>
                  <li><Link to='/admin/product/gallary'></Link></li> */}
              </ul>
            </div>
            <div>
            
            </div>
       </div>
        <div >
              <DataGrid 
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 13 },
                    },
                  }}
                  pageSizeOptions={[13, 50]}
                  
                  disableRowSelectionOnClick
                  className='productListTable'
                  autoHeight 
                />
        </div>
      </div>
   </div>)}
   </>
  )
}

export default OrdersAdmin