import connectToDB from '@/configs/db'
import userModel from '@/models/user'
export async function PUT(req) {
  try {
    await connectToDB()
    const body = await req.json()
    const { id } = body

    const user = await userModel.findOne({ _id: id }).lean()
    await userModel.findOneAndUpdate(
      { _id: id },
      { $set: { role: user.role === 'USER' ? 'ADMIN' : 'USER' } },
    )

    return Response.json({message:'user role updated successfully'})
  } catch (error) {
    return Response.json({ message: error }, { status: 500 })
  }
}
