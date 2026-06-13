'use client'


import React from 'react'
import swal from 'sweetalert'
import { useRouter } from 'next/navigation'
const UsersTable = ({ users }) => {
const router = useRouter()


  const changeRole = async (userID) => {
    const res = await fetch('/api/users/roles', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: userID }),
    })

    console.log('resss=>', res)

    if (res.status === 200) {
      swal({
        title: 'نقش کاربر با موفقیت تغییر یافت',
        icon: 'success',
        buttons: 'ok',
      }).then(() => {
        router.refresh()
      })
    }
  }

  const removeUser=(userID)=>{
   swal({
   title:'ایا از حذف اطمینان دارید ؟',
   icon:'warning',
   buttons:["خیر","بله"]
   }).then(async(result)=>{
    if(result){
        const res =await fetch('/api/users',{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:userID})
        })

        if(res.status===200){
            swal({
                title:'کاربر با موفقیت حذف گردید',
                icon:'success',
                buttons:'ok'
            }).then(()=>{
                router.refresh()
            })
        }
    }
   })

  }

  const banUser=(email , phone)=>{
    swal({
    title:'ایا از بن اطمینان دارید ؟',
    icon:'warning',
    buttons:["خیر","بله"]
    }).then(async(result)=>{
     if(result){
         const res =await fetch('/api/users/bans',{
             method:'POST',
             headers:{
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({email, phone})
         })
 
         if(res.status===200){
             swal({
                 title:'کاربر با موفقیت بن گردید',
                 icon:'success',
                 buttons:'ok'
             }).then(()=>{
                 router.refresh()
             })
         }
     }
    })
 
   }


  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mt-10 ">
        <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-xl bg-green-400 text-white">
              <th scope="col" className="p-4">
                {/* <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />{' '}
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div> */}
              </th>
              <th scope="col" className="px-6 py-3">
                نام و نام خانوادگی
              </th>
              <th scope="col" className="px-6 py-3">
                نقش
              </th>
              <th scope="col" className="px-6 py-3">
                وضعیت
              </th>
              <th scope="col" className="px-6 py-3">
                ویرایش
              </th>
              <th scope="col" className="px-6 py-3">
                تغییر سطح
              </th>
              <th scope="col" className="px-6 py-3">
                حذف
              </th>
              <th scope="col" className="px-6 py-3">
                بن
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    {/* <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />{' '}
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div> */}
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src='/images/author-14_70x70-96x96.jpg'
                      
                      alt="Jese image"
                    />{' '}
                    <div className="ps-3">
                      <div className="text-base font-semibold">{user.name}</div>
                      <div className="font-normal text-gray-500">
                        {user.email ? user.email :'یافت نشد'}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    {user.role === 'ADMIN' ? 'مدیر' : 'کاربر'}{' '}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{' '}
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      ویرایش
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      onClick={() => changeRole(user._id)}
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      تغییر سطح
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <a
                    onClick={()=>removeUser(user._id)}
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      حذف
                    </a>
                  </td>

                  <td className="px-6 py-4">
                    <a
                    onClick={()=>banUser(user.email, user.phone)}
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      بن
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UsersTable
