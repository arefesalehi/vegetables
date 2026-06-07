import connectToDB from "@/configs/db";
import discountModel from '@/models/discount'
export async function PUT(req){
    try {
       await connectToDB()
        const body = await req.json()
        const {code}= body

       const discount= await discountModel.findOne({code})
       await discountModel.findOneAndUpdate({code}, {$inc:{uses:1}})

        if(!discount){
            return Response.json({message:'code not found'},{status:404})
        }else if(discount.uses === discount.maxUse){
            return Response.json({message:'code usage limit'},{status:422})


        }else{
            return Response.json(discount)
        }

    } catch (error) {
        return Response.json({message:error},{status:500})
    }
}