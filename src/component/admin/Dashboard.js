import React ,{useEffect} from 'react'
import Sidebar from './Sidebar'
import { useSelector ,useDispatch } from 'react-redux'
import { getAdminProduct , clearErrors } from '../../actions/productAction';
import { getAllUser } from '../../actions/userAction';
import './subComponents/dashboard.css'
import {Link} from "react-router-dom"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import './sidebar.css';
import './subComponents/dashboardTables.css';
import ordersChart from './DashBoardCharts/ordersChart';
import MenuePower from './subComponents/menu';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
import { Typography } from '@mui/material'
import { Doughnut , Line ,Bar } from 'react-chartjs-2'

import { allOrdersAdmin } from '../../actions/orderAction';
import { DisabledByDefault } from '@mui/icons-material';
import SellIcon from '@mui/icons-material/Sell';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

const Dashboard = () => {


  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',"August","september",'Oct',"Nov","Dec"];

  const data2 = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'customers',
        data:[22,56,75,78,23,66,990,23,223,567,324,546],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      
    ],
  };
  const data3 = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Earning',
        data:[2,43,332,66,75,332,673,77,123,78,65,342],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
      
      
    ],
  };
 const data = {
  labels,
  datasets: [
    {
      label: 'Orders',
      data: [456,764,34,865,12,88,341,764,564,222,897,334],
      backgroundColor: 'rgb(5, 142, 247)',
    },
     {
       label: 'cancel order',
       data: [22,33,66,77,99,12,4,36,67,809,43,25],
       backgroundColor: 'rgba(53, 162, 235, 0.5)',
     },
  ],
};


  const dispatch = useDispatch();
  const {products} = useSelector((state)=>state.adminProducts);
  const {orders} = useSelector((state)=>state.adminAllOrders);
  const {users} = useSelector((state)=>state.allUser);
  
  let outOfStock = 0;
  let noOfProducts = products && products.length;
  
  products && products.forEach((item) => {
    if(item.Stock===0){
      outOfStock +=1;
    }
  });
  console.log(outOfStock)

  const lineState = {
    labels:["Inital Amount" , "Amount Earned"],
    datasets:[
        {
            label:"TOTAL AMOUNT",
            backgroundColor:["tomato"],
            hoverBackgroundColor:['red'],
            data:[0,4000]
        }
    ]
  };
  const doughnutState = {
    labels:["Out of Stock" , "In Stock"],
    datasets:[
        {
            label:"TOTAL AMOUNT",
            backgroundColor:["rgb(5 142 247 / 33%)","rgba(64, 239, 78, 0.264)"],
            hoverBackgroundColor:['rgb(5 142 247 / 83%);',"rgb(64 239 78 / 62%)"],
            data:[outOfStock,noOfProducts-outOfStock]
        }
    ]
  };

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(allOrdersAdmin());
    dispatch(getAllUser());
  }, [dispatch])
  
  

  return (
    <div className='dashboard'>
        <Sidebar/>
        <div className='dashboardContainer'>
          <div className='greeting-header'>
            <p><b>Good Morning, Anna!</b></p>
             <p>Here's what's happening with your store today.</p>
          </div>
           <div className='dashboard-header'>
               <div className='header-container'>
                   <p>Products</p>
                   <p className='count-tag'>76</p>
                   <div>
                      <span><Link to='/admin/product'>View Products</Link></span>
                      <span className='icon'><InventoryIcon fontSize='medium'/></span>
                   </div>
               </div>
               <div className='header-container'>
                   <p>orders</p>
                   <p className='count-tag'>31</p>
                   <div>
                      <span><Link to='/admin/orders'>View orders</Link></span>
                      <span className='icon'><LocalMallIcon fontSize='medium'/></span>
                   </div>
               </div>
               <div className='header-container'>
                  <p>Customers</p>
                   <p className='count-tag'>544</p>
                   <div>
                      <span><Link to='/admin/users'>see details</Link></span>
                      <span className='icon'><PeopleIcon fontSize='medium'/></span>
                   
                   </div>
               </div>
               <div className='header-container'>
                  <p>Sellers</p>
                   <p className='count-tag'>45</p>
                   <div>
                      <span><Link to='/admin/users'>see details</Link></span>
                      <span className='icon'><SellIcon fontSize='medium'/></span>
                   
                   </div>
               </div>
           </div>

          <div className='Revenue-model-table-wrapper'>
               <div className='Revenue-model-table'>
                   <div className='header'>
                       <div>
                          <p>Revenue</p>
                       </div>
                       <div className='sort-icons'>
                           <span>ALL</span>
                           <span>1M</span>
                           <span>6M</span>
                           <span>1Y</span>
                       </div>
                   </div>
                   {/* <div className='header-info'>
                      <div>
                         <p>₹7,345</p>
                         <p>Earnigs</p>
                      </div>
                       */}
                   {/* </div> */}
                   <div className='revenue-chart'>
                   <Line data={data3} />
                   </div>
               </div>
               <div className='order_new-admin_dashboard'>
               <div className='newOrder-table-wrapper'>
                  <div className='header'>
                        <div>
                            <p>Recent Orders</p>
                        </div>
                        <div>
                            <span>View Order List</span>
                        </div>
                  </div>
                  <div className='newOrder-table'>
                  <table className='dashboard_adminorderTable'>
                          <tr className='dashboard_table-header'>
                              <th className='dashboard_product-detailHeader'>Order Id</th>
                              <th>Customer</th>
                              <th>Product</th>
                              <th>Amount</th>
                              <th>Status</th>
                          </tr>
                         

                          <tr>
                              <td className='dashboard_product-detail'>
                                 <p>#25423</p>
                              </td>
                              <td><p>Vishal shakya</p></td>
                              
                              <td><p>Trimmmer</p></td>
                              <td><p>$345</p></td>
                              <td><span className='processing-tag'>Processing</span></td>
                             
                          </tr>            

                          <tr>
                              <td className='dashboard_product-detail'>
                                 <p>#25423</p>
                              </td>
                              <td><p>Vishal shakya</p></td>
                              
                              <td><p>Trimmmer</p></td>
                              <td><p>$345</p></td>
                              <td><span className='processing-tag'>Processing</span></td>
                             
                          </tr>            

                          <tr>
                              <td className='dashboard_product-detail'>
                                 <p>#25423</p>
                              </td>
                              <td><p>Vishal shakya</p></td>
                              
                              <td><p>Trimmmer</p></td>
                              <td><p>$345</p></td>
                              <td><span className='processing-tag'>Processing</span></td>
                             
                          </tr>            

                          <tr>
                              <td className='dashboard_product-detail'>
                                 <p>#25423</p>
                              </td>
                              <td><p>Vishal shakya</p></td>
                              
                              <td><p>Trimmmer</p></td>
                              <td><p>$345</p></td>
                              <td><span className='processing-tag'>Processing</span></td>
                             
                          </tr>            
                                   
                                    
                          
                          
                         
                        
                          
                          
                          
                      </table>
                  </div>
              </div>
               </div>
          </div>

           
          <div className='newOrders-table-container'>
              

              {/* <div className='products-pieChart-container'>
                   <div>
                      <p>Product Activity</p>
                   </div>
                    <div className='chart'>
                    <Doughnut data={doughnutState}/>
                    </div>
                  
              </div> */}
          </div>

            <div className='bar-line-charts'>
              <div>
                  <div className='chart-header'>
                    <div>
                      <p>Orders</p>
                    </div>
                    <div>
                        <p>Sort By:</p><span></span>
                    </div>
                  </div>
                 <Bar data={data} />
              </div>

              <div>
                  <div className='chart-header'>
                    <div>
                      <p>Customers</p>
                    </div>
                    <div>
                        <p>Sort By:</p><span></span>
                    </div>
                  </div>
               <Line data={data2} />
              </div>
              
            </div>
           {/* <Typography component='h1'>DashBoard</Typography>
           <div className='dashboard-summery'>
                <div>
                    <p>Total Amount <br/> ₹2000</p> 
                </div>
                <div className='dashboardSummeryBox2'>
                    <Link to="/admin/products">
                        <p>Produts</p>
                        <p>{products && products.length}</p>
                    </Link>
                    <Link to="/admin/orders">
                        <p>Orders</p>
                        <p>{orders && orders.length}</p>
                    </Link>
                    <Link to="/admin/user">
                        <p>User</p>
                        <p>{users && users.length}</p>
                    </Link>
                </div>

           </div>
           <div className='lineChart'>
           <Line  data={lineState} />
           </div>
           <div className='doughtnutChart'>
             <Doughnut data={doughnutState}/>
           </div> */}
        </div>
    </div>
  )
}

export default Dashboard