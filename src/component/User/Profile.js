import React from 'react'
import { useSelector } from 'react-redux';
import Loader from '../layout/Loaders/loader';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom'
import Profilesingle from './Profilesingle';
const Profile = () => {
  const navigate = useNavigate()
  const {user,loading,isAuthenticated} = useSelector((state) => state.user)
  // const {status} = useSelector((state) => state.loginStatus)
   useEffect(() => {

      if(!isAuthenticated){
        navigate('/login')
      }

    //  if(status){
    //     window.location.reload(false);
    //  }
     
   }, )
  
  return (
     <>
        {isAuthenticated ? (
          <Profilesingle user={user}/>
        ):<Loader/>}
     </>
  )
}

export default Profile