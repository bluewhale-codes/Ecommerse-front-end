import React ,{useRef ,useState ,useEffect} from 'react'
import { Link , useNavigate,useParams } from 'react-router-dom'
import Loader from '../layout/Loaders/loader'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import "./loginSignup.css";
import { useDispatch,useSelector } from 'react-redux'
import {clearErrors,resetAPassword } from '../../actions/userAction'
import './Updateprofile.css'

const ResetPassword = () => {
    const {token} = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {error,success,loading} = useSelector(state => state.forgotPassword)
    const {isAuthenticated} = useSelector(state => state.user)
    
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [getError, setError] = useState("")
  
    const resetPassword = (e)=>{
      e.preventDefault();
      const myForm = new FormData();
      myForm.set("password",newPassword);
      myForm.set("confirmPassword",confirmPassword);
      dispatch(resetAPassword(token,myForm))
    }
  
    
     useEffect(()=>{
        if(error){
          setError(error);
          dispatch(clearErrors())
        }
         if(success){
            setError('You Password Has Been Changed');
            dispatch(clearErrors())
         }
     
      })
     function closeErrorBox(){
      setError(null)
      dispatch(clearErrors())
    }
    return (
      <>
  
      {loading ? <Loader/> :(
      <div className='register-container'>
          <div className='registerBox'>
          {getError && (
            <div className='register-error'>
              <div>
              <ErrorOutlineIcon/>
              </div>
              <div>
              {getError}
              </div>
              <div>
              <CloseIcon onClick={closeErrorBox}/>
              </div>
            </div>
            )}
            <h2>Create Password</h2>
              <form className='registerForm' onSubmit={resetPassword}>
          
                    <div className='loginPassword'>
                      <input type='password' placeholder='New Password' required value={newPassword} onChange={(e)=> setNewPassword(e.target.value) } />
                    </div>
                    <div className='loginPassword'>
                      <input type='password' placeholder='Confirm Password' required value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value) } />
                    </div>
                    
                    
                    
                    <input  type='submit' value='Create' className='loginBtn'/>
              </form>
          </div>
      </div>)}
      
      </>
    )
}

export default ResetPassword