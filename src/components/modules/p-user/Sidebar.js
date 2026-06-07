'use client'
import { FaHeart } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import { LuShoppingBasket } from 'react-icons/lu'
import { IoHomeOutline } from 'react-icons/io5'
import { IoPersonOutline } from 'react-icons/io5'
import { MdCompareArrows } from 'react-icons/md'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { IoMdLogOut } from 'react-icons/io'
import Link from 'next/link'
import swal from 'sweetalert'
import { useRouter } from 'next/navigation'

const Sidebar = () => {
const router = useRouter()

const logOut = () => {
  swal({
    title: 'ایا از خروج اطمینان دارید ؟',
    icon: 'warning',
    buttons: ['خیر', 'بله'],
  }).then(async (result) => {
    if (result) {
      const res = await fetch('/api/auth/signout', {
        method: 'POST',
      })
      if (res.status === 200) {
        swal({
          title: 'شما با موفقیت از اکانت خارج شدید',
          icon: 'sucees',
          buttons: 'ok',
        }).then(() => {
          router.replace('/')
        })
      }
    }
  })
}



  return (
    <>
      <div className="w-[90%]   m-auto flex ">
        <div className="w-full md:w-[412px] border mt-40 rounded-[20px]">
          <h1 className="text-2xl font-bold p-8">حساب کاربری من</h1>

          <ul className="h-[428px] w-full bg-[#f2f2f2] rounded-[20px] overflow-hidden p-8">
          
            <Link href='/p-user' className="flex hover:text-[#02693a] text-lg  items-center h-[58px] w-full lg:text-xl border-b-2">
              <IoSettingsOutline className="w-[20px] h-[20px]" />
              <p className="mr-5">پیشخوان</p>
            </Link>
              <Link
              href="/p-user/wishlists"
              className="flex hover:text-[#02693a] items-center h-[58px] w-full text-lg lg:text-xl border-b-2"
            >
              <FaHeart className="w-[20px] h-[20px]" />
              <p className="mr-5">لیست علاقه مندی ها</p>
            </Link>

            <Link href='/p-user/orders' className="flex hover:text-[#02693a] items-center h-[58px] w-full text-lg lg:text-xl border-b-2">
               <LuShoppingBasket className="w-[20px] h-[20px]" />
              <p className="mr-5">سفارش ها</p>
            </Link>
            <Link href='/p-user/comments' className="flex hover:text-[#02693a] items-center h-[58px] w-full text-lg lg:text-xl border-b-2">
              <IoHomeOutline className="w-[20px] h-[20px]" />
              <p className="mr-5">کامنت ها</p>
            </Link>
            <Link href='/p-user/accountDetail' className="flex hover:text-[#02693a] items-center h-[58px] w-full text-lg lg:text-xl border-b-2">
              <IoPersonOutline className="w-[20px] h-[20px]" />
              <p className="mr-5">جزئیات حساب</p>
            </Link>
            <Link href='/p-user/tickets' className="flex hover:text-[#02693a] items-center h-[58px] w-full text-lg lg:text-xl border-b-2">
              <MdCompareArrows className="w-[20px] h-[20px]" />
              <p className="mr-5">تیکت ها</p>
            </Link>

            <Link href='' onClick={logOut} className="flex hover:text-[#02693a] items-center h-[58px] w-full text-lg lg:text-xl border-b-2">
              <IoMdLogOut className="w-[20px] h-[20px]" />
              <p className="mr-5">خروج</p>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
