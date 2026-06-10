
import connectToDB from '@/configs/db'
import { verifyAccessToken } from '@/utils/auth'
import { cookies } from 'next/headers'
import userModel from '@/models/user'

export async function GET() {
 await connectToDB()
   const cookieStore = cookies()

  const token = cookieStore.get('token')
  let user = null

  if (token) {
    const tokenPayload = verifyAccessToken(token.value)
    if (tokenPayload) {
      user = await userModel.findOne(
        { email: tokenPayload.email },
        '-password -refreshToken -_v',
      )
    }

    return Response.json(user)
  } else {
    return Response.json({ data: null, message: 'Not Access' }, { status: 401 })
  }
}
