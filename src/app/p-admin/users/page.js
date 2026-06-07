import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import UsersTable from '@/components/templates/p-admin/UsersTable'
import React from 'react'
import userModel from '@/models/user'
import Titles from '@/components/templates/p-admin/Titles'

const page =async () => {
    const users = await userModel.find({})
    console.log('allusers=>', users);
    
    
  return (
    <AdminPanelLayout>
      <Titles title='کاربران'/>
      <div className="mycontainer ">
      {
        users.length === 0  ? (
        <div className='w-full h-[80px] bg-red-700 text-white flex justify-center items-center text-2xl mt-20'>
         <p>هیچ کاربری وجود ندارد</p>  
        </div>) :(<UsersTable   users={JSON.parse(JSON.stringify(users))}  />)
      }
        
      </div>
    </AdminPanelLayout>
  )
}

export default page
