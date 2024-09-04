import './App.css';
import Header from './component/layout/Header';
import Footer from './component/layout/FooterMain/Footer';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './component/layout/HomeMain/Home';
import ProductDetails from './component/layout/HomeMain/ProductDetails';
import AllProducts from './component/layout/HomeMain/AllProducts';
import Search from './component/layout/HomeMain/Search';
import WebFont from "webfontloader"
import React ,{useState} from 'react'
import Loginss from './component/User/loginss';
import store from './store'
import { loadUser } from './actions/userAction';
import Useroptions from './component/User/useroptions';
import { useSelector } from 'react-redux';
import Profile from './component/User/Profile';
import Profilesingle from './component/User/Profilesingle';
import { ProtectedAdminRoute , ProtectedRoute } from './component/Route/ProtectedRoute';
import UpdateProfile from './component/User/UpdateProfile';
import PasswordUpdate from './component/User/PasswordUpdate';
import ForgorPassword from './component/User/ForgorPassword';
import ResetPassword from './component/User/ResetPassword';
import Cart from './component/layout/Product/Cart';
import Shipping from './component/layout/Product/Shipping';
import Shipping2 from './component/layout/Product/shipping2';
import ConfirmOrder from './component/layout/Product/ConfirmOrder';
import ConfirmOrder2 from './component/layout/Product/ConfirmOrder2';
import PaymentWrap from './component/layout/Product/PaymentWrap';
import axios from 'axios';
import OrderSuccess from './component/layout/Product/orderSuccess';
import Orders from './component/layout/Product/Orders';
import OrderDetails from './component/layout/Product/OrderDetails';
import OrderDetailsWrap from './component/layout/Product/protection/OrderDetailsWrap';
import Dashboard from './component/admin/Dashboard';
import ProductList from './component/admin/ProductList';
import NewProduct from './component/admin/NewProduct';
import UpdateProduct from './component/admin/UpdateProduct';
import OrdersAdmin from './component/admin/OrdersAdmin';
import UpdateOrder from './component/admin/UpdateOrder';
import AllAdminUsers from './component/admin/AllAdminUsers';
import UpdateUser from './component/admin/UpdateUser';
import ProductReview from './component/admin/ProductReview';
import ShippingInfo from './component/User/ShippingInfo';
import UpdateShippInfo from './component/User/UpdateShippInfo';
import AddShippInfo from './component/User/AddShippInfo';
import { ProtectedshippInfoRoute } from './component/Route/ProtectedRoute';
import { getShippingInfo } from './actions/productAction';
import coursel from './component/TestFiles/coursel';
import PaymentA from './component/layout/Product/payment2';
import OrderDetailnew from './component/layout/Product/OrderDetailnew';
import BrandProductsPage from './component/layout/HomeMain/TopBrandProduct/BrandProductsPage';
import NewBrand from './component/admin/NewBrand';
import ProductGallery from './component/admin/ProductGallery';
import AdminOrderDetails from './component/admin/OrderDetails';
import ProductDetail from './component/admin/ProductDetail';
import BrandCollection from './component/admin/BrandCollection';
import BrandInfo from './component/admin/BrandInfo';
import ProductDetailPageTest from './component/layout/HomeMain/Testing/ProductDetailPageTest';
import { ProtectedProductDetail } from './component/Route/ProtectedRoute';
import MainAlert from './component/layout/Alerts/MainAlert';

