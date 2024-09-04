import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loader from '../layout/Loaders/loader';
import "./profile.css"
const Profilesingle = () => {

  const {user,loading} = useSelector((state) => state.user)
  return (
    <>


         <div className='profile-data-wrapper'>
           <div className='Main-profile-container'>
              <div className='profile-image'>
                <img  src={user.avatar.url} alt='profile'/>
              </div>
              <div className='profile-description'>
                   <p>{user.name}</p>
                   <p>{user.email}</p> 
              </div>
              <div className='profileEdit'>
         <Link to='/update'>
             Edit Profile
           </Link>
              </div>
           </div>
           
           <div className='containerForMaintain'>
              
                <Link to='/orders/me'>
                <div className='profile-orders serviceBox'>
                   <div>
                       <img src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1693414776/QXZhdGFycy9wYXJjZWwtYm94ZXMtb25saW5lLWRlbGl2ZXJ5LWludGVybmV0LW9yZGVyaW5nLWNvbmNlcHRfNjg3MDgtMjI0NF95MTY2bXY=/grid_landscape'/>
                   </div>
                   <div>
                     <h3>Your Orders</h3>
                      <p>Track,return or buy thing Again</p>
                   </div>
                </div>
                </Link>
                  
                <Link to='/password/update'>
                <div className='profile-password serviceBox'>
                    <div>
                       <img src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1693415546/QXZhdGFycy9jeWJlci1zZWN1cml0eS0xOTE1NjI4Xzk2MF83MjBfcGF4bHFw/grid_landscape' />
                    </div>
                    <div>
                     <h3>Login & security</h3>
                     <p>Edit login,mobile no.,name</p>
                    </div>
                </div>
                </Link>

                <Link to='/ShippingInfo'>
                <div className='profile-address serviceBox'>
                    <div>
                      <img src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1693415625/QXZhdGFycy8yNC0yNDQ0NjRfc3RvcmUtbG9jYXRpb24taWNvbi1wbmctZG93bmxvYWQtb3JhbmdlLWFkZHJlc3MtaWNvbl93Ymdub28=/grid_landscape'/>
                    </div>
                    <div>
                      <h3>Your Address</h3>
                      <p>Edit Address for orders and gift</p>
                    </div>
                </div>
                </Link>
           </div>
         </div>
            {/* <div className='profileContainer'>
              <div>
                <h1>My Profile</h1>
                <img  src={user.avatar.url} alt='profile'/>
                <Link to='/update'>Edit Profile</Link>
              </div>
              <div className='user_details'>
                <div>
                    <h4>Full Name</h4>
                    <p>{user.name}</p>
                </div>
                <div>
                    <h4>Full Email</h4>
                    <p>{user.email}</p>
                </div>
                <div>
                    <h4>Join On</h4>
                    <p>{String(user.createdAt).substring(0,10)}</p>
                </div>
                <div className='user-order-password-btn'>
                  <Link to='/orders'>My Orders</Link>
                  <Link to='/password/update'>Change Password</Link>
                </div>

              </div>
            </div> */}
    </>
  )
}

export default Profilesingle