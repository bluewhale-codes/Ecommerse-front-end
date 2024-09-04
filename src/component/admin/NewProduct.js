import React ,{useRef ,useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate,useLocation } from 'react-router-dom'; 
import { useDispatch,useSelector } from 'react-redux'
import { newProduct , clearErrors} from '../../actions/productAction'
import { Button } from '@mui/material';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StorageIcon from '@mui/icons-material/Storage';
import Loader from '../layout/Loaders/loader';
import Sidebar from './Sidebar'
import { NEW_PRODUCT_RESET } from '../../constants/productConstatns';
import './newProduct.css'
import { Alert } from '@mui/material';
import { getAllBrand } from '../../actions/productAction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const NewProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading , error , success} = useSelector((state)=>state.newProduct)
    const {Brands} = useSelector((state)=>state.brands)

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [discountPrice,setDiscountPrice] = useState("")
    const [description, setDescription] = useState("")
    const [stock, setStock] = useState(0)
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [errora, setErrora] = useState(false)
    const [images, setImages] = useState([])
    const [imagesPreview, setImagesPreview] = useState([])

    const categories =[
        "Clothes",
        "Shoose",
        "Accessories",
        "Electronics",
    ]
 
     useEffect(() => {
       
        if(success){
            navigate('/admin/dashboard')
            dispatch({type:NEW_PRODUCT_RESET})
        }
        dispatch(getAllBrand());
     }, [dispatch,navigate,success])
     

     const createFormSubmitHandler = (e)=>{
           e.preventDefault();
           const myForm = new FormData();
           myForm.set("name",name);
           myForm.set("Price",price);
           myForm.set("dPrice",discountPrice)
           myForm.set("description",description);
           myForm.set("catagory",category);
           myForm.set("Brand",brand);
           myForm.set("Stock",stock);
           images.forEach((image)=>{
            myForm.append("images",image)
           })
           console.log(myForm.get("images"))
           
     };
     const createProductImageChanage = (e) =>{
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([])
        files.forEach((file)=>{
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2){
                    setImagesPreview((old)=>[...old,reader.result]);
                    setImages((old)=>[...old,reader.result])
                }
            }
            reader.readAsDataURL(file);
        })
     }




  return (
    <>
     {loading ? <Loader/> :(
       <div className='dashboard'>
        <Sidebar/>
        <div className='newProductContainer'>
                  <div className='container-header'>
                          <div>
                              <span><ArrowBackIcon/></span>
                              <h1>New Product</h1>
                              
                          </div>
                          <div>
                              <span><DeleteOutlineIcon/></span>
                          </div>
                  </div>
                  {/* <form encType='multipart/form-data' onSubmit={createFormSubmitHandler}>
                  <div className='new-product-form'>
                      <div className='Form-left-container'>
                              <div className='form-input-container'>
                                    <p>Description</p>
                                    <div>
                                            <div className='input-wrapper'>
                                                <label>Product name</label>
                                                <input type='text' name='name' placeholder='Product Name' required value={name} onChange={(e)=> setName(e.target.value) } />
                                                 
                                            </div>
                                            <div className='input-wrapper'>
                                                <label>Product Description</label>
                                                <textarea placeholder='Product description' value={description} onChange={(e)=> setDescription(e.target.value)} cols="30" rows="1"></textarea>
                                                
                                            </div>
                                    </div>
                              </div>
                              <div className='form-input-container'>
                                    <p>Price</p>
                                      <div>
                                              <div className='input-wrapper'>
                                                  <label>Product MRP</label>
                                                  <input type='number' name='price' placeholder='Original MRP' required value={price} onChange={(e)=> setPrice(e.target.value) } />
                                                  
                                              </div>
                                              <div className='input-wrapper'>
                                                  <label>Product Discount Price</label>
                                                  <input type='number'/>
                                              </div>
                                      </div>
                              </div>
                              <div className='form-input-container'>
                                  <p>Catagory</p>
                                    <div>
                                            <div className='input-wrapper'>
                                                <label>Product Catagory</label>
                                                <select onChange={(e)=>setCategory(e.target.value)}>
                                                  <option value="">Choose Category</option>
                                                  {categories.map((cate)=>(
                                                    <option key={cate} value={cate}>{cate}</option>)
                                                  )}
                                                </select>
                                            </div>
                                            <div className='input-wrapper'>
                                                <label>Product Discount Price</label>
                                                <input type='number' name='price' placeholder='Discount Price' required value={discountPrice} onChange={(e)=> setDiscountPrice(e.target.value) } />
                                                
                                            </div>
                                    </div>
                              </div>
                      </div>
                      <div className='Form-right-container'>
                              <div className='form-input-container'>
                                    <p>Product Images</p>
                                    <div className='image-input-container'>
                                            <div>
                                                <img src='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                                            </div>
                                            <div className='input-wrapper'>
                                                <label for='productImage'>Choose image</label>
                                                <input id='productImage' multiple type='file' name='avatar' onChange={createProductImageChanage} accept='image/*'/>
                                                
                                            </div>
                                            <div>
                                              <img src='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/> 
                                            </div>
                                    </div>
                              </div>
                              <div className='form-input-container'>
                                    <p>Product Brand Name</p>
                                    <div className='input-wrapper'>
                                          <label>Choose Brand</label>
                                          <select onChange={(e)=>setBrand(e.target.value)}>
                                            <option value="">Choose Brand</option>
                                            {Brands.map((brand,index)=>(
                                              <option key={index} value={brand._id}>{brand.name}</option>)
                                            )}
                                          </select>
                                    </div>
                              </div>
                              <div className='form-input-container'>
                                    <p>Product Stock</p>
                                    <div className='input-wrapper'>
                                          <label>Stock Available</label>
                                          <input type='number' name='Stock' placeholder='Stock' required value={stock} onChange={(e)=> setStock(e.target.value) } />
                                          
                                    </div>
                              </div>
                            
                              <div className='form-button'>
                                  <button type='submit' disabled={loading ? true : false}>Create Product</button>
                              </div>
                             
                      </div>
                  </div>
                  </form> */}





            <form className='createProductForm' encType='multipart/form-data' onSubmit={createFormSubmitHandler}>
            
                <h1>Create Product</h1>
                <div className='productName'>
                <SpellcheckIcon/>
                <input type='text' name='name' placeholder='Product Name' required value={name} onChange={(e)=> setName(e.target.value) } />
                </div>

                <div className='productPrice'>
                <AttachMoneyIcon/>
                <input type='number' name='price' placeholder='Original MRP' required value={price} onChange={(e)=> setPrice(e.target.value) } />
                </div>
                <div className='productDiscountPrice'>
                <AttachMoneyIcon/>
                <input type='number' name='price' placeholder='Discount Price' required value={discountPrice} onChange={(e)=> setDiscountPrice(e.target.value) } />
                </div>
                <div className='productDesc'>
                 <DescriptionIcon/>
                <textarea placeholder='Product description' value={description} onChange={(e)=> setDescription(e.target.value)} cols="30" rows="1">

                </textarea>
                </div>

                <div className='productCategory'>
                <AccountTreeIcon/>
                <select onChange={(e)=>setCategory(e.target.value)}>
                  <option value="">Choose Category</option>
                  {categories.map((cate)=>(
                    <option key={cate} value={cate}>{cate}</option>)
                  )}
                </select>
                
                </div>
                <div className='productCategory'>
                <AccountTreeIcon/>
                <select onChange={(e)=>setBrand(e.target.value)}>
                  <option value="">Choose Brand</option>
                  {Brands.map((brand,index)=>(
                    <option key={index} value={brand._id}>{brand.name}</option>)
                  )}
                </select>
                
                </div>
                <div className='productStock'>
                     <StorageIcon/>
                     <input type='number' name='Stock' placeholder='Stock' required value={stock} onChange={(e)=> setStock(e.target.value) } />

                </div>
                <div id='createProductformFile'>
                    <input multiple type='file' name='avatar' onChange={createProductImageChanage} accept='image/*'/>
                </div>
                <div id='createProductformImage'>
                    {imagesPreview.map((image,index)=>(
                        <img key={index} src={image} alt='avatar Preview'/>
                    ))}
                </div>
                <Button id='createProductBtn' type='submit' disabled={loading ? true : false}>
                   c
                </Button>



            </form>
        </div>
     </div>
     )}
    </>
  )
}

export default NewProduct