import connectToDB from "@/configs/db";
import wishlistModel from '@/models/wishlist'
export async function POST(req){
    try {
       await connectToDB()
        const body = await req.json()
        const{user, product}= body

        const wish = await wishlistModel.findOne({user, product})
        if(!wish){
            await wishlistModel.create({user, product})
        }

        return Response.json({message:'product added to wishlist successfully'}, {status:201})



    } catch (error) {
        return Response.json({message:error}, {status:500})
        
    }
}




