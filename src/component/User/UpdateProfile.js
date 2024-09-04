import React ,{useRef ,useState ,useEffect} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Loader from '../layout/Loaders/loader'
import CheckoutStepProfile from '../layout/Product/CheckoutStepProfile'
import { useDispatch,useSelector } from 'react-redux'
import { updateProfile ,clearErrors, loadUser, register , } from '../../actions/userAction'
import { UPDATE_PROFILE_FAIL, UPDATE_PROFILE_RESET } from '../../constants/userConstant'
import './Updateprofile.css'
import MainLoader from '../layout/Loaders/MainLoader'

const UpdateProfile = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  // const {user,isAuthenticated} = useSelector(state => state.user)
  const {error,isUpdated,loading} = useSelector(state => state.profile)
  
  
  const [name, setName] = useState(props.user.name)
  const [email, setEmail] = useState(props.user.email)
  const [avatar, setAvatar] = useState(props.user.avatar.url)
  const [avatarPreview, setAvatarPreview] = useState()

  const registerSubmit = (e)=>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name",name)
    myForm.set("email",email)
    myForm.set("avatar",avatar)
    dispatch(updateProfile(myForm))
  }

  useEffect(()=>{
    
    if(!props.isAuthenticated){
      navigate('/login')
    }
    if(error){
      props.showAlert(error,'info');
    }
    if(isUpdated){
      props.showAlert('Profile Updated','info');
      dispatch({
        type:UPDATE_PROFILE_RESET
      })
    }
  })

  const registerDataChange = (e) =>{
    if(e.target.name==="avatar"){
        const reader = new FileReader();
        reader.onload =()=>{
            if(reader.readyState===2){
              setAvatarPreview(reader.result);
              setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <>
        <div className='register-container'>
        <div className='registerBox'>
        <CheckoutStepProfile activeStep={0}/>

        <div className='profileUpdate-container'>
                <div className='profile-imagePUC'>
                          <img src={avatar} />
                </div>
                 
                 <h2 className='form-header'>Update Profile</h2>
                  {loading==true && <MainLoader/>}
                  <form className='profile-updateForm' cType='multipart/form-data' onSubmit={registerSubmit} >
                      <div className='oldPassword'>
                          <p className='input-label'>Full name<span className='req-RP'>*</span></p>
                          <input type='text' required value={name} onChange={(e)=>setName(e.target.value) } />
                      </div>
                      <div className='new-Password'>
                          <p className='input-label'>Email<span className='req-RP'>*</span></p>
                          <input type='email' required value={email} onChange={(e)=>setEmail(e.target.value) } />
                      </div>
                      <div className='conf-Password'>
                      <label id='chooseImgLabel' for='profile-img-input'>
                         Profile Image
                      </label>
                      
                      <input id='profile-img-input' type='file' name='avatar' accept="image/*" onChange={registerDataChange} />
                      </div>
                      <div className='reset-passwordButt'>
                           <button type='submit'>update</button>
                         <Link to='/password/forgot'>Back</Link>
                      </div>
                      
                  </form>
        </div>

        </div>
      </div>
      </>
    
    </>
  )
}

export default UpdateProfile