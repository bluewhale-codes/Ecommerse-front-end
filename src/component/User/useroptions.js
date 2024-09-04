import React from 'react'
import './userOption.css'
import { SpeedDial , SpeedDialAction } from '@material-ui/lab'
import { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch ,useSelector } from 'react-redux';
import { logout } from '../../actions/userAction';
import { Backdrop } from '@mui/material';
import { useNavigate  } from "react-router-dom";
import ListAltIcon from '@mui/icons-material/ListAlt';
const Useroptions = ({user}) => {

    const [open, setOpen] = useState(false)
    const {cartItems} = useSelector((state)=> state.cart)
    const navigate = useNavigate();
    const dispatch  = useDispatch();
    const options = [
        {icon:<AccountCircleIcon/>,name:"Profile",func:profile},
        {icon:<ListAltIcon/>,name:"Orders",func:orders},
        {icon:<LogoutIcon/>,name:"Logout",func:loguot},
        {icon:<ShoppingCartIcon style={{color:cartItems.length>0?"tomato":"unset"}}/>,name:`Cart(${cartItems.length})`,func:cart},
    ];
    if(user.role==='admin'){
        options.unshift( {icon:<DashboardIcon/>,name:"DashBoard",func:Dashboard})
    }

    function Dashboard(){
        navigate("admin/dashboard")
    }
    function orders(){
      navigate("/orders/me")
    }
    function profile(){
        navigate("/profile")
    }
    function loguot(){
        dispatch(logout())
        navigate("/home")
    }
    function cart(){
       navigate("/cart")
    }
   return (
    <>
    <Backdrop open={open}/>
      <SpeedDial
        ariaLabel='speedDial tooltip example'
        onClose={()=>setOpen(false)}
        onOpen={()=>setOpen(true)}
        style={{zIndex:"11"}}
        open={open}
        className='speedDial'
        direction='down'
        icon={<img className='speedDialIcon' src={user.avatar.url} alt='profile'/>}
        >
        {options.map((item)=>(
           <SpeedDialAction key={item.name} icon={item.icon} tooltipTitle={item.name} onClick={item.func}/>
        ))}
        
      </SpeedDial>
    </>
  )
}

export default Useroptions