import NewsLetter from '@/components/templates/products/NewsLetter'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Detailbar from '@/components/modules/detailBar/Detailbar'
import AllBreadCrumb from '@/components/modules/AllBreadCrumb/AllBreadCrumb'
import Sidebar from '@/components/modules/p-user/Sidebar'
import { authUser } from '@/utils/serverHelpers'
import UserPanelAlert from '../modules/p-user/UserPanelAlert'
import { IoAlert } from 'react-icons/io5'
import { redirect } from 'next/navigation'




const UserPanelLayout = async ({ children }) => {

  const user = await authUser()
  console.log('userrrrrrr:', user);
  if (!user) {
    redirect('/login-register')
  }

  return (
    <>
      <div className="w-full bg-black h-[100px]">
        {/* <Navbar isLogin={user ? true : false} /> */}
      </div>
      <Detailbar />
      <AllBreadCrumb route='حساب کاربری' />



      <div className=" w-[80%] m-auto  h-auto flex flex-col md:flex-row  ">
        <div className="md:w-1/3 w-full ">
          <Sidebar />
        </div>


        <div className="md:w-2/3 w-full mt-20  md:mt-40 mb-40">
          {children}
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </>
  )
}

export default UserPanelLayout
