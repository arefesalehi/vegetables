import connectToDB from "@/configs/db";
import cartModel from '@/models/cart'

export async function POST(req){
    try {
       await connectToDB()
        const body = await req.json()
        const{user, product}= body

        const cart = await cartModel.findOne({user, product})
        if(!cart){
            await cartModel.create({user, product})
        }

        return Response.json({message:'product added to cart successfully'}, {status:201})



    } catch (error) {
        return Response.json({message:error}, {status:500})
        
    }
}