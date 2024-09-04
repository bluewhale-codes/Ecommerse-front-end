import { StepLabel, Stepper, Typography ,Step } from '@material-ui/core'
import {  LibraryAdd, LocalShipping } from '@material-ui/icons'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import React from 'react'
import './Shipping.css';
const Checkoutsteps = ({activeStep}) => {
  const steps = [
     {
        label:<Typography>Shipping Details</Typography>,
        icon:<LocalShipping/>,
     },
     {
        label:<Typography>Confirm Order</Typography>,
        icon:<LibraryAdd/>,
     },
     {
        label:<Typography>Payment</Typography>,
        icon:<AccountBalanceIcon/>,
     }
  ];
  
  const stepStyles = {
     boxSizing:"border-box",
  }
  return (
   <>
    <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
           {steps.map((item,index)=>(
                 <Step key={index} active={activeStep === index ? true : false} completed={activeStep>=index ? true:false}>
                   <StepLabel style={{
                     color: activeStep >= index ? "rgba(2, 112, 255,1)" : "rgba(0,0,0,0.649)",
                   }} icon={item.icon}>{item.label}</StepLabel>
                 </Step>
            ))}
    </Stepper>
   </>
  )
}


export default Checkoutsteps