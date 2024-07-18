import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import { color } from '../Product/FilterData'

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Deliveried"
  
]
const OrderTraker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((lable)=> <Step>
                <StepLabel sx={{color:"#9155FD", fontSize:"44px"}}>{lable}</StepLabel>
            </Step>)}
        </Stepper>

    </div>
  )
}

export default OrderTraker