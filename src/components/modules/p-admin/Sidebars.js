'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { RiMenuUnfold2Fill } from 'react-icons/ri'
import { FaBell, FaSearch } from 'react-icons/fa'
import { TiHome } from "react-icons/ti";
import { FaComment } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { FaTicketSimple } from "react-icons/fa6";
import { MdDiscount } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { IoMdLogOut } from "react-icons/io";
import swal from 'sweetalert'
import Link from 'next/link'



const Sidebars = ({ children , user}) => {
  const [collapsed, setCollapsed] = useState(false)
  const [mounted, setMounted] = useState(false)
 
  const router = useRouter()


  


  

  useEffect(() => {
    setMounted(true)
  }, [])

  const logOut = () => {
    swal({
      title: 'آیا از خروج اطمینان دارید؟',
      icon: 'warning',
      buttons: ['خیر', 'بله'],
    }).then(async (result) => {
      if (result) {
        const res = await fetch('/api/auth/signout', { method: 'POST' })
        if (res.status === 200) {
          swal({
            title: 'با موفقیت خارج شدید',
            icon: 'success',
            buttons: 'باشه',
          }).then(() => {
            router.replace('/')
          })
        }
      }
    })
  }

  // 🛑 جلوگیری از رندر سمت سرور
  if (!mounted) return null

  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar */}
      <div style={{ direction: 'rtl' }}>
        <Sidebar
          rtl
          collapsed={collapsed}
          transitionDuration={500}
          className="bg-[#20d429] h-full "
        >
          <Menu >
            <div className="h-[70px] bg-[#027b4c] flex justify-center items-center">
              <Image
                width={150}
                height={150}
                src="/images/light.png"
                alt="logo"
              />
            </div>
            <MenuItem className='text-xl mt-10' icon={<TiHome />} component={<Link href="/p-admin" />}>
             پیشخوان
            </MenuItem>
            <MenuItem  className='text-xl'icon={<FaComment />} component={<Link href="/p-admin/comments" />}>
            کامنت ها
            </MenuItem>
            <MenuItem className='text-xl' icon={<FaProductHunt /> } component={<Link href="/p-admin/products" /> }>
             محصولات
            </MenuItem>
            <MenuItem className='text-xl' icon={<FaTicketSimple />}  component={<Link href="/p-admin/tickets" /> }>
             تیکت‌ها
            </MenuItem>
            <MenuItem  className='text-xl' icon={<MdDiscount />} component={<Link href="/p-admin/offs" />}>
            تخفیفات
            </MenuItem>
            <MenuItem className='text-xl' icon={<HiUsers /> } component={<Link href="/p-admin/users" />} >
             کاربران
            </MenuItem>
            <MenuItem  className='text-xl'icon={<IoMdLogOut /> } component={<Link href="/p-admin/products" />} onClick={logOut}>
              خروج
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>

      {/* Main content */}
      <div className="w-full">
        {/* Topbar */}
        <div className="w-full h-[70px] flex bg-[#027b4c] items-center px-4 justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setCollapsed(!collapsed)}>
              <RiMenuUnfold2Fill className="text-white w-6 h-6" />
            </button>
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
              <Image
                width={60}
                height={60}
                src="/images/author-13_70x70 (1).jpg"
                alt="admin"
              />
            </div>
            <div className="text-white">
              <p>{user.name}</p>
              <p className="text-sm">ادمین</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white rounded-md w-[300px] h-[40px] px-2">
              <input
                type="text"
                placeholder="جست‌وجو کنید..."
                className="w-full border-none outline-none pr-2"
              />
              <FaSearch className="text-gray-500" />
            </div>

            <div className="relative">
              <FaBell className="text-white bg-green-500 rounded p-2 w-10 h-10" />
              <div className="absolute top-1 left-1 w-4 h-4 text-xs flex items-center justify-center bg-white text-red-600 rounded-full">
                1
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export default Sidebars
