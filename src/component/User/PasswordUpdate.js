import React ,{useRef ,useState ,useEffect} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Loader from '../layout/Loaders/loader'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import "./loginSignup.css";
import { useDispatch,useSelector } from 'react-redux'
import { updatePassword ,clearErrors } from '../../actions/userAction'
import { UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_RESET } from '../../constants/userConstant'
import './UserFilesCss/resetPassword.css'

const PasswordUpdate = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch();
  const {error,isUpdated,loading} = useSelector(state => state.profile)
  const {isAuthenticated} = useSelector(state => state.user)
  
  
  const [oldpassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfPassword] = useState("")
  const [getError, setError] = useState("")

  const UpdatePssword = (e)=>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("oldpassword",oldpassword);
    myForm.set("newPassword",newPassword);
    myForm.set("confirmPassword",confirmPassword);
    for (const value of myForm.values()) {
      console.log(typeof(value));
    }
    dispatch(updatePassword(myForm))
  }

  
  useEffect(()=>{
     if(error){
       setError(error);
       dispatch(clearErrors())
     }
    
     if(isUpdated){
       navigate('/profile')

       dispatch({
        type:UPDATE_PASSWORD_RESET,
       })
     }
     
   
   })
   function closeErrorBox(){
    setError(null)
  }
  return ( 
    <>
    <div className='updatePass-container'>
        <div className='updatePass-box'>
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
          
            {/* <form className='registerForm' onSubmit={UpdatePssword}>
        
                  <div className='loginPassword'>
                  
                    <input type='password' placeholder='Old password' required value={oldpassword} onChange={(e)=> setOldPassword(e.target.value) } />
                  </div>
                  <div className='loginPassword'>
                  
                    <input type='password' placeholder='New Passowrd' required value={newPassword} onChange={(e)=> setNewPassword(e.target.value) } />
                  </div>
                  <div className='loginPassword'>
                  
                    <input type='password' placeholder='Confirm Password' required value={confirmPassword} onChange={(e)=> setConfPassword(e.target.value) } />
                  </div>
                  
                  
                  <input  type='submit' value='Change' className='loginBtn'/>
            </form> */}

            <div className='passwordUpdate-container'>
                 <h2 className='form-header'>Reset Password</h2>
                 <p className='help-text'>Reset Your password using Your old password or </p>
                  <form className='password-updateForm'  onSubmit={UpdatePssword}>
                      <div className='oldPassword'>
                          <p className='input-label'>Old Password<span className='req-RP'>*</span></p>
                          <input type='password' required value={oldpassword} onChange={(e)=> setOldPassword(e.target.value) }/>
                      </div>
                      <div className='new-Password'>
                          <p className='input-label'>New Password<span className='req-RP'>*</span></p>
                          <input type='password' required value={newPassword} onChange={(e)=> setNewPassword(e.target.value) }/>
                      </div>
                      <div className='conf-Password'>
                          <p className='input-label'>Confirm Password</p>
                           <input type='password' required value={confirmPassword} onChange={(e)=> setConfPassword(e.target.value) }/>
                      </div>
                      <div className='reset-passwordButt'>
                           <button type='submit'>Reset Password</button>
                         <Link to='/password/forgot'>Forget old Passoword ?</Link>
                      </div>
                      
                  </form>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default PasswordUpdate