import NewsLetter from '@/components/templates/products/NewsLetter'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Detailbar from '@/components/modules/detailBar/Detailbar'
import AllBreadCrumb from '@/components/modules/AllBreadCrumb/AllBreadCrumb'
import Sidebar from '@/components/modules/p-user/Sidebar'
import UserPanelLayout from '@/components/layouts/UserPanelLayout'
import UserPanelAlert from '@/components/modules/p-user/UserPanelAlert'
import { IoAlert } from 'react-icons/io5'
import { authUser } from '@/utils/serverHelpers'
import { redirect } from 'next/navigation'
import PishkhanBox from '@/components/templates/p-user/PishkhanBox'
import commentModel from '@/models/comment'
import wishlistModel from '@/models/wishlist'
import ticketModel from '@/models/ticket'
import PishkhanOrderBox from '@/components/templates/p-user/PishkhanOrderBox'

const page = async () => {

  const user = await authUser()
  console.log('userpanel user=>', user)

  const comments = await commentModel.find({ user: String(user?._id) })
  const wishlists = await wishlistModel.find({ user: user?._id })
  const tickets = await ticketModel.find({ user: user?._id, isAnswer: false })







  return (
    <>
      <UserPanelLayout>

        <UserPanelAlert
          icon={<IoAlert className="text-white" />}
          title={`سلام ${user?.name} نیستید ؟ `}
        />


        <p className="text-xl mt-10 leading-10">
          از داشبورد حساب کاربری خود می‌توانید سفارش‌های اخیر خود را مشاهده
          کنید،
          <span className="text-[#01512c]">آدرس‌های ارسال و صورت‌حساب</span> خود
          را مدیریت کنید، و
          <span className="text-[#01512c]">
            کلمه عبور و جزئیات حساب خود را ویرایش کنید.
          </span>
        </p>

        <div className='flex flex-wrap xl:mt-40 mt-20 justify-center  mr-5 '>
          <PishkhanBox title='تعداد کامنت ها' count={comments.length === 0 ? 'ثبت نشده' : comments.length} />
          <PishkhanBox title='تعداد تیکت ها' count={tickets.length === 0 ? 'ثبت نشده' : tickets.length} />
          <PishkhanOrderBox />
          <PishkhanBox title='تعداد علاقه مندی ها' count={wishlists.length === 0 ? 'ثبت نشده' : wishlists.length} />
        </div>




      </UserPanelLayout>
    </>
  )
}

export default page
