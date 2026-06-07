import connectToDB from '@/configs/db'
import commentModel from '@/models/comment'
import productModel from '@/models/product'
export async function POST(req) {
  try {
   await connectToDB()
    const reqbody = await req.json()
    const { username, body, score, email, productID } = reqbody

    const comment = await commentModel.create({
      username,
      body,
      score,
      email,
      productID,
    })


    const updatedProduct = await productModel.findOneAndUpdate(
      { _id: productID },
      { $push: { comments: comment._id } },
    )

    return Response.json(
      { message: 'comment created successfully', data: comment },
      { status: 201 },
    )
  } catch (error) {
    return Response.json({ message: error }, { status: 500 })
  }
}

export async function GET() {
     await connectToDB()
  const comments = await commentModel.find({}, '-_v')
  return Response.json(comments)
}

export async function DELETE(req){
 try {
  connectToDB()
  const body = await req.json()
  const {id} = body

  await commentModel.findOneAndDelete({_id:id})
  return Response.json({message:'comment deleted successfully'})
 } catch (error) {
  return Response.json({message:error},{status:500})
  
 }
}
