import React ,{useRef ,useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./loginSignup.css";
import MainLoader from '../layout/Loaders/MainLoader'
import { useNavigate,useLocation } from 'react-router-dom'; 
import { useDispatch,useSelector } from 'react-redux'
import { login , clearErrors , register,registerTest} from '../../actions/userAction'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';

const Loginss = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    

    const {isAuthenticated,loading,registerError} = useSelector(state => state.user)
    // const {registerError} = useSelector(state => state.registerStatus)
    const {error} = useSelector(state => state.loginStatus)
    const LoginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);
   
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [getError, setError] = useState("")
    
    const [user, setUser] = useState({
      name:"",
      email:"",
      password:""
    });
    const redirect = location.search ? location.search.split("=")[1]:'/profile'
    console.log(redirect)
     useEffect(() => {
       if(isAuthenticated){
        navigate(redirect);
       }
     }, [navigate,isAuthenticated,redirect])
    
    if(error){
       setError(error);
       props.showAlert(error,'error')
       dispatch(clearErrors())
    }
    

    if(registerError){
      props.showAlert(registerError,'error')
      dispatch(clearErrors())
    }
    

    const { name,email,password} = user;
    const [avatar, setAvatar] = useState()
    const [avatarPreview, setAvatarPreview] = useState("/logo512.png")

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
      }else{
          setUser({...user,[e.target.name]:e.target.value})
      }
    };

    const switchTabs =(e,tab) =>{
         if(tab==='login'){
            switcherTab.current.classList.add('shiftToNeutral');
            switcherTab.current.classList.remove('shiftToRight');

            registerTab.current.classList.remove('shiftToNeutralForm');
            LoginTab.current.classList.remove('shiftToLeft');
         }
         if(tab==='register'){
            switcherTab.current.classList.add('shiftToRight');
            switcherTab.current.classList.remove('shiftToNeutral');

            registerTab.current.classList.add('shiftToNeutralForm');
            LoginTab.current.classList.add('shiftToLeft');
         }
    };

    const loginSubmit =  (e) =>{
        e.preventDefault();
        dispatch(login(loginEmail,loginPassword));
    }
    

   
    
    
    const registerSubmit = (e)=>{
      e.preventDefault();
      const myForm = new FormData();
      myForm.set("name",name)
      myForm.set("email",email)
      myForm.set("password",loginPassword)
      myForm.set("avatar",avatar)
      dispatch(registerTest(myForm))
    }
    function closeErrorBox(){
      setError(null)
    }
    

  return (
    <>
    
      <div className='login-container'>
      <div className='loginsignupBox'>
           {loading && <MainLoader/>}
           <div>
              <div className='loginSignUp-toggle'>
                  <p onClick={(e)=>{switchTabs(e,'login')}}>LOGIN</p>
                  <p onClick={(e)=>{switchTabs(e,'register')}}>Hello this is vishal</p>
              </div>
              <button ref={switcherTab}></button>
           </div>
           
           
            
           <form className='loninForm' ref={LoginTab} onSubmit={loginSubmit}>
                  <h3>Hey ,Enter your detail to get sign in to your account </h3>
                  <div className='loginEmail'>
                    
                    <input type='email' placeholder='Enter Email' required  value={loginEmail} onChange={(e)=> setLoginEmail(e.target.value) } />
                  </div>
                  <div className='loginPassword'>
                    <input type='password' placeholder='password'  required value={loginPassword} onChange={(e)=> setLoginPassword(e.target.value) } />
                  </div>
                  
                  <Link to='/password/forgot'>Forget Password?</Link>
                  
                  <input  type='submit' value='Login' className='loginBtn'/>
           </form>

           <form className='signUpForm' ref={registerTab} encType='multipart/form-data' onSubmit={registerSubmit}>

                  <div className='signUpName'>
                    
                    <input type='text' name='name' placeholder='Enter name' required value={name} onChange={registerDataChange } />
                  </div>

                  <div className='signUpEmail'>
                    
                    <input type='email' name='email' placeholder='Enter Email' value={email} onChange={registerDataChange} />
                  </div>
                  <div className='signUpPassword'>
                  
                    <input type='password' placeholder='Enter Password' name='password' required  onChange={(e)=> setLoginPassword(e.target.value) } />
                  </div>

                  <div id='registerImage'>
                  
                    <img src={avatarPreview} alt='avatarPreview'/>
                    <input type='file' name='avatar' accept="image/*" onChange={registerDataChange} />
                  </div>

                  <input
                    type='submit' value='Register' className='signUpBtn'
                  />

           </form>
      </div>
   </div>
    
    </>
  )
}

export default Loginss