import React, { useEffect ,useState } from 'react'
import { useSelector ,useDispatch  } from 'react-redux'
import './sidebar.css'
import { DataGrid } from '@mui/x-data-grid';
import { Link , useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getAllReviews , deleteReviews } from '../../actions/productAction';
import Sidebar from './Sidebar'
import { Alert } from '@mui/material';
import { DELETE_PRODUCT_RESET, DELETE_REVIEW_RESET } from '../../constants/productConstatns';
import Loader from '../layout/Loaders/loader'

const ProductReview = () => {
  const dispatch = useDispatch();

  const {Reviews} = useSelector((state)=>state.productReview);
  const {isDeleted,loading} = useSelector((state)=>state.deleteReview);
  

  const [productId, setProductId] = useState("")
  
  useEffect(() => {
    

     if(isDeleted){
       alert('Delted succes')
       dispatch({type:DELETE_REVIEW_RESET})
       getAllReviews(productId)
     }
    
  }, [dispatch,isDeleted])
  
  const deleteReviewHandler = (id) => {
     dispatch(deleteReviews(id,productId));
  }

  const getReviewHandler = (e) =>{
    e.preventDefault();
    dispatch(getAllReviews(productId));
  }
  

  const columns = [
    {field:"id",headerName:"Review ID" , minWidth:200,flex:0.5},
    {field:"name",headerName:"Name" , minWidth:350,flex:0.3},
    {field:"comment",headerName:"Comment" , minWidth:150,flex:1},
    {field:"rating",headerName:"Rating" ,type:"number", minWidth:270,flex:0.5},
    {field:"action",headerName:"Actions" ,type:"number",sortable:false, minWidth:150,flex:0.3 ,sortable:false,renderCell:(params)=>{
      return (
        <>
         
          <Button onClick={()=>deleteReviewHandler(params.row.id)}>
             <DeleteIcon/>
          </Button>
        </>
      )
  }},

  ]
  const rows = []
  Reviews && Reviews.forEach((item,index) => {
    rows.push({
        id:item._id,
        name:item.name,
        comment:item.comment,
        rating:item.rating,
         
    })
});
  return (
   <>
   {loading ? <Loader/> :(

   <div className='dashboard'>
      <Sidebar/>
      <div className='productListContainer'>
       
        <form className='createProductForm' encType='multipart/form-data' onSubmit={getReviewHandler}>
            
            <h1>Update User Status</h1>
            <div className='productCategory'>
            
            <input type='text' value={productId} onChange={(e)=> setProductId(e.target.value)} />
            
            </div>
            
            
            <Button id='createProductBtn' type='submit' disabled={loading ? true : false || productId==="" ? true:false}>
               Search
            </Button>



        </form>
        <h1 id='productListHeading'>All Review</h1>
        {Reviews && Reviews.length > 0 ? <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableRowSelectionOnClick
          className='productListTable'
          autoHeight 
        />: <h1>No review Found</h1>}
      </div>
   </div>)}
   </>
  )
}



export default ProductReview