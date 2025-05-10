import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const BuyCredit = () => {

  const {user,backendUrl,loadCreditsData,token,setshowLogin}=useContext(AppContext)


 const navigate=useNavigate()

 const initPay=async(order)=>{
  const  options={
     key:import.meta.env.VITE_RAZORPAY_KEY_ID,
     amount:order.amount,
     currency:order.currency,
     name:'Credits Payments',
     description:'Credits Payment',
     order_id:order.id,
     receipt:order.receipt,
     handler:async(response)=>{
          consolelog(response);
     }


  }
  const rzp=new window.Razorpay(options)
  rzp.open();
   
 }

  const paymentRazorpay= async(planId)=>{
    try {
      if(!user){
        setshowLogin(true);
      }

      const data=await axios.post(backendUrl+'/api/user/pay-razor',{planId},{headers:{token}})

      if(data.success){
        initPay(data.order)
      }
      
    } catch (error) {
       toast.error(error.message)
    }
  }
  return (
    <div className='flex flex-col items-center p-6 bg-gray-100 min-h-screen'>
      <button className='px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700'>Our Plans</button>
      <h1 className='text-2xl font-semibold mt-4 mb-6 text-gray-800'>Choose the plan</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl'>
        {plans.map((item, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center'>
            <img src={assets.logo_icon} alt='' className='w-16 h-16 mb-4' />
            <p className='text-lg font-medium text-gray-700'>{item.id}</p>
            <p className='text-sm text-gray-500'>{item.desc}</p> 
            <p className='mt-2 text-lg font-semibold text-gray-900'>${item.price} / {item.credits} credits</p>
            <button onClick={()=>paymentRazorpay(item.id)} className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>{user?'Purchase':'Get Started'}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
