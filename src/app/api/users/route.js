import connectToDB from '@/configs/db'
import { authUser } from '@/utils/serverHelpers'
import userModel from '@/models/user'

export async function POST(req) {
  try {
  await  connectToDB()
    const user = await authUser()
    const body = await req.json()
    const { name, phone, email } = body

    await userModel.findOneAndUpdate(

      { _id: user._id },
      { $set: { name, phone, email } },
    )

    return Response.json(
      { message: 'user updated successfully' },
      { status: 200 },
    )
  } catch (error) {
    return Response.json({ message: error }, { status: 500 })
  }
}

export async function DELETE(req) {
  try {
    await connectToDB()
    const body = await req.json()
    const { id } = body
    await userModel.findOneAndDelete({ _id: id })
    return Response.json({ message: 'user removed successfully' })
  } catch (error) {
    return Response.json({ message: error }, { status: 500 })
  }
}
