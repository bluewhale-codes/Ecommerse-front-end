import React ,{useEffect,useState} from 'react'
import './sidebar.css'
import Sidebar from './Sidebar'
import AddIcon from '@mui/icons-material/Add';
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AdminProduct from './subComponents/AdminProduct';
import { getAdminProduct } from '../../actions/productAction';
import Loader from '../layout/Loaders/loader';
import { Carousel, Skeleton } from 'antd';
import SellectCard from './subComponents/SellectCard';
import './subComponents/sellerCard.css'

const BrandCollection = () => {

  const dispatch = useDispatch();
  const {loading,products} = useSelector(
    (state)=>state.adminProducts
  )

//   useEffect(() => {
//     dispatch(getAdminProduct())
//   }, [dispatch])
  return (
    <div className='dashboard'>
      <Sidebar/>
       
      
        
      <div className='productListContainer'>
      
      <div className='Product-list-header'>
           <div>
             <h3>SELLERS</h3>
             <ul className='productList-nav-link'>
                 <li><Link to='#'>DashBoard</Link></li>
                 <span>&#8226;</span>
                 <li><Link to='/admin/product'>Seller Collection</Link></li>
                 
             </ul>
             
           </div>
           <div>
           <Link to="/create/product">
             <button><AddIcon/>New Product</button>
           </Link>
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
       <div>
       {/* {loading ? <Skeleton/> : 
       <div className='gallaryProducts'>
       {products && products.map((product)=><AdminProduct product={product}/>)} 
       </div>
       } */}
       <div className='seller-collection'>
           <SellectCard/>
           <SellectCard/>
           <SellectCard/>
           <SellectCard/>
           <SellectCard/>
           <SellectCard/>
           <SellectCard/>
       </div>
            
       </div>
  </div>
       
     
   </div>
  )
}



export default BrandCollection