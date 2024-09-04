import React from 'react'
import './brand.css'
const BrandCard = ({image}) => {
  return (
    <>

     <div className='top-brand-card'>
         <div className='brandImg'>
             <img src={image.url}/>
         </div>
    </div>
     {/* <div className='top-brand-card'>
         <div className='brandImg'>
             <img src='https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover-958x575.png'/>
         </div>
    </div>
     <div className='top-brand-card'>
         <div className='brandImg'>
             <img src='https://images.template.net/wp-content/uploads/2015/09/15155625/Inspiring-Nike-Logos.jpg'/>
         </div>
    </div>
     <div className='top-brand-card'>
         <div className='brandImg'>
             <img src='https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/f537c69a-4be2-4484-d916-72dd1d2a6300/public'/>
         </div>
    </div>
     <div className='top-brand-card'>
         <div className='brandImg'>
             <img src='https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/f537c69a-4be2-4484-d916-72dd1d2a6300/public'/>
         </div>
    </div> */}
    
    </>
    
  )
}

export default BrandCard