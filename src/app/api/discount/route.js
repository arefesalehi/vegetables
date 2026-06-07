import connectToDB from '@/configs/db'
import discountModel from '@/models/discount'

export async function POST(req) {
  try {
  await  connectToDB()
    const body = await req.json()
    const { code, percent, maxUse } = body
    await discountModel.create({ code, percent, maxUse })
    

    return Response.json({ message: 'discount created successfully' })
  } catch (error) {
    return Response.json({ message: error }, { status: 500 })
  }
}

export async function DELETE(req) {
  try {
   await connectToDB()
    const body = await req.json()
    const { id } = body
    await discountModel.findOneAndDelete({ _id: id })

    return Response.json({ message: 'discount removed successfully' })
  } catch (error) {
    return Response.json({ message: error }, { status: 500 })
  }
}
