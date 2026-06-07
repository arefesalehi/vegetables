import UserPanelLayout from '@/components/layouts/UserPanelLayout'
import WishlistBox from '@/components/templates/wishlists/WishlistBox'
import React from 'react'
import wishlistModel from '@/models/wishlist'
import connectToDB from '@/configs/db'
import { authUser } from '@/utils/serverHelpers'
import UserPanelAlert from '@/components/modules/p-user/UserPanelAlert'
import { IoAlert } from 'react-icons/io5'
import Wishlistuserpanel from '@/components/templates/wishlists/Wishlistuserpanel'
const page = async () => {
  let wishes = []
  connectToDB()
  const user = await authUser()
  console.log('USER=>', user)

  if (user) {
    wishes = await wishlistModel
      .find({ user: user._id })
      .populate({ path: 'product' })
      .lean()
  }
  console.log('WISHES=>', wishes)

  return (
    <>
      <UserPanelLayout>
        <UserPanelAlert icon={<IoAlert className="text-white" />} title='لیست علاقه مندی ها' />


        {wishes.length > 0 && (
          <Wishlistuserpanel wishes={JSON.parse(JSON.stringify(wishes))} />
        )}

        {wishes.length === 0 && <div className="w-[98%] mr-5  m-auto h-[70px]  mt-60 text-white bg-red-800 text-xl flex justify-center items-center font-bold">
             محصولی به لیست علاقه مندی ها اضافه نشده است
            </div>}
      </UserPanelLayout>
    </>
  )
}

export default page
