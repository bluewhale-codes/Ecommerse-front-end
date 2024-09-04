import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'; 
import './Navbar.css'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  const navigate = useNavigate();
    const [keyword,setKeyword] = useState("")
    const searchSubmitHandler = (e)=>{
       e.preventDefault();
       if(keyword.trim()){
       navigate(`/products/${keyword}`)
       }else{
      navigate("/products")
       }
    };
  return (
    <>

    <div className="navbar">
  <div>
  <Link to="/home">Home</Link>
  <Link to="/products">Products</Link>
  <Link to="/login">Login</Link>
  <Link to="#">Contact</Link>
  <Link to="#">About</Link>
  </div>
  <div className='searchBar'>
  <form className='searchBox' onSubmit={searchSubmitHandler} >
           <input type="text" placeholder='Search a product ...' onChange={(e)=>setKeyword(e.target.value)}/>
           <button type='submit'>Search</button>
  </form>
  <Link to='/cart'><ShoppingCartIcon/> <span>Cart</span></Link><Link to='/profile'><PersonIcon/> <span>Account</span> </Link>
  </div>
  </div>


      
      </>
  )
}

export default Header