function  App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },50000)
  }
  

  const {isAuthenticated,user} = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("")

  async function getStripeApiKey(){
    const {data} = await axios.get("api/v1/stripeapikey")
    setStripeApiKey(data.stripeApiKey)
  }
  React.useEffect(()=>{
  

    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    })
    store.dispatch(loadUser());
    // store.dispatch(getShippingInfo())
    
  },[])

    return (
      <Router>
          <Header/>
          <MainAlert alert={alert}/>
          {(isAuthenticated) && <Useroptions user={user}/>}
          <Routes>
          <Route exact path='/home' element ={<Home/>}/>
          <Route exact path='/:id' element ={<ProductDetails showAlert={showAlert}/>}/>
          <Route exact path='/admin/product/detail/:id' element ={<ProductDetail/>}/>
          <Route exact path='/admin/seller/detail' element ={<BrandInfo/>}/>
          <Route exact path='/products' element ={<AllProducts/>}/>
          <Route  path='/products/:keyword' element ={<AllProducts/>}/>
          {/* <Route  path='products/catagory/:catagory' element ={<AllProducts/>}/> */}
          <Route exact path='/search' element ={<Search/>}/>
          <Route exact path='/login' element ={<Loginss showAlert={showAlert}/> }/>
          {/* <ProtectedRoute exact path={'/profile'} element ={<Profile/>}/>  */}
          {/* <Route exact path={'/profile'} element ={<Profilesingle/>}/> */}
          <Route exact path={'/profile'} element={
                  <ProtectedRoute  isAuthenticated={isAuthenticated}>
                    <Profilesingle/>
                  </ProtectedRoute>
          }/>

          <Route exact path='/update' element={
               <ProtectedProductDetail user={user} isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user} isAuthenticated={isAuthenticated} showAlert={showAlert}/>
               </ProtectedProductDetail>
          }/>
          


          <Route exact path='/password/update' Component ={PasswordUpdate}/>
          <Route exact path='/password/forgot' Component ={ForgorPassword}/>
          <Route exact path='password/reset/:token' Component ={ResetPassword}/>
          <Route exact path='/cart' element={<Cart showAlert={showAlert}/>}/>
          <Route exact path='/login/shipping' Component ={Shipping2}/>
          <Route exact path='/order/confirm2'   element={
                  <ProtectedRoute  isAuthenticated={isAuthenticated}>
                    <ConfirmOrder/>
                  </ProtectedRoute> }
           />
          <Route exact path='/order/confirm'   element={
                  <ProtectedRoute  isAuthenticated={isAuthenticated}>
                    <ConfirmOrder2/>
                  </ProtectedRoute> }
           />
          <Route exact path='/process/payment' stripeApiKey={stripeApiKey} Component ={PaymentWrap}/>
          <Route exact path='/order/success' Component ={OrderSuccess}/>
          <Route exact path='/orders/me' element={
                  <ProtectedRoute  isAuthenticated={isAuthenticated}>
                    <Orders/>
                  </ProtectedRoute> } />
          <Route exact path='/order/details/:id' Component ={OrderDetailsWrap}/>
          <Route exact path='/order/detail/' Component ={AdminOrderDetails}/>
          <Route exact path='/admin/dashboard' Component={Dashboard}/>
          <Route exact path='/admin/product/' Component={ProductList}/>
          <Route exact path='/admin/product/gallary' Component={ProductGallery}/>
          <Route exact path='/admin/brand/collection' Component={BrandCollection}/>
          <Route exact path='/create/product/' Component={NewProduct}/>
          <Route exact path='/create/brand/' Component={NewBrand}/>
          <Route exact path='/admin/product/:id' Component={UpdateProduct}/>
          <Route exact path='/admin/orders/' Component={OrdersAdmin}/>
          <Route exact path='/admin/order/:id' Component={UpdateOrder}/>
          <Route exact path='/admin/users/' Component={AllAdminUsers}/>
          <Route exact path='/admin/user/update/:id' Component={UpdateUser}/>
          <Route exact path='/admin/review/' Component={ProductReview}/>
          <Route exact path='/add/ShippingInfo' element={<UpdateShippInfo showAlert={showAlert}/>}/>
          <Route exact path='/update/ShippingInfo/:id' element={<AddShippInfo showAlert={showAlert}/>}/>
          <Route exact path='/ShippingInfo' element={<ShippingInfo showAlert={showAlert}/>}/>
          <Route exact path='/test1/:id' Component={BrandProductsPage}/>
          <Route exact path='/payment' Component={PaymentA}/>




          {/* TESTING ROUTES */}
          <Route exact path='/productDetail/test1/:id' Component={ProductDetailPageTest}/>
          












          {/* <Route exact path='/ShippingInfo' element={
                  <ProtectedshippInfoRoute  isAuthenticated={isAuthenticated}>
                    <ShippingInfo/>
          </ProtectedshippInfoRoute> } />*/}
          </Routes> 
         
          <Footer/>
      </Router>
    );
  
}

export default App;
