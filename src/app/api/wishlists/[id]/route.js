import connectToDB from '@/configs/db'
import { authUser } from '@/utils/serverHelpers'
import wishlistModel from '@/models/wishlist'

export async function DELETE(req, { params }) {
  try {
    await connectToDB()
    const user = await authUser()
    if (!user) {
      return Response.json({ message: 'plz login first' },{status:401})
    }
    const productID = params.id
    await wishlistModel.findOneAndDelete({ user: user._id, product: productID })
    return Response.json({ message: 'product removed successfully' })
  } catch (error) {
    return Response.json({ message: error }, { status: 500 })
  }
}


