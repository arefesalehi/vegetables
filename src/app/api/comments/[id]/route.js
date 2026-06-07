export async function DELETE(req){
 try {
 await connectToDB()
  const body = await req.json()
  const {id} = body

  await commentModel.findOneAndDelete({_id:id})
  return Response.json({message:'comment deleted successfully'})
 } catch (error) {
  return Response.json({message:error},{status:500})
  
 }
}