import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeItem , TreeView } from '@mui/lab';
import {Link ,useNavigate} from "react-router-dom"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddIcon from '@mui/icons-material/Add';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LockClockIcon from '@mui/icons-material/LockClock';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SellIcon from '@mui/icons-material/Sell';
const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className='sidebar'>
      {/* <Link to='/'>
        <img src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1691908319/c2FtcGxlcy9wZW9wbGUvYmljeWNsZQ==/grid_landscape' alt='ecoomerce'/>
      </Link>
      <Link to='/admin/dashboard'>
        <p>
            <DashboardIcon/> Dashboard
        </p>
      </Link> 
       <h4>Managment</h4>
      <Link>
           <TreeView defaultExpandIcon={<ImportExportIcon/>} defaultCollapseIcon={<ExpandMoreIcon/>}>
               <TreeItem nodeId='1' label="Products">
                    <Link to="/admin/product">
                        <TreeItem nodeId='2' label="All" icon={<PostAddIcon/>} />
                    </Link>
                    <Link to="/create/product">
                        <TreeItem nodeId='3' label="Create" icon={<AddIcon/>} />
                    </Link>
               </TreeItem>
           </TreeView>
      </Link>
      <Link to="/admin/orders/">
         <p>
           <ListAltIcon/>
           orders
         </p>
      </Link>
      <Link to="/admin/users">
        <p>
           <PeopleIcon/> Users 
        </p>
      </Link>
      <Link to="/admin/review">
        <p>
           <RateReviewIcon/> Reviews 
        </p>
      </Link> */}

          <div className='website-logo'>
                <img src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1695921155/QXZhdGFycy9kb3dubG9hZF8yXzFfdjNobXJp/grid_landscape'/>
          </div>
         {/* <div className='admin-profile-img'>

              <div>
              <Stack direction="row" spacing={2}>
               <Avatar alt="Remy Sharp" src="https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1691908339/c2FtcGxlcy9zbWlsZQ==/grid_landscape" />
              </Stack>
              </div>
              <div>
                  <p>Vishal shakya</p>
                  <p>Admin</p>
              </div>
 
          </div>  */}
           
          <div className='manage-site-link-container'>
                    <p><b>Managment</b></p>
                    <div onClick={()=>navigate('/admin/dashboard')} className='manage-site-link'>
                        <div>
                              <SpaceDashboardIcon/><p>Dashboard</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    <div onClick={()=>navigate('/admin/users')} className='manage-site-link'>
                        <div>
                              <PeopleIcon/><p>Users</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    <div onClick={()=>navigate('/admin/product')} className='manage-site-link manage-site-link-active'>

                            <div>
                                    <ShoppingBagIcon/><p>Products</p>
                              </div>
                              <div>
                                <ChevronRightIcon/>
                              </div>
                       
                    </div>
                    
                    <div onClick={()=>navigate('/admin/orders')}  className='manage-site-link'>
                        <div>
                              <LockClockIcon/><p>Orders</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    <div onClick={()=>navigate("/admin/brand/collection")}  className='manage-site-link'>
                        <div>
                              <SellIcon/><p>Sellers</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    
          </div>
    </div>
  )
}

export default Sidebar