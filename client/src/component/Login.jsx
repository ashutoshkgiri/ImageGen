import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import axios from "axios"
import { toast } from 'react-toastify';

const Login = () => {
    const[state,setState]=useState('Login');

    const  {setShowLogin,backendUrl,setToken,setUser}=useContext(AppContext);
    

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')



  const onSumbitHandler=async(e)=>{
    e.preventDefault();
    try {
      if(state==='Login'){
       const {data}= await axios.post(backendUrl+'/api/user/login',{email,password})
          
       if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token',data.token)
          setShowLogin(false);

       }else{
        toast.error(data.message);
          
       }
      }else{

        const {data}= await axios.post(backendUrl+'/api/user/register',{name,email,password})

        console.log(data);
          
        if(data.success){
           setToken(data.token)
           setUser(data.user)
           localStorage.setItem('token',data.token)
           setShowLogin(false);
 
        }else{
         toast.error(data.message);
           
        }

      }
      
    } catch (error) {
      toast.error(error.message);
      
    }
  }



    useEffect(()=>{
       document.body.style.overflow='hidden';
       return ()=>{
        document.body.style.overflow='unset';
       }
    })

  return ( 
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <form onSubmit={onSumbitHandler} className='bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col items-center relative'>
        <h1 className='text-2xl font-semibold text-gray-800 mb-2'>{state}</h1>
        <p className='text-gray-600 text-sm mb-6 text-center'>Welcome back! Please sign in to continue</p>

        {state!=='Login' && 
                <div className='w-full flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-4'>
                <img src={assets.user_icon} alt='' className='w-5 h-5 mr-3' />
                <input onChange={e=>setName(e.target.value)} value={name} type='text' placeholder='Full Name' required className='w-full outline-none text-gray-700' />
              </div>
       }
        <div className='w-full flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-4'>
          <img src={assets.email_icon} alt='' className='w-5 h-5 mr-3' />
          <input onChange={e=>setEmail(e.target.value)} value={email}  type='email' placeholder='Email id' required className='w-full outline-none text-gray-700' />
        </div>

        <div className='w-full flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-6'>
          <img src={assets.lock_icon} alt='' className='w-5 h-5 mr-3' />
          <input onChange={e=>setPassword(e.target.value)} value={password}  type='password' placeholder='Password' required className='w-full outline-none text-gray-700' />
        </div>

        <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot password?</p>
        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state==='Login'?'login':'create account'} </button>
        
        {state==='Login' ? <p className='mt-5 text-center'>Don't have an account?
        <span className='text-blue-600 cursor-pointer' onClick={()=>{setState('Sign Up')}}> Sign up</span>
        </p>

        :

        <p className='mt-5 text-center'>Already have an account?
        <span className='text-blue-600 cursor-pointer' onClick={()=>{setState('Login')}}> Login</span>
        </p>
      }   

        <img src={assets.cross_icon} alt='' className='absolute top-5 right-5 cursor-pointer w-6 h-6' onClick={()=>{setShowLogin(false)}} />

      </form>
    </div>
  )
}

export default Login