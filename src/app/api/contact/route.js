import connectToDB from '@/configs/db'
import contactModel from '@/models/contact'
export async function POST(req) {
  try {
   await connectToDB()
    const reqBody = await req.json()
    const { name, email, subject, body } = reqBody

    await contactModel.create({
      name,
      email,
      subject,
      body,
    })

    return Response.json({message:'message saved successfully'},{status:201})
  } catch (error) {
    return Response.json({message:error},{status:500})
  }
}
