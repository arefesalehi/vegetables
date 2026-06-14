
import connectToDB from '@/configs/db'
import productModel from '@/models/product'
import { publicUploadUrl } from '@/utils/publicBaseUrl'
import { ensureUploadsRoot } from '@/utils/uploadsStorage'
import { writeFile } from 'fs/promises'
import path from 'path'




export async function POST(req) {
  try {
    
    await connectToDB()
    const formData = await req.formData()
    const name = formData.get('name')
    const img = formData.get('img')
    const price = formData.get('price')
    const shortDescription = formData.get('shortDescription')
    const longDescription = formData.get('longDescription')
    const weight = formData.get('weight')
    const category = formData.get('category')
    const count = formData.get('count')
    const code = formData.get('code')
    const logo = formData.get('logo')
    const howToSave = formData.get('howToSave')
    const tags = formData.get('tags')
    const score = formData.get('score')
  





    const buffer = Buffer.from(await img.arrayBuffer());
    const fileName= Date.now() + img.name
    const uploadsRoot = await ensureUploadsRoot()
    const imgPath = path.join(uploadsRoot, fileName)
    await writeFile(imgPath, buffer)
   

    const products = await productModel.create({
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
      { message: 'Product created successfully :))', data: products },
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

