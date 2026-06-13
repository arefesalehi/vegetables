import { authUser } from '@/utils/serverHelpers'
import Sidebars from '../modules/p-admin/Sidebars'
import { redirect } from 'next/navigation'


const AdminPanelLayout = async ({ children }) => {
  const user = await authUser()
  if (user) {
    if (user.role !== 'ADMIN') {
      return redirect('/login-register')
    }
  } else {
    return redirect('/login-register')
  }



   const safeUser = {
    _id: user._id?.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
    phone: user.phone,
  }



  return (
    <>
      <div className=" w-full h-auto   ">
        <Sidebars  user={safeUser} children={children} />
      </div>
    </>
  )
}

export default AdminPanelLayout
