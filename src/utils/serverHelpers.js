const { cookies } = require("next/headers")
const { verifyAccessToken } = require("./auth")
import connectToDB from '@/configs/db'
import userModel from '@/models/user'

const authUser=async()=>{
    connectToDB()
    const token = cookies().get('token')
    let user=null

    if(token){
        const tokenPayload = verifyAccessToken(token.value)
        if(tokenPayload){
            user = await userModel.findOne({email:tokenPayload.email})
          }
    }

    return user
}

const authAdmin=async()=>{
    connectToDB()
    const token = cookies().get('token')
    let user=null

    if(token){
        const tokenPayload = verifyAccessToken(token.value)
        if(tokenPayload){
            user = await userModel.findOne({email:tokenPayload.email})
            if(user.role === "ADMIN"){
                return user
            }else{
                return null
            }
          }else{
            return null
          }
    }else{
        return null
    }

    return user
}

export {authUser, authAdmin}