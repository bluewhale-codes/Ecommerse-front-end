import React ,{useRef ,useState ,useEffect} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Loader from '../layout/Loaders/loader'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import "./loginSignup.css";
import { useDispatch,useSelector } from 'react-redux'
import { forgotAPassword,clearErrors } from '../../actions/userAction'
import EmailIcon from '@mui/icons-material/Email';
import { Alert } from '@mui/material';
import './Updateprofile.css';
import { useAlert } from "react-alert";


const ForgorPassword = () => {
  const navigate = useNavigate()
  // const alert = useAlert();
  const dispatch = useDispatch();
  const {error,message,loading} = useSelector(state => state.forgotPassword)
  const {isAuthenticated} = useSelector(state => state.user)
  
  
  const [userEmail, setUserEmail] = useState("")
  const [getError, setError] = useState("")

  const SendEmail = (e)=>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("email",userEmail);
    dispatch(forgotAPassword(myForm))
  }

  
  useEffect(()=>{
     if(error){
       setError(error);
       dispatch(clearErrors())
     }
     if(message){
        setError('We will send you email to rocover Your Password');
        dispatch(clearErrors())
     }
   
   },)
   function closeErrorBox(){
    setError(null)
    dispatch(clearErrors())
  }
  return (
    <>

    {loading ? <Loader/> :(
    <div className='forgot-password-container'>
       {getError && (
        <Alert id='alert-box' onClose={()=>{closeErrorBox()}} severity="error">
        {getError}
        </Alert>
       )}
        <div className='forgor-pass-Box'>
       
          
            
            <div className='ForPass-flex'>
            
                <div className='forgot-Img'>
                      <img src='https://img.freepik.com/free-vector/key-concept-illustration_114360-6305.jpg?w=826&t=st=1694004021~exp=1694004621~hmac=c33472bb88ba0e9f632e47ee08bf3b2ef806afb385e353a887df8220adda7c59'/>
                </div>
                <div className='form-container'>
                    <form className='forgot-passwordForm' onSubmit={SendEmail}>
                        <div className='header-img'>
                          <img src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1694017261/QXZhdGFycy9pY29uczgtZXhjbGFtYXRpb24tNTBfcXlhYXpk/grid_landscape'/>
                        </div>
                        <h2>Forgot Password !</h2>
                        <p className='reset-helpText'>Enter Your email and we'll send you a link to reset password</p>
                        <div className='form-inputs'>
                          <p className='input-label'>Enter Email<span className='req-RP'>*</span></p>
                         
                            <input type='email' value={userEmail} onChange={(e)=> setUserEmail(e.target.value)} />
                          
                        </div>
                        <div className='form-btn-Wrapper'>
                           <button className='recover-btn'>Recover Password</button>
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>)}
    
    </>
  )
}

export default ForgorPassword