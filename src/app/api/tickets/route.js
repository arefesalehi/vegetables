import connectToDB from '@/configs/db'
import ticketModel from '@/models/ticket'
import { authUser } from '@/utils/serverHelpers'

export async function POST(req) {
  try {
   await connectToDB()
    const user = await authUser()
    const reqBody = await req.json()
    const {
      title,
      body,
      department,
      subDepartment,
      priority,
    } = reqBody



    await ticketModel.create({
      title,
      body,
      user: user._id,
      department,
      subDepartment,
      priority,

      
    })

    return Response.json(
      { message: 'ticket saved successfully' },
      { status: 201 },
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
    await ticketModel.findOneAndDelete({ _id: id })
    return Response.json({ message: 'ticket removed successfully' })
  } catch (error) {
    return Response.json({ message: error }, { status: 500 })
  }
}
