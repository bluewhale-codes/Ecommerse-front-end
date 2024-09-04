import { StepLabel, Stepper, Typography ,Step } from '@material-ui/core'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BadgeIcon from '@mui/icons-material/Badge';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import React from 'react'
import './Shipping.css';
const CheckoutStepProfile = ({activeStep}) => {
  const steps = [
     {
        label:<Typography>Personel Info</Typography>,
        icon:<BadgeIcon/>,
     },
     {
        label:<Typography>Secuirity</Typography>,
        icon:<LockPersonIcon/>,
     },
     {
        label:<Typography>Address</Typography>,
        icon:<LocalShippingIcon/>,
     }
  ];
  
  const stepStyles = {
     boxSizing:"border-box",
  }
  return (
   <>
    <Stepper id='profile-stepper' alternativeLabel activeStep={activeStep} style={stepStyles}>
           {steps.map((item,index)=>(
                 <Step key={index} active={activeStep === index ? true : false} completed={activeStep>=index ? true:false}>
                   <StepLabel onClick={()=>alert("hello world")} style={{
                     color: activeStep >= index ? "rgba(0,0,0,0.649)" : "rgba(0,0,0,0.649)",
                   }} icon={item.icon}>{item.label}</StepLabel>
                 </Step>
            ))}
    </Stepper>
   </>
  )
}


export default CheckoutStepProfile

