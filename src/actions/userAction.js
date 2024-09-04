import { DELETE_ORDERS_FAIL } from "../constants/orderConstant";
import { LOGIN_REQUEST ,
        LOGIN_SUCCESS ,
        LOGIN_FAIL,
        CLEAR_ERRORS,
        REGISTER_USER_SUCCESS,
        REGISTER_USER_FAIL,
        REGISTER_USER_REQUEST,
        LOAD_USER_REQUEST,
        LOAD_USER_SUCCESS,
        LOAD_USER_FAIL,
        LOGOUT_SUCCESS,
        LOGOUT_FAIL,
        UPDATE_PROFILE_REQUEST,
        UPDATE_PROFILE_RESET,
        UPDATE_PROFILE_SUCCESS,
        UPDATE_PROFILE_FAIL,
        UPDATE_PASSWORD_REQUEST,
        UPDATE_PASSWORD_SUCCESS,
        UPDATE_PASSWORD_RESET,
        UPDATE_PASSWORD_FAIL,
        FORGOT_PASSWORD_SUCCESS,
        FORGOT_PASSWORD_REQUEST,
        FORGOT_PASSWORD_FAIL,
        RESET_PASSWORD_FAIL,
        RESET_PASSWORD_SUCCESS,
        RESET_PASSWORD_REQUEST,
        ALL_USERS_REQUEST,
        ALL_USERS_SUCCESS,
        ALL_USERS_FAIL,
        USER_DETAILS_REQUEST,
        USER_DETAILS_SUCCESS,
        USER_DETAILS_FAIL,
        UPDATE_USER_REQUEST,
        UPDATE_USER_SUCCESS,
        UPDATE_USER_FAIL,
        UPDATE_USER_RESET,
        DELETE_USER_REQUEST,
        DELETE_USER_SUCCESS,
        DELETE_USER_FAIL,
        DELETE_USER_RESET,
     } from "../constants/userConstant"
import axios from "axios";

// log in Action
export const login = (email,password)=> async(dispatch)=>{
    try {
      dispatch({
         type:LOGIN_REQUEST
      })

      const config = {headers:{"Content-Type":"application/json"}}
      let link  = `/api/v1/login`
      const {data} = await axios.post(link,{email,password},config);
 
     dispatch({
         type:LOGIN_SUCCESS,
         payload:data.user,
     })
    } catch (error) {
       dispatch({
           type:LOGIN_FAIL,
           payload:error.response.data.message
       });
    }
 }

 // LOAD USER
 export const loadUser = ()=> async(dispatch)=>{
    try {
      dispatch({
         type:LOAD_USER_REQUEST
      })
      let link  = `/api/v1/me`
      const {data} = await axios.get(link);
 
     dispatch({
         type:LOAD_USER_SUCCESS,
         payload:data.user,
     })
    } catch (error) {
       dispatch({
           type:LOAD_USER_FAIL,
           payload:error.response.data.message
       });
    }
 };

// REGISTER USER
export const register = (userData)=> async(dispatch)=>{
    try {
      dispatch({
         type:REGISTER_USER_REQUEST
      })
      const config = {
        headers: {
            "Content-Type":"application/json"
        },
      };
      let link  = `/api/v1/resiter/test`
      console.log(userData.get("password"));
      const {data} = await axios.post(link,userData,config);
      
        
     dispatch({
         type:REGISTER_USER_SUCCESS,
         payload:data.user,
     })
    } catch (error) {
       dispatch({
           type:REGISTER_USER_FAIL,
           payload:error.response.data.message
       });
    }
 };
export const registerTest = (userData)=> async(dispatch)=>{
    try {
      dispatch({
         type:REGISTER_USER_REQUEST
      })
      const config = {headers:{"Content-Type":"application/json"}}
 
      const {data} = await axios.post("/api/v1/resiter/test",userData,config);
      
     
 
     dispatch({
         type:REGISTER_USER_SUCCESS,
         payload:data.user,
     })
    } catch (error) {
       dispatch({
           type:REGISTER_USER_FAIL,
           payload:error.response.data.message
       });
    }
 };

 // LOGOUT USER
 export const logout = (userData)=> async(dispatch)=>{
   try {
     let link  = `/api/v1/logout`
     await axios.get(link);

    dispatch({
        type:LOGOUT_SUCCESS
    })
   } catch (error) {
      dispatch({
          type:LOGOUT_FAIL,
          payload:error.response.data.message
      });
   }
};

