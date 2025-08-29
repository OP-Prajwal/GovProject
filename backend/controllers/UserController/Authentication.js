const express=require('express')
const NormalUser=require('../../models/NomalUser.js')
const bcrypt=require('bcrypt')

const registerUser=async(req,res)=>{
    console.log(req.body)
    const {firstName,lastName,email,phone,password,state,city,agreeTerms}=req.body

    if(!firstName || !lastName || !email || !phone || !password || !state || !city || !agreeTerms){
        return res.status(400).json(message="some feild is empty")
    }

    
    const hashedpassword=await bcrypt.hash(password,10)
    console.log(hashedpassword)
    const user={
        firstName,lastName,email,phone,password:hashedpassword,state,city,agreeTerms
    }


    const userResponse=await NormalUser.create(user)

    if(!userResponse){
        return res.status(401).json({"message":"failed while creating user "})
    }

    return res.status(200).json({"message":"User Created ",userResponse})

}

const loginUser=async(req,res)=>{
    console.log(req.body)
    const {email,phone,password}=req.body
    if((!email && !phone) || !password){
        res.status(400).json({"message":"some feild is missing "})
    }

    const user=await NormalUser.findOne({$or:[{email:email},{phone:phone}]})
    if(!user) return res.status(401).json({message:"no user found "})
    
    const Check=await bcrypt.compare(password,user.password)

    if(!Check) return res.status(401).json({message:"password is not valid"})

    return res.status(200).json({message:"user authenticated ",user})    
        
}

module.exports={loginUser,registerUser}