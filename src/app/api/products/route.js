import connectToDB from '@/configs/db'
import cooperationModel from '@/models/product'
import { publicUploadUrl } from '@/utils/publicBaseUrl'
import { ensureUploadsRoot } from '@/utils/uploadsStorage'
import { writeFile } from 'fs/promises'
import path from 'path'




export async function POST(req) {
  try {
    
    await connectToDB()
    const formData = await req.formData()
    const title = formData.get('title')
    const img = formData.get('img')
    const desc = formData.get('desc')



    const buffer = Buffer.from(await img.arrayBuffer());
    const fileName= Date.now() + img.name
    const uploadsRoot = await ensureUploadsRoot()
    const imgPath = path.join(uploadsRoot, fileName)
    await writeFile(imgPath, buffer)
   

    const cooperation = await cooperationModel.create({
      name,
      price,
      shortDescription,
      longDescription,
      weight,
      category,
      count,
      code,
      logo,
      howToSave,
      tags,
      score,
      img: publicUploadUrl(fileName),
    })

    return Response.json(
      { message: 'Product created successfully :))', data: product },
      { status: 201 },
    )
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 })
  }
}

export async function PUT(req) {
  const formData = await req.formData()
  const img = formData.get('img')

  // Validation
  if (!img) {
    return Response.json(
      { message: 'Product has not image !!' },
      { status: 400 },
    )
  }

  try {
    const buffer = Buffer.from(await img.arrayBuffer())
    const filename = Date.now() + img.name

    const uploadsRoot = await ensureUploadsRoot()
    await writeFile(path.join(uploadsRoot, filename), buffer)

    // ✅
    return Response.json(
      { message: 'File uploaded successfully :))' },
      { status: 201 },
    )
  } catch (err) {
    console.log(err.message)
      console.error("❌ Error in POST /api/products:", err)

    return Response.json({ message: err.message }, { status: 500 })
  }
}


export async function GET() {
 await connectToDB()
  const product = await productModel.find({}, '-_v').populate('comments')
  return Response.json(product)
}

