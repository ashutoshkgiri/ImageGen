import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import userModel from "../models/userModel.js";

import  razorpay from 'razorpay'
import transactionModel from "../models/transactionData.js";


const registerUser=async(req,res)=>{

    
   try{

    const {name,email,password}=req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            success:false,
            message:'Missing Details'
        })
    }

    const u=await userModel.findOne({email});

    if(u){
        res.status(200).json({
            message:"user already exist"
        })
    }

    const salt=  await bcrypt.genSalt(10);

    const  hashPassword=await bcrypt.hash(password,salt);

    const userData={
        name,
        email,
        password:hashPassword

    }
    const newUser=new userModel(userData)
    const user=await newUser.save();

    const token=jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.json({
        success:true,
        token,
        user:{name:user.name}
    })

   }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
   }



}

const loginUser=async(req,res)=>{

   try {

    const {email,password}=req.body;

    const user= await  userModel.findOne({email})

    if(!user){
      return  res.status(400).json({
           success:false,
           message:"user not found"
       })
    }

    const isMatch=await  bcrypt.compare(password,user.password)

    if(isMatch){
       const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
       res.json({
           success:true,
           token,
           user:{name:user.name}
       })
    }else{
       return res.json({ 
           success:false,
           message:'Invalid credentials'
       })
     

    }
    
   } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})

   }



}


 const userCredits=async(req,res)=>{

    try {

        const {userId}=req.body;

        const user=await userModel.findById(userId)
 
        res.json({
           success:true,
           credits:user.creditBalance ,
           user:{name:user.name}
        })

        
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
 }






export{loginUser,registerUser,userCredits,}

