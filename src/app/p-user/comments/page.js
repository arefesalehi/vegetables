import UserPanelLayout from '@/components/layouts/UserPanelLayout'
import UserPanelAlert from '@/components/modules/p-user/UserPanelAlert'
import CommentTable from '@/components/templates/p-user/CommentTable'
import { authUser } from '@/utils/serverHelpers'
import React from 'react'
import { FaBell } from 'react-icons/fa'
import commentModel from '@/models/comment'
import connectToDB from '@/configs/db'

const page = async () => {
  connectToDB()
  const user = await authUser()
  console.log('userrrr=>', user)

  const comments = await commentModel.find({ user:String(user._id)}).populate("productID")

  console.log('comments=>', comments)

  return (
    <UserPanelLayout>
      <UserPanelAlert
        icon={<FaBell className="text-white" />}
        title=" لیست کامنت ها "
        // link="مشاهده و مرور نظرات"
      />

      {
        comments.length>0 && ( <CommentTable comments={JSON.parse(JSON.stringify(comments))} />)
      }

      {
        comments.length === 0 && <div className="w-[98%] mr-5  m-auto h-[70px]  mt-60 text-white bg-red-800 text-xl flex justify-center items-center font-bold">
            هیچ کامنتی وجود ندارد
            </div>
      }
     

    </UserPanelLayout>
  )
}

export default page
