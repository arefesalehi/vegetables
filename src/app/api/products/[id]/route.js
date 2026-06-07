import connectToDB from "@/configs/db"
import productModel from '@/models/product'
export async function DELETE(req) {
    try {

       await connectToDB()
        const body = await req.json()
        const { id } = body

        await productModel.findOneAndDelete({ _id: id })
        return Response.json({ message: 'product deleted successfully' })



    } catch (error) {

        return Response.json({ message: error }, { status: 500 })

    }

}




export async function PUT(req) {
  try {
    await connectToDB()

    const body = await req.json()
    const {id,name,
          price,
          shortDescription,
          longDescription,
          code ,
          score,
          count,
          weight,
          category,
          howToSave,
          logo,
          img,
          tags,
         } = body

    await productModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          price,
          shortDescription,
          longDescription,
          code ,
          category,
          score,
          count,
          weight,
          howToSave,
          logo,
          img,
          tags,
      
        }
      }
    )

    return Response.json({ message: 'Product updated successfully' })
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 })
  }
}
