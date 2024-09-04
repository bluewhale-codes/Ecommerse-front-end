import React ,{useRef ,useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate,useLocation,useParams } from 'react-router-dom'; 
import { useDispatch,useSelector } from 'react-redux'
import { getUserDetail, updateUserRole} from '../../actions/userAction'
import { Button } from '@mui/material';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Loader from '../layout/Loaders/loader';
import Sidebar from './Sidebar'

import './newProduct.css'
import { UPDATE_USER_RESET } from '../../constants/userConstant';


const UpdateUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const {loading , error , isUpdated} = useSelector((state)=>state.profile)
    const {user} = useSelector((state)=>state.userDetail)

    const [role, setRole] = useState("")

     useEffect(() => {
          dispatch(getUserDetail(id))
          if(isUpdated){
              navigate('/admin/users')
              dispatch({type:UPDATE_USER_RESET})
          }

     }, [dispatch,isUpdated])
     

     const updatUserHandler = (e)=>{
           e.preventDefault();
           const myForm = new FormData();
           myForm.set("role",role);
           
           dispatch(updateUserRole(id,myForm))
           
     };
     
  return (
    <>
        {loading ? <Loader/> :(
     
         <div className='dashboard'>
        <Sidebar/>
        <div className='newProductContainer'>
            <form className='createProductForm' encType='multipart/form-data' onSubmit={updatUserHandler}>
            
                <h1>Update User Status</h1>
                <div className='productCategory'>
                <AccountTreeIcon/>
                <select onChange={(e)=>setRole(e.target.value)}>
                  <option value="">Choose Category</option>
                 {user && user.role === "admin" && <option value="user">User</option>}
                 {user && user.role ==="user" && <option  value="admin">Admin</option>}
                  
                </select>
                
                </div>
                
                
                <Button id='createProductBtn' type='submit' disabled={loading ? true : false || role==="" ? true:false}>
                   Update
                </Button>



            </form>
        </div>
     </div>
    
             )}
    </>
  )
}

export default UpdateUser