// Update User
// REGISTER USER
export const updateProfile = (userData)=> async(dispatch)=>{
    try {
      dispatch({
         type:UPDATE_PROFILE_REQUEST
      })

      const config = {headers:{"Content-Type":"application/json"}}
      let link  = `/api/v1/me/update`
      const {data} = await axios.put(link,userData,config);
 
     dispatch({
         type:UPDATE_PROFILE_SUCCESS,
         payload:data.user,
     })
    } catch (error) {
       dispatch({
           type:UPDATE_PROFILE_FAIL,
           payload:error.response.data.message
       });
    }
 };

 // Update password
export const updatePassword = (passwords)=> async(dispatch)=>{
    try {
      dispatch({
         type:UPDATE_PASSWORD_REQUEST
      })

      for (const value of passwords.values()) {
        console.log(value);
      }

      const config = {headers:{"Content-Type":"application/json"}}
      let link  = `/api/v1/password/update`
      const {data} = await axios.put(link,passwords,config);
 
     dispatch({
         type:UPDATE_PASSWORD_SUCCESS,
         payload:data.success,
     })
    } catch (error) {
       dispatch({
           type:UPDATE_PASSWORD_FAIL,
           payload:error.response.data.message
       });
    }
 };

// log in Action
export const forgotAPassword = (email)=> async(dispatch)=>{
    try {
      dispatch({
         type:FORGOT_PASSWORD_REQUEST
      })

      const config = {headers:{"Content-Type":"application/json"}}
      let link  = `/api/v1/password/forgot`
      const {data} = await axios.post(link,email,config);
 
     dispatch({
         type:FORGOT_PASSWORD_SUCCESS,
         payload:data.message,
     })
    } catch (error) {
       dispatch({
           type:FORGOT_PASSWORD_FAIL,
           payload:error.response.data.message
       });
    }
 }
export const resetAPassword = (token,passwords)=> async(dispatch)=>{
    try {
      dispatch({
         type:RESET_PASSWORD_REQUEST
      })

      const config = {headers:{"Content-Type":"application/json"}}
      let link  = `/api/v1/password/reset/${token}`
      const {data} = await axios.put(link,passwords,config);
 
     dispatch({
         type:RESET_PASSWORD_SUCCESS,
         payload:data.success,
     })
    } catch (error) {
       dispatch({
           type:RESET_PASSWORD_FAIL,
           payload:error.response.data.message
       });
    }
 }

 // ALL USERS -- ADMIN
export const getAllUser = ()=> async(dispatch)=>{
    try {
      dispatch({
         type:ALL_USERS_REQUEST
      })

      let link  = "/api/v1/admin/users"
      const {data} = await axios.get(link);
 
     dispatch({
         type:ALL_USERS_SUCCESS,
         payload:data.users,
     })
    } catch (error) {
       dispatch({
           type:ALL_USERS_FAIL,
           payload:error.response.data.message
       });
    }
 }
 // User detail -- ADMIN
 export const getUserDetail = (id)=> async(dispatch)=>{
    try {
      dispatch({
         type:USER_DETAILS_REQUEST
      })

      let link  = `/api/v1/admin/user/${id}`
      const {data} = await axios.get(link);
 
     dispatch({
         type:USER_DETAILS_SUCCESS,
         payload:data.user,
     })
    } catch (error) {
       dispatch({
           type:USER_DETAILS_FAIL,
           payload:error.response.data.message
       });
}
}

export const updateUserRole = (id,Role)=> async(dispatch)=>{
    try {
      dispatch({
         type:UPDATE_USER_REQUEST
      })

      const config = {headers:{"Content-Type":"application/json"}}
      let link  = `/api/v1/admin/user/${id}`
      const {data} = await axios.put(link,Role,config);
 
     dispatch({
         type:UPDATE_USER_SUCCESS,
         payload:data.success,
     })
    } catch (error) {
       dispatch({
           type:UPDATE_USER_FAIL,
           payload:error.response.data.message
       });
    }
 }

 // DELETE USER ---ADMIN
 export const deleteuser = (id)=> async(dispatch)=>{
     try {
       dispatch({
          type:DELETE_USER_REQUEST
       })

       let link  = `/api/v1/admin/user/${id}`
       const {data} = await axios.delete(link);
 
      dispatch({
          type:DELETE_USER_SUCCESS,
          payload:data,
      })
     } catch (error) {
        dispatch({
            type:DELETE_USER_FAIL,
            payload:error.response.data.message
        });
     }
  }


//CLEAR ERRORS
export const clearErrors = ()=> async(dispatch)=>{ 
    dispatch({type:CLEAR_ERRORS})
}

