import connectToDB from '@/configs/db'
import departmentModel from '@/models/department'
export async function POST(req) {
  try {
   await connectToDB()
    const body = await req.json()
    const{title}=body

    await departmentModel.create({title})
    return Response.json({message:'department created successfully'},{status:201})
  } catch (error) {
    return Response.json({message:error},{status:500})

  }
}

export async function GET(){
     await connectToDB()
  const departments = await departmentModel.find({})
  return Response.json(departments)
}
