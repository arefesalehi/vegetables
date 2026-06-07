import connectToDB from "@/configs/db";
import banModel from '@/models/ban'
export async function POST(req) {
    try {
       await connectToDB()
        const body = await req.json()
        const{email, phone}= body

        await banModel.create({email,phone})
        return Response.json({message:'user banned successfully'})

    } catch (error) {
        return Response.json({messgae:error},{status:500})
    }
    
}