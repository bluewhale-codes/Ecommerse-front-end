import {Route,Navigate, useNavigate} from 'react-router-dom' 
import React from 'react'
import { useSelector } from 'react-redux';
import Loader from '../layout/Loaders/loader';
import LoaderTest from '../layout/Loaders/LoaderTest';
export const ProtectedRoute = ({ isAuthenticated , children }) => {
  const navigate = useNavigate
  const {loading} = useSelector((state) => state.user);
  if(loading){
    return <Loader/>
  }else{
    
    return (
      <>
         {isAuthenticated &&  (
           children
           ) }
      </>
  )
  }
  
  
};

// Protected Route for shipping info component
export const ProtectedshippInfoRoute = ({ isAuthenticated , children }) => {
  const navigate = useNavigate
  const {loading:loading1} = useSelector((state) => state.user)
  const {loading} = useSelector((state) => state.shippingAddress)

  
  if(loading && loading1){
    return <Loader/>
  }else{
    
    return (
      <>
         {isAuthenticated && (
           children
           ) }
      </>
  )
  }
};
export const ProtectedAdminRoute = ({children }) => {
  const navigate = useNavigate
  const {loading , isAuthenticated , user} = useSelector((state) => state.user);
  if(loading){
    return <Loader/>
  }else{
    
    return (
      <>
         {(user.role === "admin") ?  (
           children
           ) : navigate('/login') }
      </> 
  )
  }
};

export const ProtectedProductDetail = ({user,isAuthenticated,children}) =>{

    if(user && isAuthenticated){
       return children
    }else{
      return <LoaderTest/>
    }
  
}



